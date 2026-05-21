import { Player } from "../data/gameData";

type PlayerMarkerProps = {
  pos: Player;
  color: string;
  hasPossession: boolean;
};

export function PlayerMarker({ pos, color, hasPossession }: PlayerMarkerProps) {
  return (
    <div
      className={`absolute w-8 h-8 ${color} rounded-full border-2 border-white transition-all duration-700 flex items-center justify-center ${
        hasPossession
          ? "scale-[2.2] z-30 ring-4 ring-yellow-400 shadow-[0_0_30px_rgba(253,224,71,0.6)]"
          : "opacity-80"
      }`}
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {hasPossession && <div className="w-2 h-2 bg-white rounded-full animate-ping" />}
    </div>
  );
}
