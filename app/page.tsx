"use client";
import { useState, useMemo } from "react";

// --- CONFIGURACIÓN Y TIPOS ---
const BANDERAS: Record<string, string> = {
  "Japón": "🇯🇵", "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Colombia": "🇨🇴", "Francia": "🇫🇷", "Canadá": "🇨🇦", "Uruguay": "🇺🇾",
  "Brasil": "🇧🇷", "Marruecos": "🇲🇦", "Croacia": "🇭🇷", "España": "🇪🇸", "EEUU": "🇺🇸", "Ecuador": "🇪🇨",
  "Alemania": "🇩🇪", "Bélgica": "🇧🇪", "Paraguay": "🇵🇾", "Arabia": "🇸🇦", "Países Bajos": "🇳🇱", "México": "🇲🇽",
  "Suiza": "🇨🇭", "Austria": "🇦🇹", "Egipto": "🇪🇬", "Escocia": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Portugal": "🇵🇹", "Noruega": "🇳🇴",
  "Argentina": "🇦🇷"
};

const PASS_SOUNDS = [
  "/PASE CORTO.m4a", "/PASE CORTO CENTURION (1).m4a", "/PASE CORTO MARADONA.m4a",
  "/PASE LARGO.m4a", "/PASE LARGO INVENTE.m4a", "/PASE LARGO MARADONA .m4a",
  "/PASE LARGO POCHO.m4a", "/PASE LARGO POMELO.m4a", "/pase largo vignolo.m4a",
  "/BRRR PASE LARGO.m4a", "/TAN TAN PASE .m4a"
];

const GOAL_SOUNDS = [
  "/gol almiron.m4a", "/GOL BENZEMAAAA.m4a", "/gol canrtalo cantalo.m4a",
  "/GOL DI MARIA.m4a", "/GOL PALERMO .m4a", "/marteee gol araujo.m4a",
  "/relato gol araujo.m4a", "/grito1.mp3"
];

const INCORRECT_SOUND = "/incorrecta respuesta.m4a";

type Role = "DEF" | "LAT" | "5" | "VOL" | "EXT" | "9";

interface Player {
  id: number;
  role: Role;
  top: number;
  left: number;
}

const formation: Player[] = [
  { id: 1, role: "DEF", top: 83, left: 65 },
  { id: 2, role: "DEF", top: 80, left: 35 },
  { id: 3, role: "LAT", top: 77, left: 10 },
  { id: 4, role: "LAT", top: 68, left: 92 },
  { id: 5, role: "5", top: 63, left: 55 },
  { id: 6, role: "VOL", top: 45, left: 30 },
  { id: 7, role: "VOL", top: 43, left: 75 },
  { id: 8, role: "EXT", top: 35, left: 15 },
  { id: 9, role: "EXT", top: 23, left: 85 },
  { id: 10, role: "9", top: 21, left: 52 },
];

