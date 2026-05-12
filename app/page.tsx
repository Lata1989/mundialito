"use client";
import { useState, useMemo, useEffect } from "react";

// --- CONFIGURACIÓN DE BANDERAS ---
const BANDERAS: Record<string, string> = {
  "Japón": "🇯🇵", "Inglaterra": "🏴󠁧󠁢󠁥󠁮󠁧󠁿", "Colombia": "🇨🇴", "Francia": "🇫🇷", "Canadá": "🇨🇦", "Uruguay": "🇺🇾",
  "Brasil": "🇧🇷", "Marruecos": "🇲🇦", "Croacia": "🇭🇷", "España": "🇪🇸", "EEUU": "🇺🇸", "Ecuador": "🇪🇨",
  "Alemania": "🇩🇪", "Bélgica": "🇧🇪", "Paraguay": "🇵🇾", "Arabia": "🇸🇦", "Países Bajos": "🇳🇱", "México": "🇲🇽",
  "Suiza": "🇨🇭", "Austria": "🇦🇹", "Egipto": "🇪🇬", "Escocia": "🏴󠁧󠁢󠁳󠁣󠁴󠁿", "Portugal": "🇵🇹", "Noruega": "🇳🇴"
};

// --- CONFIGURACIÓN DE SONIDOS ---
const SOUNDS = {
  SHORT_PASS: ["/PASE CORTO.m4a", "/PASE CORTO CENTURION (1).m4a", "/PASE CORTO MARADONA.m4a", "/TAN TAN PASE .m4a"],
  LONG_PASS: ["/PASE LARGO.m4a", "/PASE LARGO INVENTE.m4a", "/PASE LARGO MARADONA .m4a", "/PASE LARGO POCHO.m4a", "/PASE LARGO POMELO.m4a", "/pase largo vignolo.m4a", "/BRRR PASE LARGO.m4a"],
  GOAL: ["/gol 1.m4a", "/gol 2.m4a", "/gol 3.m4a", "/gola.m4a", "/gol almiron.m4a", "/GOL BENZEMAAAA.m4a", "/gol canrtalo cantalo.m4a", "/GOL DI MARIA.m4a", "/GOL PALERMO .m4a", "/marteee gol araujo.m4a", "/relato gol araujo.m4a", "/grito1.mp3"],
  INCORRECT: ["/incorrecta respuesta.m4a", "/pase incorrecto 1.m4a", "/pase incorrecto 2.m4a", "/pase incorrecto 3.m4a", "/pase incorrecto 4.m4a", "/pase incorrecto 5.m4a", "/pase incorrecto 6.m4a", "/pase incorrecto 7.m4a", "/pase incorrecto 8.m4a", "/pase incorrecto 9.m4a", "/pase incorrecto 10.m4a", "/pase incorrecto 11.m4a", "/pase incorrecto 12.m4a", "/pase incorrecto 13.m4a", "/pase incorrecto 14.m4a", "/pase incorrecto 15.m4a", "/pase incorrecto 16.m4a", "/pase incorrecto 17.m4a"]
};

type Role = "DEF" | "LAT" | "5" | "VOL" | "EXT" | "9";
interface Player { id: number; role: Role; top: number; left: number; }

const formation: Player[] = [
  { id: 1, role: "DEF", top: 83, left: 65 }, { id: 2, role: "DEF", top: 80, left: 35 },
  { id: 3, role: "LAT", top: 77, left: 10 }, { id: 4, role: "LAT", top: 68, left: 92 },
  { id: 5, role: "5", top: 63, left: 55 }, { id: 6, role: "VOL", top: 45, left: 30 },
  { id: 7, role: "VOL", top: 43, left: 75 }, { id: 8, role: "EXT", top: 35, left: 15 },
  { id: 9, role: "EXT", top: 23, left: 85 }, { id: 10, role: "9", top: 21, left: 52 },
];

const QUESTIONS_DB = [
  { country: "España", question: "ESP-1 | ¿Quién pintó 'Las Meninas'?", answer: "diego velazquez", options: ["Francisco de Goya", "Diego Velazquez", "El Greco", "Pablo Picasso"] },
  { country: "Japón", question: "JAP-1 | ¿Qué famoso escritor japonés escribió 'Norwegian Wood'?", answer: "haruki murakami", options: ["Yukio Mishima", "Haruki Murakami", "Kenzaburō Ōe", "Ryu Murakami"] },
  { country: "Argentina", question: "ARG-1 | ¿Quién es conocido como 'La Pulga' en el fútbol?", answer: "lionel messi", options: ["Diego Maradona", "Lionel Messi", "Sergio Agüero", "Carlos Tévez"] },
  { country: "Brasil", question: "BRA-3 | ¿Qué jugador brasileño es 'El Rey'?", answer: "pelé", options: ["Romário", "Ronaldo Nazário", "Pelé", "Zico"] },
  { country: "Alemania", question: "ALE-3 | La palabra hamburguesa viene de la ciudad de Hamburgo.", answer: "verdadero", options: ["Falso", "Verdadero"] }
];

