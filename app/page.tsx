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
  // Preguntas de España
  { country: "España", question: "¿Quién pintó 'Las Meninas'?", answer: "diego velazquez", options: ["Francisco de Goya", "Diego Velazquez", "El Greco", "Pablo Picasso"] },
  { country: "España", question: "¿Qué escritor español ganó el Premio Nobel de Literatura en 1956?", answer: "juan ramón jiménez", options: ["Federico García Lorca", "Camilo José Cela", "Juan Ramón Jiménez", "Miguel de Cervantes"] },
  { country: "España", question: "¿En qué ciudad se celebra la famosa fiesta de los Sanfermines?", answer: "pamplona", options: ["Madrid", "Barcelona", "Sevilla", "Pamplona"] },
  { country: "España", question: "¿Quién es el futbolista español que ganó el Mundial de 2010 y la Eurocopa de 2008 y 2012?", answer: "xavi hernández", options: ["Andrés Iniesta", "David Villa", "Xavi Hernández", "Sergio Ramos"] },
  { country: "España", question: "¿Quién pintó 'El Jardín de las Delicias'?", answer: "hieronymus bosch", options: ["El Greco", "Hieronymus Bosch", "Salvador Dalí", "Francisco de Goya"] },
  { country: "España", question: "¿Quién fue el primer rey de la democracia española tras la dictadura de Franco?", answer: "juan carlos i", options: ["Felipe VI", "Juan Carlos I", "Carlos I", "Alfonso XIII"] },
  { country: "España", question: "¿En qué ciudad se celebra la famosa Feria de Abril?", answer: "sevilla", options: ["Madrid", "Sevilla", "Valencia", "Zaragoza"] },
  
  // Preguntas de Japón
  { country: "Japón", question: "¿Qué famoso escritor japonés escribió 'Norwegian Wood'?", answer: "haruki murakami", options: ["Yukio Mishima", "Haruki Murakami", "Kenzaburō Ōe", "Ryu Murakami"] },
  { country: "Japón", question: "¿Cómo se llama el tradicional teatro japonés de marionetas?", answer: "bunraku", options: ["Kabuki", "Bunraku", "Noh", "Kyogen"] },
  { country: "Japón", question: "¿En qué año se lanzó la consola PlayStation 1?", answer: "1994", options: ["1989", "1994", "1998", "2000"] },
  { country: "Japón", question: "¿Qué deporte es el más popular en Japón?", answer: "béisbol", options: ["Fútbol", "Sumo", "Béisbol", "Baloncesto"] },
  { country: "Japón", question: "¿Cuál es la famosa ceremonia japonesa del té?", answer: "chanoyu", options: ["Sado", "Chanoyu", "Ikebana", "Kintsugi"] },
  { country: "Japón", question: "¿Cuál es la famosa montaña en Japón que es un ícono nacional?", answer: "monte fuji", options: ["Monte Fuji", "Monte Aso", "Monte Kita", "Monte Ontake"] },
  { country: "Japón", question: "¿Qué famoso festival de flores de cerezo se celebra en Japón?", answer: "hanami", options: ["Tanabata", "Hanami", "Obon", "Setsubun"] },

  // Preguntas de Argentina
  { country: "Argentina", question: "¿Quién es conocido como 'La Pulga' en el fútbol?", answer: "lionel messi", options: ["Diego Maradona", "Lionel Messi", "Sergio Agüero", "Carlos Tévez"] },
  { country: "Argentina", question: "¿Qué famoso tango argentino fue compuesto por Carlos Gardel?", answer: "el día que me quieras", options: ["Mi Buenos Aires Querido", "Adiós Muchachos", "El Día Que Me Quieras", "La Cumparsita"] },
  { country: "Argentina", question: "¿En qué ciudad se encuentra el famoso Obelisco?", answer: "buenos aires", options: ["Mendoza", "Córdoba", "Buenos Aires", "Rosario"] },
  { country: "Argentina", question: "¿En qué año Argentina ganó su primer Mundial de Fútbol?", answer: "1978", options: ["1974", "1978", "1986", "1990"] },
  { country: "Argentina", question: "¿Quién fue el primer presidente de Argentina?", answer: "bernardino rivadavia", options: ["Juan Domingo Perón", "Bernardino Rivadavia", "Hipólito Yrigoyen", "Raúl Alfonsín"] },
  { country: "Argentina", question: "¿Qué jugador argentino es conocido como 'El Diego'?", answer: "diego maradona", options: ["Lionel Messi", "Diego Maradona", "Carlos Tévez", "Sergio Agüero"] },
  { country: "Argentina", question: "¿Qué famoso escritor argentino ganó el Premio Nobel de Literatura en 1970?", answer: "mario vargas llosa", options: ["Jorge Luis Borges", "Mario Vargas Llosa", "Carlos Fuentes", "Gabriel García Márquez"] },
  
  // Preguntas de Brasil
  { country: "Brasil", question: "¿Qué ciudad es la capital de Brasil?", answer: "brasília", options: ["Río de Janeiro", "São Paulo", "Brasília", "Salvador"] },
  { country: "Brasil", question: "¿Cuál es el carnaval más famoso de Brasil?", answer: "carnaval de río", options: ["Carnaval de Salvador", "Carnaval de Olinda", "Carnaval de Río", "Carnaval de Recife"] },
  { country: "Brasil", question: "¿Qué jugador brasileño es considerado uno de los mejores de la historia y conocido como 'El Rey'?", answer: "pelé", options: ["Romário", "Ronaldo Nazário", "Pelé", "Zico"] },
  { country: "Brasil", question: "¿Qué tipo de música popular nació en Brasil y es conocida por su ritmo rápido y contagioso?", answer: "samba", options: ["Salsa", "Samba", "Bossa Nova", "Forró"] },
  { country: "Brasil", question: "¿En qué ciudad brasileña se celebró el Mundial de Fútbol de 2014?", answer: "rio de janeiro", options: ["São Paulo", "Río de Janeiro", "Salvador", "Brasília"] },
  { country: "Brasil", question: "¿En qué año Brasil ganó su primer Mundial de Fútbol?", answer: "1958", options: ["1954", "1962", "1958", "1970"] },
  { country: "Brasil", question: "¿Qué famoso escritor brasileño escribió 'Cien años de soledad'?", answer: "gabriel garcia marquez", options: ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Carlos Fuentes"] },

  // Preguntas de Francia
  { country: "Francia", question: "¿Quién fue el emperador francés que conquistó gran parte de Europa?", answer: "napoleón bonaparte", options: ["Luis XIV", "Napoleón Bonaparte", "Carlos I", "Luis XVI"] },
  { country: "Francia", question: "¿En qué año ganó Francia su primer Mundial de Fútbol?", answer: "1998", options: ["1994", "1998", "2006", "2018"] },
  { country: "Francia", question: "¿Qué pintor francés es famoso por su estilo impresionista?", answer: "claude monet", options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Edgar Degas"] },
  { country: "Francia", question: "¿Qué famosa torre está situada en París?", answer: "torre eiffel", options: ["Torre CN", "Torre Pisa", "Torre Eiffel", "Torre de Londres"] },
  
  // Preguntas de Inglaterra
  { country: "Inglaterra", question: "¿Quién escribió las obras de teatro 'Hamlet' y 'Romeo y Julieta'?", answer: "william shakespeare", options: ["Christopher Marlowe", "William Shakespeare", "Charles Dickens", "Jane Austen"] },
  { country: "Inglaterra", question: "¿Qué ciudad es conocida como la capital de la moda en Inglaterra?", answer: "londres", options: ["Manchester", "Liverpool", "Birmingham", "Londres"] },
  { country: "Inglaterra", question: "¿Qué jugador inglés es famoso por su paso por el Manchester United y la selección inglesa?", answer: "david beckham", options: ["Wayne Rooney", "David Beckham", "Steven Gerrard", "John Terry"] },
  { country: "Inglaterra", question: "¿Qué famoso torneo de tenis se celebra anualmente en Inglaterra?", answer: "wimbledon", options: ["Roland Garros", "US Open", "Australian Open", "Wimbledon"] },

  // Preguntas de Colombia
  { country: "Colombia", question: "¿Quién es el famoso cantante de salsa conocido como 'El Caballero de la Salsa'?", answer: "hector lavoe", options: ["Marc Anthony", "Willie Colón", "Héctor Lavoe", "Gilberto Santa Rosa"] },
  { country: "Colombia", question: "¿Cuál es la ciudad colombiana famosa por su Carnaval y el Museo del Oro?", answer: "bogotá", options: ["Cali", "Barranquilla", "Medellín", "Bogotá"] },
  { country: "Colombia", question: "¿En qué año Colombia fue sede del Mundial de Fútbol?", answer: "1986", options: ["1986", "1994", "2014", "2018"] },
  { country: "Colombia", question: "¿Qué famoso escritor colombiano ganó el Premio Nobel de Literatura en 1982?", answer: "gabriel garcia marquez", options: ["Mario Vargas Llosa", "Carlos Fuentes", "Gabriel García Márquez", "Jorge Luis Borges"] },

  // Preguntas de Estados Unidos
  { country: "EEUU", question: "¿Qué famoso parque nacional de EEUU es conocido por sus géiseres y vida salvaje?", answer: "yellowstone", options: ["Yosemite", "Yellowstone", "Grand Canyon", "Zion"] },
  { country: "EEUU", question: "¿Qué ciudad de EEUU es conocida por su Estatua de la Libertad?", answer: "nueva york", options: ["Los Ángeles", "Chicago", "Nueva York", "Miami"] },
  { country: "EEUU", question: "¿Quién fue el presidente de los EEUU durante la Guerra Civil?", answer: "abraham lincoln", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Andrew Jackson"] },
  { country: "EEUU", question: "¿En qué año ganó EEUU su primer Mundial de Fútbol?", answer: "1930", options: ["1920", "1930", "1950", "1994"] }
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