const QUESTIONS_DB = [
  { country: "España", question: "¿Qué equipo de fútbol es conocido como 'Los Colchoneros'?", answer: "atlético de madrid", options: ["Real Madrid", "FC Barcelona", "Atlético de Madrid", "Sevilla FC"] },
  { country: "España", question: "¿Cuál es el postre español famoso que es como crema frita?", answer: "leche frita", options: ["Churros", "Flan", "Leche Frita", "Turrón"] },
  { country: "España", question: "¿En qué año ganó España su primer Mundial?", answer: "2010", options: ["2006", "2010", "2014", "1998"] },
  { country: "España", question: "¿Cuál es la capital de España?", answer: "madrid", options: ["Barcelona", "Sevilla", "Valencia", "Madrid"] },
  { country: "España", question: "¿Cómo se llama el estadio del Real Madrid?", answer: "santiago bernabéu", options: ["Camp Nou", "Santiago Bernabéu", "Metropolitano", "Mestalla"] },
  { country: "Japón", question: "¿Cuál es la capital de Japón?", answer: "tokio", options: ["Kioto", "Osaka", "Hiroshima", "Tokio"] },
  { country: "Japón", question: "¿Qué plato consiste en pescado crudo sobre arroz con vinagre?", answer: "sushi", options: ["Ramen", "Tempura", "Sushi", "Sashimi"] },
  { country: "Japón", question: "¿Cuál es la montaña más alta de Japón?", answer: "monte fuji", options: ["Monte Fuji", "Monte Aso", "Monte Kita", "Monte Ontake"] },
  { country: "Japón", question: "¿Cuál es la moneda de Japón?", answer: "yen", options: ["Dólar", "Euro", "Yen", "Yuan"] },
  { country: "Japón", question: "¿Cómo se llaman los guerreros sombra de Japón?", answer: "ninja", options: ["Samurái", "Ninja", "Ronin", "Shogun"] },
  { country: "Argentina", question: "¿En qué estadio juega Boca Juniors?", answer: "la bombonera", options: ["El Monumental", "La Bombonera", "El Cilindro", "El Nuevo Gasómetro"] },
  { country: "Argentina", question: "¿Cuál es el postre clásico argentino hecho con leche y azúcar?", answer: "dulce de leche", options: ["Flan", "Arroz con leche", "Dulce de leche", "Torta Frita"] },
  { country: "Fútbol General", question: "¿Máximo goleador histórico de la Champions League?", answer: "cristiano ronaldo", options: ["Lionel Messi", "Cristiano Ronaldo", "Lewandowski", "Benzema"] },
];

