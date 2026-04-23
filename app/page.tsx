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

// --- LISTAS DE AUDIOS (Según tu carpeta public) ---
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

// FORMACIÓN MEZCLADA (Simulando partido en movimiento)
const formation: Player[] = [
  { id: 1, role: "DEF", top: 82, left: 45 }, 
  { id: 2, role: "DEF", top: 75, left: 25 },
  { id: 3, role: "LAT", top: 65, left: 10 }, 
  { id: 4, role: "LAT", top: 60, left: 92 },
  { id: 5, role: "5", top: 50, left: 48 },
  { id: 6, role: "VOL", top: 45, left: 30 }, 
  { id: 7, role: "VOL", top: 40, left: 75 },
  { id: 8, role: "EXT", top: 25, left: 15 }, 
  { id: 9, role: "EXT", top: 20, left: 85 },
  { id: 10, role: "9", top: 15, left: 52 },
];

const QUESTIONS_DB = [
  // --- ESPAÑA 🇪🇸 ---
  { country: "España", question: "¿Qué equipo de fútbol es conocido como 'Los Colchoneros'?", answer: "atlético de madrid", options: ["Real Madrid", "FC Barcelona", "Atlético de Madrid", "Sevilla FC"] },
  { country: "España", question: "¿Cuál es el postre español famoso que es como crema frita?", answer: "leche frita", options: ["Churros", "Flan", "Leche Frita", "Turrón"] },
  { country: "España", question: "¿En qué año ganó España su primer Mundial?", answer: "2010", options: ["2006", "2010", "2014", "1998"] },
  { country: "España", question: "¿Cuál es la capital de España?", answer: "madrid", options: ["Barcelona", "Sevilla", "Valencia", "Madrid"] },
  { country: "España", question: "¿Cómo se llama el estadio del Real Madrid?", answer: "santiago bernabéu", options: ["Camp Nou", "Santiago Bernabéu", "Metropolitano", "Mestalla"] },
  // --- JAPÓN 🇯🇵 ---
  { country: "Japón", question: "¿Cuál es la capital de Japón?", answer: "tokio", options: ["Kioto", "Osaka", "Hiroshima", "Tokio"] },
  { country: "Japón", question: "¿Qué plato consiste en pescado crudo sobre arroz con vinagre?", answer: "sushi", options: ["Ramen", "Tempura", "Sushi", "Sashimi"] },
  { country: "Japón", question: "¿Cuál es la montaña más alta de Japón?", answer: "monte fuji", options: ["Monte Fuji", "Monte Aso", "Monte Kita", "Monte Ontake"] },
  { country: "Japón", question: "¿Cuál es la moneda de Japón?", answer: "yen", options: ["Dólar", "Euro", "Yen", "Yuan"] },
  { country: "Japón", question: "¿Cómo se llaman los guerreros sombra de Japón?", answer: "ninja", options: ["Samurái", "Ninja", "Ronin", "Shogun"] },
  // --- ARGENTINA / FÚTBOL ---
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
    const sound = sounds[Math.floor(Math.random() * sounds.length)];
    const audio = new Audio(sound);
    audio.play().catch(e => console.log("Audio play blocked", e));
  };

  const selectTeam = (name: string) => {
    if (!teams) setTeams({ blue: name, red: "" });
    else if (!teams.red) {
      setTeams({ ...teams, red: name });
      pickQuestion(name, teams.blue);
    }
  };

  const pickQuestion = (team1: string, team2: string) => {
    const pool = QUESTIONS_DB.filter(q => 
      [team1, team2, "Argentina", "Fútbol General"].includes(q.country)
    );
    setCurrentQ(pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : QUESTIONS_DB[0]);
  };

  const handleGoal = () => {
    playRandomSound(GOAL_SOUNDS);
    setFeedback("¡GOOOOOOOL! ⚽🔥🔥🔥");
    setScore(prev => ({ ...prev, [possession.team]: prev[possession.team] + 1 }));
    setUserInput("");
    
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

      // Lógica de ataque completa
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
      const audioErr = new Audio(INCORRECT_SOUND);
      audioErr.play().catch(() => {});
      
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
    setUserInput("");
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
    <div className="flex flex-col lg:flex-row min-h-screen bg-zinc-100 dark:bg-zinc-950">
      <div className="flex-[1.3] p-6 md:p-10 flex flex-col items-center justify-center border-r border-zinc-200 dark:border-zinc-800">
        <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 p-12 md:p-14 rounded-[3rem] shadow-2xl border border-zinc-100 dark:border-zinc-800 flex flex-col gap-10">
          
          <div className="flex justify-between items-center bg-zinc-50 dark:bg-zinc-800 p-8 rounded-[2rem] shadow-inner border border-zinc-200 dark:border-zinc-700">
            <div className="text-center flex-1">
              <p className="text-7xl mb-1">{BANDERAS[teams.blue]}</p>
              <p className="text-6xl font-black text-blue-600">{score.blue}</p>
            </div>
            <div className="text-3xl font-black text-zinc-300 px-6">VS</div>
            <div className="text-center flex-1">
              <p className="text-7xl mb-1">{BANDERAS[teams.red]}</p>
              <p className="text-6xl font-black text-red-600">{score.red}</p>
            </div>
          </div>

          <div className="text-center flex flex-col items-center gap-5">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest ${possession.team === 'blue' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'}`}>
              <span className={`h-2.5 w-2.5 rounded-full ${possession.team === 'blue' ? 'bg-blue-600' : 'bg-red-600'} animate-pulse`}></span>
              Turno: {possession.team === 'blue' ? teams.blue : teams.red} ({possession.role})
            </div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-zinc-900 dark:text-white uppercase tracking-tighter">
              {currentQ.question}
            </h2>
          </div>

          <div className="space-y-4">
            {isMultipleChoice ? (
              <div className="grid grid-cols-2 gap-4">
                {currentQ.options.map(opt => (
                  <button key={opt} onClick={() => processAnswer(opt)} className="h-24 text-2xl border-2 rounded-2xl font-bold hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white active:scale-95 shadow-lg flex items-center justify-center p-4 transition-all">
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <input 
                  type="text" value={userInput} onChange={e => setUserInput(e.target.value)}
                  placeholder="Respuesta exacta..."
                  className="h-24 text-3xl border-4 rounded-3xl px-8 dark:bg-zinc-800 dark:border-zinc-700 dark:text-white focus:border-green-500 font-bold text-center outline-none shadow-inner"
                  onKeyDown={(e) => e.key === 'Enter' && processAnswer(userInput)}
                />
                <button onClick={() => processAnswer(userInput)} className="h-24 bg-zinc-950 dark:bg-white text-white dark:text-black rounded-3xl text-3xl font-extrabold uppercase hover:scale-[1.03] transition-all shadow-xl">
                  {isShootingRole ? "¡TIRAR A PUERTA! ⚽🚀" : "Ejecutar Pase Largo"}
                </button>
              </div>
            )}
            <button onClick={() => setIsMultipleChoice(!isMultipleChoice)} className="w-full text-sm font-bold text-zinc-400 uppercase tracking-wider hover:text-zinc-700 py-3">
              Cambiar a {isMultipleChoice ? "Pase Largo" : "Pase Corto (Opciones)"}
            </button>
          </div>
          
          {feedback && (
            <div className="p-5 bg-zinc-950 dark:bg-zinc-100 rounded-2xl text-center animate-bounce shadow-2xl">
              <p className="text-2xl font-black text-green-400 dark:text-green-700 uppercase tracking-tighter">{feedback}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 bg-green-900 p-6 md:p-10 flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-[550px] aspect-[3/4] bg-green-600 border-[6px] border-white/80 rounded-sm shadow-2xl
          bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.08)_50%)] bg-[length:100%_9.0909%]">
          
          <div className="absolute top-1/2 w-full h-[4px] bg-white/70 -translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border-4 border-white/70 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 border-b-4 border-l-4 border-r-4 border-white/70" /> 
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-36 border-t-4 border-l-4 border-r-4 border-white/70" /> 

          {formation.map(p => (
            <PlayerMarker key={`blue-${p.id}`} pos={p} color="bg-blue-600" hasPossession={possession.team === 'blue' && p.id === activePlayerId} />
          ))}
          {formation.map(p => (
            <PlayerMarker key={`red-${p.id}`} pos={{...p, top: 100 - p.top}} color="bg-red-600" hasPossession={possession.team === 'red' && p.id === activePlayerId} />
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