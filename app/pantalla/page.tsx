"use client";

import { useState, useEffect } from "react";
import { useSocketListener } from "@/lib/socket";
import type { GameState } from "@/lib/types";
import { BANDERAS, ROLE_LABELS } from "@/lib/gameConstants";

const POSITION_TEMPLATES = [
  { role: "ARQ", top: 96, left: 50, dorsal: "1" },
  { role: "DEF", top: 85, left: 35, dorsal: "2" },
  { role: "DEF", top: 82, left: 65, dorsal: "6" },
  { role: "LAT", top: 74, left: 13, dorsal: "4" },
  { role: "LAT", top: 74, left: 85, dorsal: "3" },
  { role: "5", top: 60, left: 50, dorsal: "5" },
  { role: "VOL", top: 53, left: 30, dorsal: "8" },
  { role: "VOL", top: 43, left: 72, dorsal: "10" },
  { role: "EXT", top: 28, left: 23, dorsal: "7" },
  { role: "EXT", top: 20, left: 82, dorsal: "11" },
  { role: "9", top: 19, left: 50, dorsal: "9" },
] as const;

const LOGOS: Record<string, string> = {
  "Argentina": "/logos/argentina.png",
  "Brasil": "/logos/brasil.png",
  "España": "/logos/espana.png",
};

const defaultState: GameState = {
  question: "Esperando inicio del juego...",
  options: [],
  country: "",
  timeLeft: 0,
  possessionTeam: "blue",
  possessionRole: "5",
  score: { blue: 0, red: 0 },
  teams: { blue: "---", red: "---" },
  isWaitingTransition: false,
};

const getTeamCode = (name: string) => {
  if (!name || name === "---") return "---";
  return name.substring(0, 3).toUpperCase();
};

