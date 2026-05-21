"use client";
import { BANDERAS } from "../data/gameData";

type TeamSelectionProps = {
  teams: { blue: string; red: string } | null;
  selectTeam: (name: string) => void;
};

export function TeamSelection({ teams, selectTeam }: TeamSelectionProps) {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-zinc-950 text-white p-6 md:p-12 text-center overflow-y-auto">
      <div className="max-w-6xl w-full">
        <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter italic">
          SELECCIONAR EQUIPO <br />
          <span className={!teams ? "text-blue-500" : "text-red-500"}>
            {!teams ? "AZUL" : "ROJO"}
          </span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-8">
          {Object.entries(BANDERAS).map(([name, flag]) => (
            <button
              key={name}
              onClick={() => selectTeam(name)}
              className="group relative flex flex-col items-center justify-center p-8 bg-zinc-900/50 rounded-2xl hover:bg-zinc-800 transition-all border-2 border-zinc-800 hover:border-zinc-500 active:scale-95 overflow-hidden"
            >
              <span className="text-7xl md:text-8xl mb-4 transform group-hover:scale-110 transition-transform">
                {flag}
              </span>
              <p className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-white">
                {name}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
