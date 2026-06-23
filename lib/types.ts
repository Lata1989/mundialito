export type Role = "ARQ" | "DEF" | "LAT" | "5" | "VOL" | "EXT" | "9";

export interface GameState {
  question: string;
  options: string[];
  country: string;
  timeLeft: number;
  possessionTeam: "blue" | "red";
  possessionRole: Role;
  score: { blue: number; red: number };
  teams: { blue: string; red: string };
  isWaitingTransition: boolean;
}
