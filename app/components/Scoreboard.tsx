import { BANDERAS, Role } from "../data/gameData";

type ScoreboardProps = {
  teams: { blue: string; red: string };
  score: { blue: number; red: number };
  timeLeft: number;
  possession: { team: "blue" | "red"; role: Role };
};

export function Scoreboard({ teams, score, timeLeft }: ScoreboardProps) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-2xl shadow-xl mb-10 mt-2 border-2 border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-4 md:gap-6">
        <span className="text-5xl md:text-6xl drop-shadow-sm">{BANDERAS[teams.blue]}</span>
        <span className="text-4xl md:text-6xl font-black text-blue-600 tabular-nums">{score.blue}</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-1">Tiempo</div>
        <div
          className={`px-6 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-3xl md:text-4xl font-mono font-black shadow-inner border border-zinc-200 dark:border-zinc-700 ${
            timeLeft < 10 ? "text-red-500 animate-pulse" : "text-zinc-700 dark:text-zinc-200"
          }`}
        >
          0:{timeLeft.toString().padStart(2, "0")}
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <span className="text-4xl md:text-6xl font-black text-red-600 tabular-nums">{score.red}</span>
        <span className="text-5xl md:text-6xl drop-shadow-sm">{BANDERAS[teams.red]}</span>
      </div>
    </div>
  );
}
