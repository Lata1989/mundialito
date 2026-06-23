"use client";

import { useEffect, useRef } from "react";
import { io, type Socket } from "socket.io-client";
import type { GameState } from "./types";

const UPDATE_EVENT = "game:update";

function createSocket() {
  return io(undefined, {
    transports: ["websocket"],
    path: "/socket.io",
  });
}

export function useSocketEmitter(gameState: GameState | null) {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = createSocket();
    socketRef.current = socket;

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socketRef.current || !gameState) return;
    socketRef.current.emit(UPDATE_EVENT, gameState);
  }, [gameState]);
}

export function useSocketListener(onUpdate: (state: GameState) => void) {
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socket = createSocket();
    socketRef.current = socket;
    socket.on(UPDATE_EVENT, onUpdate);

    return () => {
      socket.off(UPDATE_EVENT, onUpdate);
      socket.disconnect();
    };
  }, [onUpdate]);
}
