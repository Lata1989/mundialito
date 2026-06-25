import http from "http";
import next from "next";
import { Server } from "socket.io";
import type { GameState } from "./lib/types";

const port = parseInt(process.env.PORT ?? "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
let latestGameState: GameState | null = null;

const matchRooms = new Map<
  string,
  { state?: GameState; clients: Set<http.ServerResponse> }
>();

const readRequestBody = (req: http.IncomingMessage): Promise<string> =>
  new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });

const getOrCreateRoom = (matchId: string) => {
  if (!matchRooms.has(matchId)) {
    matchRooms.set(matchId, { clients: new Set() });
  }
  return matchRooms.get(matchId)!;
};

const sendSseEvent = (
  res: http.ServerResponse,
  event: string,
  data: unknown,
) => {
  res.write(`event: ${event}\n`);
  res.write(`data: ${JSON.stringify(data)}\n\n`);
};

app.prepare().then(() => {
  const server = http.createServer(async (req, res) => {
    try {
      const baseUrl = `http://${req.headers.host ?? "localhost"}`;
      const url = new URL(req.url ?? "", baseUrl);
      const pathname = url.pathname;

      if (req.method === "GET" && pathname.startsWith("/sse/")) {
        const matchId = pathname.slice(5);
        if (!matchId) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Missing match id");
          return;
        }

        const room = getOrCreateRoom(matchId);
        res.writeHead(200, {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache, no-transform",
          Connection: "keep-alive",
          "Access-Control-Allow-Origin": "*",
        });
        res.write("retry: 10000\n\n");
        room.clients.add(res);

        if (room.state) {
          sendSseEvent(res, "game:update", room.state);
        }

        req.on("close", () => {
          room.clients.delete(res);
        });
        return;
      }

      if (req.method === "OPTIONS" && pathname.startsWith("/api/match/")) {
        res.writeHead(204, {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        });
        res.end();
        return;
      }

      if (pathname.startsWith("/api/match/")) {
        const matchId = pathname.slice(11);
        if (!matchId) {
          res.writeHead(400, { "Content-Type": "text/plain" });
          res.end("Missing match id");
          return;
        }

        if (req.method === "GET") {
          const room = getOrCreateRoom(matchId);
          if (!room.state) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: "Match not found" }));
            return;
          }
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify(room.state));
          return;
        }

        if (req.method === "POST") {
          const body = await readRequestBody(req);
          let gameState: GameState;
          try {
            gameState = JSON.parse(body) as GameState;
          } catch (error) {
            res.writeHead(400, { "Content-Type": "text/plain" });
            res.end("Invalid JSON");
            return;
          }

          latestGameState = gameState;
          const room = getOrCreateRoom(matchId);
          room.state = gameState;

          room.clients.forEach((client) => {
            sendSseEvent(client, "game:update", gameState);
          });

          res.writeHead(204, {
            "Access-Control-Allow-Origin": "*",
          });
          res.end();
          return;
        }
      }

      void handle(req, res);
    } catch (error) {
      console.error("Server error:", error);
      if (!res.headersSent) {
        res.writeHead(500, { "Content-Type": "text/plain" });
      }
      res.end("Internal server error");
    }
  });

  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    path: "/socket.io",
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    if (latestGameState) {
      socket.emit("game:update", latestGameState);
    }

    socket.on("game:update", (gameState: GameState) => {
      latestGameState = gameState;
      socket.broadcast.emit("game:update", gameState);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});
