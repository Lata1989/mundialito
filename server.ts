import http from "http";
import next from "next";
import { Server } from "socket.io";
import type { GameState } from "./lib/types";

const port = parseInt(process.env.PORT ?? "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
let latestGameState: GameState | null = null;

app.prepare().then(() => {
  const server = http.createServer((req, res) => {
    void handle(req, res);
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