export default function PublicScreen() {
  const [gameState, setGameState] = useState<GameState>(defaultState);
  const [darkMode, setDarkMode] = useState(true);

  useSocketListener(setGameState);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  const renderTeamLogo = (teamName: string, fallbackEmoji: string, sizeClass = "w-10 h-10") => {
    if (LOGOS[teamName]) {
      return <img src={LOGOS[teamName]} alt={`Logo ${teamName}`} className={`${sizeClass} object-contain drop-shadow-md`} />;
    }
    return <span className="text-3xl sm:text-4xl filter drop-shadow-sm select-none">{BANDERAS[teamName] ?? fallbackEmoji}</span>;
  };

  const blueBallOwnerIndex = gameState.possessionTeam === "blue" && !gameState.isWaitingTransition ? POSITION_TEMPLATES.findIndex((p) => p.role === gameState.possessionRole) : -1;
  const redBallOwnerIndex = gameState.possessionTeam === "red" && !gameState.isWaitingTransition ? POSITION_TEMPLATES.findIndex((p) => p.role === gameState.possessionRole) : -1;

  return (
    <div className={`min-h-screen transition-colors duration-300 px-4 py-4 sm:px-6 lg:px-8 font-sans ${darkMode ? "bg-zinc-950 text-white" : "bg-slate-100 text-slate-900"}`}>
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6">
        
        {/* INTERRUPTOR TEMA */}
        <header className="relative flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 px-3 rounded-full border shadow-sm text-xs font-bold hover:scale-105 active:scale-95 transition-all select-none z-50 ${darkMode ? "bg-zinc-900 border-zinc-800 text-yellow-400" : "bg-white border-slate-200 text-slate-700"}`}
          >
            {darkMode ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </header>

        {/* MARCADOR ESTILO TRINI CENTRALIZADO */}
        <div className="flex items-center justify-center select-none font-mono tracking-tight w-full">
          <div className="flex items-center bg-black text-white rounded-full px-4 sm:px-6 shadow-2xl border border-zinc-800 w-full max-w-4xl min-h-[5.5rem] py-2">
            <div className={`flex items-center justify-end gap-2 sm:gap-3 flex-1 transition-opacity duration-300 ${gameState.possessionTeam === "blue" ? "opacity-100" : "opacity-40"}`}>
              <div className="hidden sm:block">{renderTeamLogo(gameState.teams.blue, "🔵", "w-9 h-9")}</div>
              <div className={`w-3 h-3 rounded-full bg-blue-500 border border-white/50 transition-all ${gameState.possessionTeam === "blue" && !gameState.isWaitingTransition ? "animate-pulse ring-4 ring-white scale-110" : ""}`} />
              <span className="text-2xl sm:text-4xl font-black tracking-tighter text-white pr-2">{getTeamCode(gameState.teams.blue)}</span>
            </div>

            <div className="flex items-center justify-center mx-2 sm:mx-4">
              <div className="bg-[#64e3b7] text-black h-10 sm:h-12 px-4 sm:px-5 rounded-l-2xl flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-black tabular-nums">{gameState.score.blue}</span>
              </div>
              <div className="h-14 sm:h-20 aspect-square flex items-center justify-center z-10 overflow-hidden bg-black px-1">
                <img src="/TRINI.png" alt="Logo TRINI" className="h-full w-full object-contain filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)]" />
              </div>
              <div className="bg-[#64e3b7] text-black h-10 sm:h-12 px-4 sm:px-5 rounded-r-2xl flex items-center justify-center">
                <span className="text-2xl sm:text-4xl font-black tabular-nums">{gameState.score.red}</span>
              </div>
            </div>

            <div className={`flex items-center justify-start gap-2 sm:gap-3 flex-1 transition-opacity duration-300 ${gameState.possessionTeam === "red" ? "opacity-100" : "opacity-40"}`}>
              <span className="text-2xl sm:text-4xl font-black tracking-tighter text-white pl-2">{getTeamCode(gameState.teams.red)}</span>
              <div className={`w-3 h-3 rounded-full bg-red-500 border border-white/50 transition-all ${gameState.possessionTeam === "red" && !gameState.isWaitingTransition ? "animate-pulse ring-4 ring-white scale-110" : ""}`} />
              <div className="hidden sm:block">{renderTeamLogo(gameState.teams.red, "🔴", "w-9 h-9")}</div>
            </div>
          </div>
        </div>

        {/* CONTENIDO PRINCIPAL - SIN CONTENEDORES INTERNOS MOLESTOS */}
        <section className="grid gap-8 lg:grid-cols-[1fr_1.3fr] items-center mt-4">
          
          {/* SECCIÓN TRIVIA (Limpia y Flotante) */}
          <div className="flex flex-col justify-center py-4 min-h-[400px]">
            {gameState.isWaitingTransition ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-pulse">
                <div className="text-6xl mb-4">📢</div>
                <h3 className="text-2xl font-black uppercase italic tracking-tight text-amber-500">Preparando la siguiente jugada...</h3>
                <p className="text-xs uppercase tracking-widest opacity-60 mt-1">Acomodando las líneas tácticas</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4 border-slate-300/30 dark:border-zinc-800">
                  <div>
                    <span className="text-xs font-black tracking-widest uppercase opacity-50">Pregunta de</span>
                    <h4 className="text-base font-black uppercase text-indigo-500 dark:text-indigo-400">{gameState.country || "Fútbol"}</h4>
                  </div>
                  <div className={`text-4xl font-black tracking-tighter tabular-nums ${gameState.timeLeft <= 10 ? "text-red-500 animate-pulse" : "text-emerald-500 dark:text-emerald-400"}`}>
                    ⏱️ {gameState.timeLeft}s
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight uppercase tracking-tight">
                  {gameState.question}
                </h2>

                <div className="grid grid-cols-1 gap-3 pt-4">
                  {gameState.options.map((option, index) => (
                    <div 
                      key={option} 
                      className={`flex items-center gap-4 rounded-xl p-4 font-bold border transition-all ${
                        darkMode 
                          ? "bg-zinc-900/40 border-zinc-800/80 text-zinc-200" 
                          : "bg-white border-slate-200 text-slate-700 shadow-sm"
                      }`}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white text-sm font-black">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-base sm:text-lg uppercase">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* DIBUJO DE LA CANCHA (Gigante y protagonista) */}
          <div className="w-full flex justify-center lg:justify-end px-2">
            <div
              className="relative w-full max-w-[720px] aspect-[100/115] border-4 border-white/20 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.45)] transition-all duration-300"
              style={{ background: "repeating-linear-gradient(0deg, #2e7d32, #2e7d32 8%, #388e3c 8%, #388e3c 16%)" }}
            >
              {/* Líneas de la Cancha */}
              <div className="absolute top-1/2 left-0 w-full h-[3px] bg-white/40 -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 w-32 h-32 border-[3px] border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-[62%] h-[14%] border-b-[3px] border-x-[3px] border-white/40 -translate-x-1/2" />
              <div className="absolute top-0 left-1/2 w-[32%] h-[5%] border-b-[3px] border-x-[3px] border-white/30 -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-[62%] h-[14%] border-t-[3px] border-x-[3px] border-white/40 -translate-x-1/2" />
              <div className="absolute bottom-0 left-1/2 w-[32%] h-[5%] border-t-[3px] border-x-[3px] border-white/30 -translate-x-1/2" />

              {/* Jugadores Azules */}
              {POSITION_TEMPLATES.map((p, index) => {
                const isBallOwner = index === blueBallOwnerIndex;
                return (
                  <div
                    key={`public-blue-${index}`}
                    className={`absolute w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 bg-blue-600 transition-all duration-500 shadow-lg flex items-center justify-center font-black text-xs sm:text-sm text-white border-white/80 ${p.role === "ARQ" ? "border-yellow-400 bg-zinc-800" : ""} ${isBallOwner ? "scale-[1.35] z-50 ring-4 ring-yellow-400 shadow-[0_0_30px_rgba(250,204,21,1)]" : ""}`}
                    style={{ top: `${p.top}%`, left: `${p.left}%`, transform: "translate(-50%, -50%)" }}
                  >
                    {isBallOwner ? <span className="animate-bounce text-sm sm:text-base">⚽</span> : p.dorsal}
                  </div>
                );
              })}

              {/* Jugadores Rojos */}
              {POSITION_TEMPLATES.map((p, index) => {
                const topPos = 100 - p.top;
                const isBallOwner = index === redBallOwnerIndex;
                return (
                  <div
                    key={`public-red-${index}`}
                    className={`absolute w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 bg-red-600 transition-all duration-500 shadow-lg flex items-center justify-center font-black text-xs sm:text-sm text-white border-white/80 ${p.role === "ARQ" ? "border-yellow-400 bg-zinc-800" : ""} ${isBallOwner ? "scale-[1.35] z-50 ring-4 ring-yellow-400 shadow-[0_0_30px_rgba(250,204,21,1)]" : ""}`}
                    style={{ top: `${topPos}%`, left: `${p.left}%`, transform: "translate(-50%, -50%)" }}
                  >
                    {isBallOwner ? <span className="animate-bounce text-sm sm:text-base">⚽</span> : p.dorsal}
                  </div>
                );
              })}
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}