import type { Role } from "./types";

export const BANDERAS: Record<string, string> = {
  Bélgica: "🇧🇪",
  Paraguay: "🇵🇾",
  Arabia: "🇸🇦",
  México: "🇲🇽",
  Austria: "🇦🇹",
  Egipto: "🇪🇬",
  Portugal: "🇵🇹",
};

export const ROLE_LABELS: Record<Role, string> = {
  ARQ: "Arquero",
  DEF: "Defensa",
  LAT: "Lateral",
  "5": "Volante central",
  VOL: "Volante",
  EXT: "Extremo",
  "9": "Delantero",
};