export default function SoccerQuiz() {
  const [teams, setTeams] = useState<{ blue: string, red: string } | null>(null);
  const [possession, setPossession] = useState<{ team: 'blue' | 'red', role: Role }>({ team: 'blue', role: '5' });
  const [isMultipleChoice, setIsMultipleChoice] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState({ blue: 0, red: 0 });
  const [feedback, setFeedback] = useState("");
  const [currentQ, setCurrentQ] = useState(QUESTIONS_DB[0]);

  const activePlayerId = useMemo(() => {
    const playersInRole = formation.filter(p => p.role === possession.role);
    if (playersInRole.length === 0) return null;
    return playersInRole[Math.floor(Math.random() * playersInRole.length)].id;
  }, [possession.role, possession.team]);

  const playRandomSound = (sounds: string[]) => {
    const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
    audio.play().catch(() => {});
  };

  const selectTeam = (name: string) => {
    if (!teams) setTeams({ blue: name, red: "" });
    else if (!teams.red) {
      setTeams({ ...teams, red: name });
      pickQuestion(name, teams.blue);
    }
  };

  const pickQuestion = (team1: string, team2: string) => {
    const pool = QUESTIONS_DB.filter(q => [team1, team2, "Argentina", "Fútbol General"].includes(q.country));
    setCurrentQ(pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : QUESTIONS_DB[0]);
  };

  const resetAfterAction = () => {
    setUserInput("");
    setIsMultipleChoice(false); // Siempre vuelve a Pase Largo por defecto
  };

  const handleGoal = () => {
    playRandomSound(GOAL_SOUNDS);
    setFeedback("¡GOOOOOOOL! ⚽🔥🔥🔥");
    setScore(prev => ({ ...prev, [possession.team]: prev[possession.team] + 1 }));
    resetAfterAction();
    setTimeout(() => {
      setPossession({ team: possession.team === 'blue' ? 'red' : 'blue', role: '5' });
      setFeedback("");
      pickQuestion(teams!.blue, teams!.red);
    }, 3500);
  };

  const processAnswer = (ans: string) => {
    const isCorrect = ans.toLowerCase().trim() === currentQ.answer.toLowerCase();
    const currentTeam = possession.team;
    const otherTeam = currentTeam === 'blue' ? 'red' : 'blue';

    if (isCorrect) {
      const mode = isMultipleChoice ? "corto" : "largo";
      let nextRole: Role = possession.role;

      if (possession.role === "DEF") nextRole = mode === "corto" ? "LAT" : "5";
      else if (possession.role === "LAT") nextRole = mode === "corto" ? "5" : "VOL";
      else if (possession.role === "5") nextRole = mode === "corto" ? "VOL" : "EXT";
      else if (possession.role === "VOL") nextRole = mode === "corto" ? "EXT" : "9";
      else if (possession.role === "EXT") {
        if (mode === "largo") { handleGoal(); return; }
        nextRole = "9";
      } else if (possession.role === "9") {
        handleGoal();
        return;
      }
      playRandomSound(PASS_SOUNDS);
      setPossession({ team: currentTeam, role: nextRole });
      setFeedback("¡Pase quirúrgico! ✅");
    } else {
      new Audio(INCORRECT_SOUND).play().catch(() => {});
      let recoveryRole: Role = "5";
      if (possession.role === "DEF") recoveryRole = "9";
      else if (possession.role === "LAT") recoveryRole = "EXT";
      else if (possession.role === "5") recoveryRole = "VOL";
      else if (possession.role === "VOL") recoveryRole = "5";
      else if (possession.role === "EXT") recoveryRole = "LAT";
      else if (possession.role === "9") recoveryRole = "DEF";
      setPossession({ team: otherTeam, role: recoveryRole });
      setFeedback("¡Error! Recuperación rival ❌");
    }
    resetAfterAction();
    pickQuestion(teams!.blue, teams!.red);
  };

  if (!teams || !teams.red) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-950 text-white p-6">
        <h1 className="text-5xl font-black mb-12 uppercase tracking-tighter text-center">
          <span className="opacity-50">ELIGE EQUIPO:</span> <span className={!teams ? "text-blue-500" : "text-red-500"}>{!teams ? "Azul" : "Rojo"}</span>
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 w-full max-w-7xl">
          {Object.entries(BANDERAS).map(([name, flag]) => (
            <button key={name} onClick={() => selectTeam(name)} className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 flex flex-col items-center group hover:bg-zinc-800 transition-all">
              <span className="text-6xl">{flag}</span>
              <p className="text-[10px] uppercase font-bold text-zinc-500 mt-2 text-center group-hover:text-white">{name}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const isShootingRole = possession.role === "EXT" || possession.role === "9";

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white dark:bg-zinc-950 font-sans">
      {/* PANEL DE JUEGO (IZQUIERDA) */}
      <div className="flex-[1.1] p-4 md:p-8 flex flex-col h-full lg:min-h-screen">
        
        {/* Marcador Minimalista Estilo TV */}
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-6 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{BANDERAS[teams.blue]}</span>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-black text-zinc-400">Local</p>
              <p className="text-3xl font-black text-blue-600 leading-none">{score.blue}</p>
            </div>
          </div>
          <div className="text-zinc-300 font-black italic text-xl uppercase tracking-tighter">Mundialito</div>
          <div className="flex items-center gap-4 text-right">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-black text-zinc-400">Visitante</p>
              <p className="text-3xl font-black text-red-600 leading-none">{score.red}</p>
            </div>
            <span className="text-4xl">{BANDERAS[teams.red]}</span>
          </div>
        </div>

        {/* Turno y Pregunta */}
        <div className="flex-1 flex flex-col justify-center max-w-xl mx-auto w-full">
          <div className="mb-8">
            <div className={`inline-block mb-4 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] ${possession.team === 'blue' ? 'bg-blue-600 text-white' : 'bg-red-600 text-white'}`}>
              En posesión: {possession.team === 'blue' ? teams.blue : teams.red} — {possession.role}
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tighter text-zinc-900 dark:text-white uppercase italic">
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-3">
            {isMultipleChoice ? (
              /* MODO PASE CORTO (SOLO OPCIONES) */
              <div className="grid grid-cols-1 gap-2">
                {currentQ.options.map(opt => (
                  <button
                    key={opt}
                    onClick={() => processAnswer(opt)}
                    className="group flex justify-between items-center p-5 text-lg border border-zinc-200 dark:border-zinc-800 rounded-lg font-bold hover:bg-zinc-950 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:scale-[0.98]"
                  >
                    <span className="uppercase tracking-tight">{opt}</span>
                    <span>→</span>
                  </button>
                ))}
              </div>
            ) : (
              /* MODO PASE LARGO / DISPARO (DEFAULT) */
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  value={userInput}
                  onChange={e => setUserInput(e.target.value)}
                  placeholder="ESCRIBÍ LA RESPUESTA EXACTA..."
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border-b-4 border-zinc-200 dark:border-zinc-800 p-6 text-2xl font-black uppercase outline-none focus:border-blue-500 transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && processAnswer(userInput)}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <button
                    onClick={() => processAnswer(userInput)}
                    className={`p-6 text-xl font-black uppercase tracking-tighter transition-all active:scale-95 shadow-xl ${isShootingRole ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-zinc-950 dark:bg-white text-white dark:text-black'}`}
                  >
                    {isShootingRole ? "¡MANDALA A GUARDAR! ⚽🚀" : "DAR PASE LARGO 👟"}
                  </button>
                  <button
                    onClick={() => setIsMultipleChoice(true)}
                    className="p-6 text-xl font-black uppercase tracking-tighter border-2 border-zinc-950 dark:border-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
                  >
                    BUSCAR PASE CORTO 🙋‍♂️
                  </button>
                </div>
              </div>
            )}
          </div>

          {feedback && (
            <div className="mt-8 border-l-8 border-green-500 bg-zinc-100 dark:bg-zinc-800 p-4 animate-pulse">
              <p className="text-xl font-black italic uppercase tracking-tighter text-zinc-900 dark:text-white">
                {feedback}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* --- EL ESTADIO (LA BOMBONERA) --- */}
      <div className="flex-1 bg-black p-4 md:p-8 flex items-center justify-center overflow-hidden relative border-l-4 border-zinc-800">
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-center opacity-60"
          style={{
            backgroundImage: "url('/bombonera.webp')",
            backgroundSize: "140%",
            backgroundPosition: "80% 50%"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[400px] aspect-[3/4] border-[4px] border-white/30 rounded-sm shadow-[0_0_100px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 border-2 border-white/20 m-1" />
          <div className="absolute top-1/2 w-full h-[2px] bg-white/20 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />

          {/* ARCO SUPERIOR */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 border-x-2 border-b-2 border-white/60 z-10">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px', opacity: 0.3 }}></div>
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-28 border-x-2 border-b-2 border-white/20" />

          {/* ARCO INFERIOR */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-6 border-x-2 border-t-2 border-white/60 z-10">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[0.5px]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '4px 4px', opacity: 0.3 }}></div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-28 border-x-2 border-t-2 border-white/20" />

          {/* JUGADORES */}
          {formation.map(p => (
            <PlayerMarker
              key={`blue-${p.id}`}
              pos={p}
              color="bg-blue-600"
              hasPossession={possession.team === 'blue' && p.id === activePlayerId}
            />
          ))}
          {formation.map(p => (
            <PlayerMarker
              key={`red-${p.id}`}
              pos={{ ...p, top: 100 - p.top }}
              color="bg-red-600"
              hasPossession={possession.team === 'red' && p.id === activePlayerId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlayerMarker({ pos, color, hasPossession }: { pos: Player, color: string, hasPossession: boolean }) {
  return (
    <div
      className={`absolute w-10 h-10 ${color} rounded-full border-[3px] border-white/90 transition-all duration-700 flex items-center justify-center
      ${hasPossession ? "scale-[2.0] z-30 ring-4 ring-yellow-400 shadow-[0_0_40px_rgba(255,255,255,0.7)]" : "opacity-90 shadow-md"}`}
      style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: 'translate(-50%, -50%)' }}
    >
      {hasPossession && (
        <div className="absolute -top-9 bg-yellow-400 text-black text-[10px] px-2 py-0.5 font-extrabold rounded-sm border border-black uppercase whitespace-nowrap shadow-md">
          {pos.role}
        </div>
      )}
      <div className={`w-3.5 h-3.5 bg-white rounded-full ${hasPossession ? 'animate-bounce' : 'hidden'}`} />
    </div>
  );
}