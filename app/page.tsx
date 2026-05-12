"use client";
import { useState, useMemo, useEffect } from "react";

// --- CONFIGURACIÓN DE BANDERAS ---
const BANDERAS: Record<string, string> = {
  Japón: "🇯🇵",
  Inglaterra: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  Colombia: "🇨🇴",
  Francia: "🇫🇷",
  Canadá: "🇨🇦",
  Uruguay: "🇺🇾",
  Brasil: "🇧🇷",
  Marruecos: "🇲🇦",
  Croacia: "🇭🇷",
  España: "🇪🇸",
  EEUU: "🇺🇸",
  Ecuador: "🇪🇨",
  Alemania: "🇩🇪",
  Bélgica: "🇧🇪",
  Paraguay: "🇵🇾",
  Arabia: "🇸🇦",
  "Países Bajos": "🇳🇱",
  México: "🇲🇽",
  Suiza: "🇨🇭",
  Austria: "🇦🇹",
  Egipto: "🇪🇬",
  Escocia: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  Portugal: "🇵🇹",
  Noruega: "🇳🇴",
  Argentina: "🇦🇷",
};

// --- CONFIGURACIÓN DE SONIDOS ---
const SOUNDS = {
  SHORT_PASS: [
    "/PASE CORTO.m4a",
    "/PASE CORTO CENTURION (1).m4a",
    "/PASE CORTO MARADONA.m4a",
    "/TAN TAN PASE .m4a",
  ],
  LONG_PASS: [
    "/PASE LARGO.m4a",
    "/PASE LARGO INVENTE.m4a",
    "/PASE LARGO MARADONA .m4a",
    "/PASE LARGO POCHO.m4a",
    "/PASE LARGO POMELO.m4a",
    "/pase largo vignolo.m4a",
    "/BRRR PASE LARGO.m4a",
  ],
  GOAL: [
    "/gol 1.m4a",
    "/gol 2.m4a",
    "/gol 3.m4a",
    "/gola.m4a",
    "/gol almiron.m4a",
    "/GOL BENZEMAAAA.m4a",
    "/gol canrtalo cantalo.m4a",
    "/GOL DI MARIA.m4a",
    "/GOL PALERMO .m4a",
    "/marteee gol araujo.m4a",
    "/relato gol araujo.m4a",
    "/grito1.mp3",
  ],
  INCORRECT: [
    "/incorrecta respuesta.m4a",
    "/pase incorrecto 1.m4a",
    "/pase incorrecto 2.m4a",
    "/pase incorrecto 3.m4a",
    "/pase incorrecto 4.m4a",
    "/pase incorrecto 5.m4a",
    "/pase incorrecto 6.m4a",
    "/pase incorrecto 7.m4a",
    "/pase incorrecto 8.m4a",
    "/pase incorrecto 9.m4a",
    "/pase incorrecto 10.m4a",
    "/pase incorrecto 11.m4a",
    "/pase incorrecto 12.m4a",
    "/pase incorrecto 13.m4a",
    "/pase incorrecto 14.m4a",
    "/pase incorrecto 15.m4a",
    "/pase incorrecto 16.m4a",
    "/pase incorrecto 17.m4a",
  ],
};

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
  // =========================
  // ESPAÑA
  // =========================

  {
    country: "España",
    question: "ESP-1 | ¿Quién pintó 'Las Meninas'?",
    answer: "diego velazquez",
    options: [
      "Francisco de Goya",
      "Diego Velazquez",
      "El Greco",
      "Pablo Picasso",
    ],
  },

  {
    country: "España",
    question:
      "ESP-2 | ¿Qué escritor español ganó el Premio Nobel de Literatura en 1956?",
    answer: "juan ramón jiménez",
    options: [
      "Federico García Lorca",
      "Camilo José Cela",
      "Juan Ramón Jiménez",
      "Miguel de Cervantes",
    ],
  },

  {
    country: "España",
    question:
      "ESP-3 | ¿En qué ciudad se celebra la famosa fiesta de los Sanfermines?",
    answer: "pamplona",
    options: ["Madrid", "Barcelona", "Sevilla", "Pamplona"],
  },

  {
    country: "España",
    question:
      "ESP-4 | ¿Quién es el futbolista español que ganó el Mundial de 2010 y la Eurocopa de 2008 y 2012?",
    answer: "xavi hernández",
    options: [
      "Andrés Iniesta",
      "David Villa",
      "Xavi Hernández",
      "Sergio Ramos",
    ],
  },

  {
    country: "España",
    question: "ESP-5 | ¿Quién pintó 'El Jardín de las Delicias'?",
    answer: "hieronymus bosch",
    options: [
      "El Greco",
      "Hieronymus Bosch",
      "Salvador Dalí",
      "Francisco de Goya",
    ],
  },

  {
    country: "España",
    question:
      "ESP-6 | ¿Quién fue el primer rey de la democracia española tras la dictadura de Franco?",
    answer: "juan carlos i",
    options: ["Felipe VI", "Juan Carlos I", "Carlos I", "Alfonso XIII"],
  },

  {
    country: "España",
    question: "ESP-7 | ¿En qué ciudad se celebra la famosa Feria de Abril?",
    answer: "sevilla",
    options: ["Madrid", "Sevilla", "Valencia", "Zaragoza"],
  },

  // =========================
  // JAPÓN
  // =========================

  {
    country: "Japón",
    question: "JAP-1 | ¿Qué famoso escritor japonés escribió 'Norwegian Wood'?",
    answer: "haruki murakami",
    options: [
      "Yukio Mishima",
      "Haruki Murakami",
      "Kenzaburō Ōe",
      "Ryu Murakami",
    ],
  },

  {
    country: "Japón",
    question:
      "JAP-2 | ¿Cómo se llama el tradicional teatro japonés de marionetas?",
    answer: "bunraku",
    options: ["Kabuki", "Bunraku", "Noh", "Kyogen"],
  },

  {
    country: "Japón",
    question: "JAP-3 | ¿En qué año se lanzó la consola PlayStation 1?",
    answer: "1994",
    options: ["1989", "1994", "1998", "2000"],
  },

  {
    country: "Japón",
    question: "JAP-4 | ¿Qué deporte es el más popular en Japón?",
    answer: "béisbol",
    options: ["Fútbol", "Sumo", "Béisbol", "Baloncesto"],
  },

  {
    country: "Japón",
    question: "JAP-5 | ¿Cuál es la famosa ceremonia japonesa del té?",
    answer: "chanoyu",
    options: ["Sado", "Chanoyu", "Ikebana", "Kintsugi"],
  },

  {
    country: "Japón",
    question:
      "JAP-6 | ¿Cuál es la famosa montaña en Japón que es un ícono nacional?",
    answer: "monte fuji",
    options: ["Monte Fuji", "Monte Aso", "Monte Kita", "Monte Ontake"],
  },

  {
    country: "Japón",
    question:
      "JAP-7 | ¿Qué famoso festival de flores de cerezo se celebra en Japón?",
    answer: "hanami",
    options: ["Tanabata", "Hanami", "Obon", "Setsubun"],
  },

  // =========================
  // ARGENTINA
  // =========================

  {
    country: "Argentina",
    question: "ARG-1 | ¿Quién es conocido como 'La Pulga' en el fútbol?",
    answer: "lionel messi",
    options: [
      "Diego Maradona",
      "Lionel Messi",
      "Sergio Agüero",
      "Carlos Tévez",
    ],
  },

  {
    country: "Argentina",
    question:
      "ARG-2 | ¿Qué famoso tango argentino fue compuesto por Carlos Gardel?",
    answer: "el día que me quieras",
    options: [
      "Mi Buenos Aires Querido",
      "Adiós Muchachos",
      "El Día Que Me Quieras",
      "La Cumparsita",
    ],
  },

  {
    country: "Argentina",
    question: "ARG-3 | ¿En qué ciudad se encuentra el famoso Obelisco?",
    answer: "buenos aires",
    options: ["Mendoza", "Córdoba", "Buenos Aires", "Rosario"],
  },

  {
    country: "Argentina",
    question: "ARG-4 | ¿En qué año Argentina ganó su primer Mundial de Fútbol?",
    answer: "1978",
    options: ["1974", "1978", "1986", "1990"],
  },

  {
    country: "Argentina",
    question: "ARG-5 | ¿Quién fue el primer presidente de Argentina?",
    answer: "bernardino rivadavia",
    options: [
      "Juan Domingo Perón",
      "Bernardino Rivadavia",
      "Hipólito Yrigoyen",
      "Raúl Alfonsín",
    ],
  },

  {
    country: "Argentina",
    question: "ARG-6 | ¿Qué jugador argentino es conocido como 'El Diego'?",
    answer: "diego maradona",
    options: [
      "Lionel Messi",
      "Diego Maradona",
      "Carlos Tévez",
      "Sergio Agüero",
    ],
  },

  {
    country: "Argentina",
    question:
      "ARG-7 | ¿Qué famoso escritor argentino ganó el Premio Nobel de Literatura en 1970?",
    answer: "mario vargas llosa",
    options: [
      "Jorge Luis Borges",
      "Mario Vargas Llosa",
      "Carlos Fuentes",
      "Gabriel García Márquez",
    ],
  },

  // =========================
  // BRASIL
  // =========================

  {
    country: "Brasil",
    question: "BRA-1 | ¿Qué ciudad es la capital de Brasil?",
    answer: "brasília",
    options: ["Río de Janeiro", "São Paulo", "Brasília", "Salvador"],
  },

  {
    country: "Brasil",
    question: "BRA-2 | ¿Cuál es el carnaval más famoso de Brasil?",
    answer: "carnaval de río",
    options: [
      "Carnaval de Salvador",
      "Carnaval de Olinda",
      "Carnaval de Río",
      "Carnaval de Recife",
    ],
  },

  {
    country: "Brasil",
    question:
      "BRA-3 | ¿Qué jugador brasileño es considerado uno de los mejores de la historia y conocido como 'El Rey'?",
    answer: "pelé",
    options: ["Romário", "Ronaldo Nazário", "Pelé", "Zico"],
  },

  {
    country: "Brasil",
    question:
      "BRA-4 | ¿Qué tipo de música popular nació en Brasil y es conocida por su ritmo rápido y contagioso?",
    answer: "samba",
    options: ["Salsa", "Samba", "Bossa Nova", "Forró"],
  },

  {
    country: "Brasil",
    question:
      "BRA-5 | ¿En qué ciudad brasileña se celebró el Mundial de Fútbol de 2014?",
    answer: "rio de janeiro",
    options: ["São Paulo", "Río de Janeiro", "Salvador", "Brasília"],
  },

  {
    country: "Brasil",
    question: "BRA-6 | ¿En qué año Brasil ganó su primer Mundial de Fútbol?",
    answer: "1958",
    options: ["1954", "1962", "1958", "1970"],
  },

  {
    country: "Brasil",
    question:
      "BRA-7 | ¿Qué famoso escritor brasileño escribió 'Cien años de soledad'?",
    answer: "gabriel garcia marquez",
    options: [
      "Mario Vargas Llosa",
      "Gabriel García Márquez",
      "Jorge Luis Borges",
      "Carlos Fuentes",
    ],
  },

  // =========================
  // ALEMANIA
  // =========================

  {
    country: "Alemania",
    question:
      "ALE-1 | Históricamente, Alemania se destaca por sus mejores performances en:",
    answer: "juegos olímpicos",
    options: [
      "Juegos Olímpicos",
      "Eurocopa",
      "Juegos de Invierno europeo",
      "Copa América",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-2 | La selección de fútbol ha conseguido:",
    answer: "4 copas mundiales",
    options: [
      "4 copas mundiales",
      "2 copas mundiales",
      "3 copas mundiales",
      "5 copas mundiales",
    ],
  },

  {
    country: "Alemania",
    question:
      "ALE-3 | A lo largo de su historia, los mejores futbolistas han sido:",
    answer: "beckenboer, rummenige y matheüs",
    options: [
      "Beckenboer, Rummenige y Matheüs",
      "Max Cruse y Joachim Löw",
      "Oliver Khan y Michael Ballack",
      "Müller y Neuer",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-4 | ¿Cuántas veces fue sede de Mundiales de Fútbol?",
    answer: "dos",
    options: ["Una", "Dos", "Tres", "Cuatro"],
  },

  {
    country: "Alemania",
    question:
      "ALE-5 | Los mejores tenistas de Alemania, a lo largo de su historia, son:",
    answer: "boris becker y steffi graff",
    options: [
      "Boris Becker y Steffi Graff",
      "Dieter Bauman y Kriesten Otto",
      "Alexander Zverev y Tommy Haas",
      "Michael Stich y Becker",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-6 | La fiesta típica de octubre en Münich se llama:",
    answer: "oktoberfest",
    options: [
      "Oktoberfest",
      "Carnaval de Düsseldorf",
      "Festival de Mossela",
      "Fiesta de Baviera",
    ],
  },

  {
    country: "Alemania",
    question:
      "ALE-7 | En 1990, mundial de fútbol en Italia, Alemania se enfrentó a Argentina. ¿Quién ganó?",
    answer: "alemania",
    options: ["Argentina", "Alemania", "Empataron", "Italia"],
  },

  {
    country: "Alemania",
    question: "ALE-8 | Población de Alemania:",
    answer: "82 millones de personas",
    options: [
      "82 millones de personas",
      "50 millones de personas",
      "60 millones de personas",
      "100 millones de personas",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-9 | ¿Quién realizó la Reforma Protestante?",
    answer: "lutero",
    options: ["Calvino", "Lutero", "Zuinglio", "Erasmo"],
  },

  {
    country: "Alemania",
    question: "ALE-10 | Forma de gobierno:",
    answer: "república federal alemana",
    options: [
      "República federal Alemana",
      "Monarquía parlamentaria",
      "República Representativa",
      "Imperio Federal",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-11 | Al ciudadano alemán también se le dice:",
    answer: "germano",
    options: ["Germano", "Eslavo", "Alamano", "Nórdico"],
  },

  {
    country: "Alemania",
    question: "ALE-12 | La palabra hamburguesa viene de la ciudad de Hamburgo.",
    answer: "verdadero",
    options: ["Falso", "Verdadero", "Parcialmente verdadero", "No se sabe"],
  },

  {
    country: "Alemania",
    question: "ALE-13 | Moneda oficial:",
    answer: "euro",
    options: ["Dólar", "Euro", "Marco alemán", "Libra"],
  },

  {
    country: "Alemania",
    question: "ALE-14 | Clima:",
    answer: "templado continental",
    options: [
      "Frío Oceánico",
      "Templado continental",
      "Templado húmedo",
      "Tropical",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-15 | Después de la 2º Guerra Mundial, Alemania fue:",
    answer: "separada en dos estados",
    options: [
      "Separada en dos Estados",
      "Unificada en un solo Estado",
      "Reunificada en una República",
      "Convertida en monarquía",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-16 | Capital:",
    answer: "berlín",
    options: ["Berlín", "Bonn", "Hamburgo", "Frankfurt"],
  },

  {
    country: "Alemania",
    question: "ALE-17 | Es reconocida como un país líder en:",
    answer: "sector científico y tecnológico",
    options: [
      "Sector científico y tecnológico",
      "Sector Turismo y Ecología",
      "Sector Gastronómico y Agrario",
      "Sector Petrolero",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-18 | Hitler, llamado “El Führer”, en la Alemania Nazi fue:",
    answer: "jefe de estado",
    options: ["Presidente", "Emperador", "Jefe de Estado", "Canciller Real"],
  },

  {
    country: "Alemania",
    question: "ALE-19 | Actual canciller:",
    answer: "angela merkel",
    options: ["Angela Merkel", "Mary Donalsson", "Paola Düssel", "Olaf Scholz"],
  },

  {
    country: "Alemania",
    question: "ALE-20 | Principales ciudades, después de su capital:",
    answer: "münich y düsselddorf",
    options: [
      "Münich y Düsselddorf",
      "Oslo y Helsinky",
      "Berna y Estocolmo",
      "París y Viena",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-21 | El Muro de Berlín se derrumbó en:",
    answer: "1989",
    options: ["1995", "1989", "1990", "1980"],
  },

  {
    country: "Alemania",
    question: "ALE-22 | Ríos más importantes:",
    answer: "rhin, elba y danubio",
    options: [
      "Rhin, Elba y Danubio",
      "Don, Trent y Cray",
      "Meselle, Exe y Tyne",
      "Volga, Sena y Támesis",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-23 | Es el país europeo que tiene el más grande mercado de:",
    answer: "periódicos",
    options: ["Periódicos", "Televisión", "Radios", "Cine"],
  },

  {
    country: "Alemania",
    question: "ALE-24 | Religión mayoritaria:",
    answer: "cristianos",
    options: ["Cristianos", "Católicos romanos", "Islámicos", "Budistas"],
  },

  {
    country: "Alemania",
    question: "ALE-25 | La escuela primaria alemana dura:",
    answer: "4 años",
    options: ["6 años", "5 años", "4 años", "7 años"],
  },

  {
    country: "Alemania",
    question: "ALE-26 | Alemania es conocida como:",
    answer: "la tierra de las ideas",
    options: [
      "El país donde no sale el sol",
      "La tierra de las ideas",
      "El país de los inventores",
      "La nación del acero",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-27 | ¿Qué escribieron los Hermanos Grimm?",
    answer: "caperucita roja y la bella durmiente",
    options: [
      "Caperucita Roja y La Bella Durmiente",
      "Romeo y Julieta, Muerte en Venecia",
      "El soldado y El Pato",
      "La Odisea y La Ilíada",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-28 | Figuras Históricas alemanas:",
    answer: "eistein, gütemberg y zeppelin",
    options: [
      "Eistein, Gütemberg y Zeppelin",
      "Enrique VIII, Calvino y Louis I",
      "Henry Ford, Atila y Marco Polo",
      "Napoleón, César y Platón",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-29 | Compositores y músicos más famosos:",
    answer: "beethoven, bach y wagner",
    options: [
      "Beethoven, Bach y Wagner",
      "Vivaldi y Puccini",
      "Aznavour, Bizet y Ravel",
      "Mozart y Chopin",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-30 | El festival de Cine más famoso de Alemania se llama:",
    answer: "festival de berlín",
    options: [
      "Festival de Edimburgo",
      "Festival de Bonn",
      "Festival de Berlín",
      "Festival de Cannes",
    ],
  },

  {
    country: "Alemania",
    question: "ALE-31 | En general, la carne se consume en forma de:",
    answer: "salchicha",
    options: ["Hamburguesa", "Salchicha", "Albóndiga", "Milanesa"],
  },

  {
    country: "Alemania",
    question: "ALE-32 | La bebida nacional de Alemania es:",
    answer: "cerveza",
    options: ["Cerveza", "Whisky", "Vodka", "Vino"],
  },

  {
    country: "Alemania",
    question:
      "ALE-33 | El mejor automovilista, ganador siete veces de la Fórmula 1, es:",
    answer: "schumacher",
    options: [
      "Sebastian Vettel",
      "Schumacher",
      "Nico Rosberg",
      "Fernando Alonso",
    ],
  },
];

export default function SoccerQuiz() {
  const [teams, setTeams] = useState<{ blue: string; red: string } | null>(
    null,
  );
  const [possession, setPossession] = useState<{
    team: "blue" | "red";
    role: Role;
  }>({ team: "blue", role: "5" });
  const [score, setScore] = useState({ blue: 0, red: 0 });
  const [feedback, setFeedback] = useState("");
  const [currentQ, setCurrentQ] = useState(QUESTIONS_DB[0]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isShowingOptions, setIsShowingOptions] = useState(false);

  useEffect(() => {
    if (!teams?.red || feedback !== "" || timeLeft === 0) {
      if (timeLeft === 0 && feedback === "") handleManualError();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, teams, feedback]);

  const activePlayerId = useMemo(() => {
    const playersInRole = formation.filter((p) => p.role === possession.role);
    return playersInRole.length > 0
      ? playersInRole[Math.floor(Math.random() * playersInRole.length)].id
      : null;
  }, [possession.role, possession.team]);

  const playSfx = (audioArray: string[]) => {
    const randomAudio =
      audioArray[Math.floor(Math.random() * audioArray.length)];
    const audio = new Audio(randomAudio);
    audio.play().catch((e) => console.log("Audio play blocked", e));
  };

  const selectTeam = (name: string) => {
    if (!teams) setTeams({ blue: name, red: "" });
    else if (!teams.red) {
      setTeams({ ...teams, red: name });
      pickQuestion(teams.blue, name);
    }
  };

  const pickQuestion = (teamBlue: string, teamRed: string) => {
    const pool = QUESTIONS_DB.filter((q) =>
      [teamBlue, teamRed, "Argentina"].includes(q.country),
    );
    const finalPool = pool.length > 0 ? pool : QUESTIONS_DB;
    setCurrentQ(finalPool[Math.floor(Math.random() * finalPool.length)]);
    setTimeLeft(30);
    setIsShowingOptions(false);
  };

  const handleManualAction = (mode: "corto" | "largo") => {
    const currentTeam = possession.team;
    let nextRole: Role = possession.role;

    if (possession.role === "DEF") nextRole = mode === "corto" ? "LAT" : "5";
    else if (possession.role === "LAT")
      nextRole = mode === "corto" ? "5" : "VOL";
    else if (possession.role === "5")
      nextRole = mode === "corto" ? "VOL" : "EXT";
    else if (possession.role === "VOL")
      nextRole = mode === "corto" ? "EXT" : "9";
    else if (possession.role === "EXT") {
      if (mode === "largo") {
        handleGoal();
        return;
      }
      nextRole = "9";
    } else if (possession.role === "9") {
      handleGoal();
      return;
    }

    playSfx(mode === "corto" ? SOUNDS.SHORT_PASS : SOUNDS.LONG_PASS);
    setPossession({ team: currentTeam, role: nextRole });
    setFeedback(
      mode === "corto"
        ? "¡Pase corto completado! ✅"
        : "¡Pase largo exitoso! 🚀",
    );
    setTimeout(() => {
      setFeedback("");
      pickQuestion(teams!.blue, teams!.red);
    }, 1500);
  };

  const handleManualError = () => {
    playSfx(SOUNDS.INCORRECT);
    const otherTeam = possession.team === "blue" ? "red" : "blue";
    let recoveryRole: Role = "5";

    if (possession.role === "DEF") recoveryRole = "9";
    else if (possession.role === "LAT") recoveryRole = "EXT";
    else if (possession.role === "5") recoveryRole = "VOL";
    else if (possession.role === "VOL") recoveryRole = "5";
    else if (possession.role === "EXT") recoveryRole = "LAT";
    else if (possession.role === "9") recoveryRole = "DEF";

    setPossession({ team: otherTeam, role: recoveryRole });
    setFeedback("¡Pérdida de balón! ❌");
    setTimeout(() => {
      setFeedback("");
      pickQuestion(teams!.blue, teams!.red);
    }, 1500);
  };

  const handleGoal = () => {
    playSfx(SOUNDS.GOAL);
    setFeedback("¡GOOOOOOOL! ⚽🔥🔥🔥");
    setScore((prev) => ({
      ...prev,
      [possession.team]: prev[possession.team] + 1,
    }));
    setTimeout(() => {
      setPossession({
        team: possession.team === "blue" ? "red" : "blue",
        role: "5",
      });
      setFeedback("");
      pickQuestion(teams!.blue, teams!.red);
    }, 3500);
  };

  if (!teams || !teams.red) {
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

  const isShootingRole = possession.role === "EXT" || possession.role === "9";

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans overflow-hidden">
      <div className="flex-[1.2] p-4 md:p-8 flex flex-col relative">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-zinc-800">
          <div
            className={`h-full transition-all duration-1000 ${timeLeft < 10 ? "bg-red-500" : "bg-blue-500"}`}
            style={{ width: `${(timeLeft / 30) * 100}%` }}
          />
        </div>

        <div className="flex items-center justify-between bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm mb-8 mt-2 border border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{BANDERAS[teams.blue]}</span>
            <span className="text-2xl font-black text-blue-600">
              {score.blue}
            </span>
          </div>
          <div
            className={`px-4 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-xl font-mono font-bold ${timeLeft < 10 ? "text-red-500 animate-pulse" : "text-zinc-600 dark:text-zinc-300"}`}
          >
            0:{timeLeft.toString().padStart(2, "0")}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl font-black text-red-600">
              {score.red}
            </span>
            <span className="text-3xl">{BANDERAS[teams.red]}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
          <div className="mb-6">
            <p
              className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded mb-4 ${possession.team === "blue" ? "bg-blue-600 text-white" : "bg-red-600 text-white"}`}
            >
              POSESIÓN: {possession.team === "blue" ? teams.blue : teams.red} (
              {possession.role})
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
                  className={`p-10 text-2xl font-black uppercase italic transition-all active:scale-95 shadow-xl ${isShootingRole ? "bg-green-600 text-white" : "bg-zinc-900 dark:bg-white text-white dark:text-black"}`}
                >
                  {isShootingRole ? "¡Tirar! ⚽" : "Pase Largo 🚀"}
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
                    <div
                      key={i}
                      className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700 text-sm font-bold uppercase dark:text-zinc-300"
                    >
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
                    Pase Incorrecto ❌
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={handleManualError}
              className={`w-full p-4 mt-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 font-black uppercase text-sm rounded hover:bg-red-100 hover:text-red-600 transition-all ${isShowingOptions ? "hidden" : ""}`}
            >
              Perder la pelota 🏳️
            </button>
          </div>

          {feedback && (
            <div className="mt-8 p-4 bg-yellow-400 text-black font-black uppercase italic text-center animate-bounce rounded shadow-xl border-2 border-black">
              {feedback}
            </div>
          )}
        </div>
      </div>

      {/* --- CONTENEDOR PRINCIPAL DE LA CANCHA --- */}
      <div className="flex-1 bg-zinc-900 relative border-l-4 border-zinc-800 hidden lg:flex items-center justify-center p-8">
        {/* Imagen de fondo (La Bombonera). Opacity controla qué tan fuerte se ve el pasto */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "url('/bombonera.webp')",
            backgroundSize: "120%",
            backgroundPosition: "center",
          }}
        ></div>

        {/* El "Rectángulo" de la cancha. 
      - max-w-[330px]: Controla el ancho total de la cancha.
      - aspect-[3/4]: Mantiene la proporción fútbolística. 
      - border-white/20: Son las líneas laterales y de fondo. */}
        <div className="relative left-20 w-full max-w-[370px] aspect-[3/4] border-4 border-white/20 rounded">
          {/* Línea de mitad de cancha */}
          <div className="absolute top-1/2 w-full h-0.5 bg-white/20 -translate-y-1/2" />

          {/* Círculo central */}
          <div className="absolute top-1/2 left-1/2 w-20 h-20 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />

          {/* 
          DIBUJO DE JUGADORES 
          Nota: Los jugadores se ubican según el array 'formation' definido arriba.
      */}

          {/* JUGADORES EQUIPO AZUL (Atacan hacia arriba) */}
          {formation.map((p) => (
            <PlayerMarker
              key={`blue-${p.id}`}
              pos={p} // Usa top/left tal cual están en el array formation
              color="bg-blue-600"
              hasPossession={
                possession.team === "blue" && p.id === activePlayerId
              }
            />
          ))}

          {/* JUGADORES EQUIPO ROJO (Espejo del azul - Atacan hacia abajo) */}
          {formation.map((p) => (
            <PlayerMarker
              key={`red-${p.id}`}
              // '100 - p.top' invierte la posición para que queden enfrentados
              // Si el azul está en top: 80 (abajo), el rojo queda en top: 20 (arriba)
              pos={{ ...p, top: 100 - p.top }}
              color="bg-red-600"
              hasPossession={
                possession.team === "red" && p.id === activePlayerId
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function PlayerMarker({
  pos,
  color,
  hasPossession,
}: {
  pos: Player;
  color: string;
  hasPossession: boolean;
}) {
  return (
    <div
      className={`absolute w-8 h-8 ${color} rounded-full border-2 border-white transition-all duration-700 flex items-center justify-center ${hasPossession ? "scale-[2.2] z-30 ring-4 ring-yellow-400 shadow-[0_0_30px_rgba(253,224,71,0.6)]" : "opacity-80"}`}
      style={{
        top: `${pos.top}%`,
        left: `${pos.left}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {hasPossession && (
        <div className="w-2 h-2 bg-white rounded-full animate-ping" />
      )}
    </div>
  );
}
