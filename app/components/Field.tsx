import { Player, formation } from "../data/gameData";
import { PlayerMarker } from "./PlayerMarker";

type FieldProps = {
  formation: Player[];
  possession: { team: "blue" | "red"; role: string };
  activePlayerId: number | null;
};

export function Field({ formation, possession, activePlayerId }: FieldProps) {
  return (
    <div className="flex-1 bg-zinc-900 relative border-l-4 border-zinc-800 hidden lg:flex items-center justify-center p-8">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/bombonera.webp')",
          backgroundSize: "120%",
          backgroundPosition: "center",
        }}
      />

      <div className="relative left-20 w-full max-w-[370px] aspect-[2.6/3.8] border-4 border-white/20 rounded">
        <div className="absolute top-1/2 w-full h-0.5 bg-white/20 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />

        {formation.map((p) => (
          <PlayerMarker
            key={`blue-${p.id}`}
            pos={p}
            color="bg-blue-600"
            hasPossession={possession.team === "blue" && p.id === activePlayerId}
          />
        ))}

        {formation.map((p) => (
          <PlayerMarker
            key={`red-${p.id}`}
            pos={{ ...p, top: 100 - p.top }}
            color="bg-red-600"
            hasPossession={possession.team === "red" && p.id === activePlayerId}
          />
        ))}
      </div>
    </div>
  );
}