export default function SoccerQuiz() {
  const [teams, setTeams] = useState<{ blue: string, red: string } | null>(null);
  const [possession, setPossession] = useState<{ team: 'blue' | 'red', role: Role }>({ team: 'blue', role: '5' });
  const [score, setScore] = useState({ blue: 0, red: 0 });
  const [feedback, setFeedback] = useState("");
  const [currentQ, setCurrentQ] = useState(QUESTIONS_DB[0]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  useEffect(() => {
    if (!teams?.red || feedback !== "" || timeLeft === 0) {
        if(timeLeft === 0 && feedback === "") handleManualError();
        return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, teams, feedback]);

  const activePlayerId = useMemo(() => {
    const playersInRole = formation.filter(p => p.role === possession.role);
    return playersInRole.length > 0 ? playersInRole[Math.floor(Math.random() * playersInRole.length)].id : null;
  }, [possession.role, possession.team]);

  const playSfx = (audioArray: string[]) => {
    const randomAudio = audioArray[Math.floor(Math.random() * audioArray.length)];
    const audio = new Audio(randomAudio);
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
    const pool = QUESTIONS_DB.filter(q => [team1, team2, "Argentina", "Brasil", "Japón", "España", "Alemania"].includes(q.country));
    setCurrentQ(pool.length > 0 ? pool[Math.floor(Math.random() * pool.length)] : QUESTIONS_DB[0]);
    setTimeLeft(30);
    setIsShowingOptions(false);
  };

  const handleManualAction = (mode: "corto" | "largo") => {
    const currentTeam = possession.team;
    let nextRole: Role = possession.role;

    if (possession.role === "DEF") nextRole = mode === "corto" ? "LAT" : "5";
    else if (possession.role === "LAT") nextRole = mode === "corto" ? "5" : "VOL";
    else if (possession.role === "5") nextRole = mode === "corto" ? "VOL" : "EXT";
    else if (possession.role === "VOL") nextRole = mode === "corto" ? "EXT" : "9";
    else if (possession.role === "EXT") {
      if (mode === "largo") { handleGoal(); return; }
      nextRole = "9";
    } else if (possession.role === "9") { handleGoal(); return; }

    playSfx(mode === "corto" ? SOUNDS.SHORT_PASS : SOUNDS.LONG_PASS);

    setPossession({ team: currentTeam, role: nextRole });
    setFeedback(mode === "corto" ? "¡Pase corto completado! ✅" : "¡Pase largo exitoso! 🚀");
    setTimeout(() => { setFeedback(""); pickQuestion(teams!.blue, teams!.red); }, 1500);
  };

  const handleManualError = () => {
    playSfx(SOUNDS.INCORRECT);
    const otherTeam = possession.team === 'blue' ? 'red' : 'blue';
    let recoveryRole: Role = "5";
    if (possession.role === "DEF") recoveryRole = "9";
    else if (possession.role === "LAT") recoveryRole = "EXT";
    else if (possession.role === "5") recoveryRole = "VOL";
    else if (possession.role === "VOL") recoveryRole = "5";
    else if (possession.role === "EXT") recoveryRole = "LAT";
    else if (possession.role === "9") recoveryRole = "DEF";

    setPossession({ team: otherTeam, role: recoveryRole });
    setFeedback("¡Pérdida de balón! ❌");
    setTimeout(() => { setFeedback(""); pickQuestion(teams!.blue, teams!.red); }, 1500);
  };

  const handleGoal = () => {
    playSfx(SOUNDS.GOAL);
    setFeedback("¡GOOOOOOOL! ⚽🔥🔥🔥");
    setScore(prev => ({ ...prev, [possession.team]: prev[possession.team] + 1 }));
    setTimeout(() => {
      setPossession({ team: possession.team === 'blue' ? 'red' : 'blue', role: '5' });
      setFeedback("");
      pickQuestion(teams!.blue, teams!.red);
    }, 3500);
  };

  // --- VISTA DE SELECCIÓN DE EQUIPO (BANDERAS MÁS GRANDES) ---
  if (!teams || !teams.red) {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-zinc-950 text-white p-6 md:p-12 text-center overflow-y-auto">
          <div className="max-w-6xl w-full">
            <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tighter italic">
              SELECCIONAR EQUIPO <br/>
              <span className={!teams ? "text-blue-500" : "text-red-500"}>
                {!teams ? "AZUL" : "ROJO"}
              </span>
            </h1>
            <p className="text-zinc-500 mb-12 font-bold uppercase tracking-widest text-sm">
              {teams ? `Equipo Azul: ${teams.blue} seleccionado` : "Elige el primer equipo para comenzar"}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {Object.entries(BANDERAS).map(([name, flag]) => (
                <button 
                  key={name} 
                  onClick={() => selectTeam(name)} 
                  className="group relative flex flex-col items-center justify-center p-8 bg-zinc-900/50 rounded-2xl hover:bg-zinc-800 transition-all border-2 border-zinc-800 hover:border-zinc-500 active:scale-95 overflow-hidden"
                >
                  {/* Fondo sutil de brillo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Emoji de bandera gigante */}
                  <span className="text-7xl md:text-8xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                    {flag}
                  </span>
                  
                  <p className="text-xs font-black uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                    {name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
    );
  }

  // --- VISTA DE JUEGO (RESTO DEL CÓDIGO) ---
  const isShootingRole = possession.role === "EXT" || possession.role === "9";

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans overflow-hidden">
      <div className="flex-[1.2] p-4 md:p-8 flex flex-col relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-800">
            <div className={`h-full transition-all duration-1000 ${timeLeft < 10 ? 'bg-red-500' : 'bg-blue-500'}`} style={{ width: `${(timeLeft / 30) * 100}%` }} />
        </div>

        <div className="flex items-center justify-between bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm mb-8 mt-2 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{BANDERAS[teams.blue]}</span>
            <span className="text-2xl font-black text-blue-600">{score.blue}</span>
          </div>
          <div className={`px-4 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-xl font-mono font-bold ${timeLeft < 10 ? 'text-red-500 animate-pulse' : 'text-zinc-600 dark:text-zinc-300'}`}>
            0:{timeLeft.toString().padStart(2, '0')}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-red-600">{score.red}</span>
            <span className="text-3xl">{BANDERAS[teams.red]}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
          <div className="mb-6">
            <p className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded mb-4 ${possession.team === 'blue' ? 'bg-blue-600 text-white' : 'bg-red-600 text-white'}`}>
              POSESIÓN: {possession.team === 'blue' ? teams.blue : teams.red} ({possession.role})
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none dark:text-white">
                {currentQ.question}
            </h2>
          </div>

          <div className="space-y-4">
            {!isShowingOptions ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => handleManualAction("largo")}
                  className={`p-10 text-2xl font-black uppercase italic transition-all active:scale-95 shadow-xl ${isShootingRole ? 'bg-green-600 text-white' : 'bg-zinc-900 dark:bg-white text-white dark:text-black'}`}
                >
                  {isShootingRole ? "¡REMATAR! ⚽" : "Pase Largo 🚀"}
                </button>
                <button
                  onClick={() => setIsShowingOptions(true)}
                  className="p-10 text-2xl font-black uppercase italic border-4 border-zinc-900 dark:border-white dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
                >
                  Pase Corto 🙋‍♂️
                </button>
              </div>
            ) : (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                <div className="grid grid-cols-2 gap-2">
                    {currentQ.options.map((opt, i) => (
                        <div key={i} className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-sm font-bold uppercase dark:text-zinc-300">
                            {opt}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                        onClick={() => handleManualAction("corto")}
                        className="p-8 bg-green-500 text-white text-2xl font-black uppercase italic shadow-lg active:scale-95"
                    >
                        Pase Correcto ✅
                    </button>
                    <button
                        onClick={handleManualError}
                        className="p-8 bg-red-600 text-white text-2xl font-black uppercase italic shadow-lg active:scale-95"
                    >
                        Error/Quite ❌
                    </button>
                </div>
              </div>
            )}
            
            <button
                onClick={handleManualError}
                className={`w-full p-4 mt-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 font-black uppercase text-sm rounded hover:bg-red-100 hover:text-red-600 transition-all ${isShowingOptions ? 'hidden' : ''}`}
            >
                Quitar balón inmediatamente 🏳️
            </button>
          </div>

          {feedback && (
            <div className="mt-8 p-4 bg-yellow-400 text-black font-black uppercase italic text-center animate-bounce rounded shadow-xl border-2 border-black">
                {feedback}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 bg-zinc-900 relative border-l-4 border-zinc-800 hidden lg:flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url('/bombonera.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="relative w-full max-w-[400px] aspect-[3/4] border-4 border-white/20 rounded">
            <div className="absolute top-1/2 w-full h-0.5 bg-white/20 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
            
            {formation.map(p => (
                <PlayerMarker key={`blue-${p.id}`} pos={p} color="bg-blue-600" hasPossession={possession.team === 'blue' && p.id === activePlayerId} />
            ))}
            {formation.map(p => (
                <PlayerMarker key={`red-${p.id}`} pos={{ ...p, top: 100 - p.top }} color="bg-red-600" hasPossession={possession.team === 'red' && p.id === activePlayerId} />
            ))}
        </div>
      </div>
    </div>
  );
}

function PlayerMarker({ pos, color, hasPossession }: { pos: Player, color: string, hasPossession: boolean }) {
  return (
    <div
      className={`absolute w-8 h-8 ${color} rounded-full border-2 border-white transition-all duration-700 flex items-center justify-center
      ${hasPossession ? "scale-[2.2] z-30 ring-4 ring-yellow-400 shadow-[0_0_30px_rgba(253,224,71,0.6)]" : "opacity-80"}`}
      style={{ top: `${pos.top}%`, left: `${pos.left}%`, transform: 'translate(-50%, -50%)' }}
    >
      {hasPossession && <div className="w-2 h-2 bg-white rounded-full animate-ping" />}
    </div>
  );
}