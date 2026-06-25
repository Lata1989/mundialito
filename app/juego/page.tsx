"use client";

import { useEffect, useMemo, useState } from "react";
import { BANDERAS } from "@/lib/gameConstants";
import type { GameState, Role } from "@/lib/types";
import { QUESTIONS_DB, type QuestionItem } from "../data/preguntas";

const POSITION_TEMPLATES = [
  { role: "ARQ", top: 96, left: 50, dorsal: "1" },
  { role: "DEF", top: 85, left: 35, dorsal: "2" },
  { role: "DEF", top: 82, left: 65, dorsal: "6" },
  { role: "LAT", top: 74, left: 13, dorsal: "4" },
  { role: "LAT", top: 74, left: 85, dorsal: "3" },
  { role: "5", top: 68, left: 50, dorsal: "5" },
  { role: "VOL", top: 55, left: 30, dorsal: "8" },
  { role: "VOL", top: 43, left: 72, dorsal: "10" },
  { role: "EXT", top: 28, left: 23, dorsal: "7" },
  { role: "EXT", top: 20, left: 82, dorsal: "11" },
  { role: "9", top: 19, left: 50, dorsal: "9" },
] as const;

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

const getTeamCode = (name: string) => {
  if (!name) return "---";
  return name.substring(0, 3).toUpperCase();
};

const initializeQuestionPool = (teamBlue: string, teamRed: string) => {
  const pool = QUESTIONS_DB.filter((q) => [teamBlue, teamRed, "Argentina"].includes(q.country));
  const finalPool = pool.length > 0 ? pool : QUESTIONS_DB;
  const shuffled = [...finalPool];

  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

export default function SoccerQuiz() {
  const [teams, setTeams] = useState<{ blue: string; red: string } | null>(null);
  const [possession, setPossession] = useState<{ team: "blue" | "red"; role: Role }>({ team: "blue", role: "5" });
  const [score, setScore] = useState({ blue: 0, red: 0 });
  const [feedback, setFeedback] = useState("");
  const [currentQ, setCurrentQ] = useState<QuestionItem | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isShowingOptions, setIsShowingOptions] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isWaitingTransition, setIsWaitingTransition] = useState(false);
  const [transitionCountdown, setTransitionCountdown] = useState(0);
  const [remainingQuestions, setRemainingQuestions] = useState<QuestionItem[]>([]);
  const [matchId, setMatchId] = useState("");

  useEffect(() => {
    setMatchId(() => Math.random().toString(36).slice(2, 8).toUpperCase());
  }, []);

  const currentGameState = useMemo<GameState | null>(() => {
    if (!teams) return null;

    return {
      question: currentQ?.question ?? "",
      options: currentQ?.options ?? [],
      country: currentQ?.country ?? "",
      timeLeft,
      possessionTeam: possession.team,
      possessionRole: possession.role,
      score,
      teams,
      isWaitingTransition,
    };
  }, [currentQ, teams, timeLeft, possession, score, isWaitingTransition]);

  useEffect(() => {
    if (!currentGameState || !teams?.red) return;

    void fetch(`/api/match/${matchId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentGameState),
    }).catch((error) => {
      console.error("Failed to send match update", error);
    });
  }, [currentGameState, matchId, teams?.red]);

  useEffect(() => {
    if (!teams?.red || feedback !== "" || !isTimerRunning || isWaitingTransition) return;

    if (timeLeft === 0) {
      setIsTimerRunning(false);
      handleManualError();
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, teams, feedback, isTimerRunning, isWaitingTransition]);

  useEffect(() => {
    if (!isWaitingTransition || transitionCountdown <= 0) return;

    const transitionTimer = setInterval(() => {
      setTransitionCountdown((prev) => {
        if (prev <= 1) {
          setIsWaitingTransition(false);
          advanceToNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(transitionTimer);
  }, [isWaitingTransition, transitionCountdown]);

  const playSfx = (audioArray: string[]) => {
    const randomAudio = audioArray[Math.floor(Math.random() * audioArray.length)];
    const audio = new Audio(randomAudio);
    audio.play().catch((e) => console.log("Audio play blocked", e));
  };

  const selectTeam = (name: string) => {
    if (!teams) {
      setTeams({ blue: name, red: "" });
      return;
    }

    if (!teams.red) {
      const newTeams = { ...teams, red: name };
      setTeams(newTeams);
      setPossession({ team: "blue", role: "5" });

      const newPool = initializeQuestionPool(teams.blue, name);
      setCurrentQ(newPool[0]);
      setRemainingQuestions(newPool.slice(1));
      setTimeLeft(30);
      setIsTimerRunning(false);
    }
  };

  const advanceToNextQuestion = () => {
    if (!teams) return;

    if (remainingQuestions.length === 0) {
      const refreshedPool = initializeQuestionPool(teams.blue, teams.red);
      setCurrentQ(refresPool[0]);
      setRemainingQuestions(refreshedPool.slice(1));
    } else {
      const [nextQ, ...rest] = remainingQuestions;
      setCurrentQ(nextQ);
      setRemainingQuestions(rest);
    }

    setTimeLeft(30);
    setIsShowingOptions(false);
    setIsTimerRunning(false);
  };

  const handleForceChangeQuestion = () => {
    if (!teams) return;
    advanceToNextQuestion();
    setFeedback("🔄 Siguiente pregunta cargada. Presiona Play.");
    setTimeout(() => setFeedback(""), 2000);
  };

  const triggerTransitionMode = () => {
    setIsTimerRunning(false);
    setIsWaitingTransition(true);
    setTransitionCountdown(5);
  };

  const handleSelectOptionTrivia = (selectedOption: string) => {
    const isCorrect = selectedOption.toLowerCase() === currentQ?.answer?.toLowerCase();

    if (isCorrect) {
      if (possession.role === "9") {
        handleGoal();
      } else {
        handleManualAction("corto");
      }
    } else {
      handleManualError();
    }
  };

  const handleManualAction = (mode: "corto" | "largo") => {
    const currentTeam = possession.team;
    let nextRole: Role = possession.role;

    if (mode === "corto") {
      if (possession.role === "DEF") nextRole = "LAT";
      else if (possession.role === "LAT") nextRole = "5";
      else if (possession.role === "5") nextRole = "VOL";
      else if (possession.role === "VOL") nextRole = "EXT";
      else if (possession.role === "EXT") nextRole = "9";
      else if (possession.role === "9") {
        handleGoal();
        return;
      }
    } else {
      if (possession.role === "DEF") nextRole = "5";
      else if (possession.role === "LAT") nextRole = "VOL";
      else if (possession.role === "5") nextRole = "EXT";
      else if (possession.role === "VOL") nextRole = "9";
      else if (possession.role === "EXT" || possession.role === "9") {
        handleGoal();
        return;
      }
    }

    playSfx(mode === "corto" ? SOUNDS.SHORT_PASS : SOUNDS.LONG_PASS);
    setPossession({ team: currentTeam, role: nextRole });
    triggerTransitionMode();
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
    triggerTransitionMode();
  };

  const handleGoal = () => {
    playSfx(SOUNDS.GOAL);
    setScore((prev) => ({ ...prev, [possession.team]: prev[possession.team] + 1 }));

    setFeedback("¡GOOOOOOOL! ⚽🔥🔥🔥");
    setTimeout(() => {
      setPossession({ team: possession.team === "blue" ? "red" : "blue", role: "5" });
      setFeedback("");
      triggerTransitionMode();
    }, 3000);
  };

  if (!teams || !teams.red) {
    return (
      <div className={`relative flex flex-col items-center justify-center min-h-screen p-4 md:p-6 text-center transition-colors duration-300 ${isDarkTheme ? "bg-zinc-950 text-white" : "bg-slate-100 text-slate-900"}`}>
        
        {/* CABECERA ULTRA DISCRETA CON ID Y TEMA */}
        <div className="absolute top-4 left-4 right-4 md:top-6 md:left-6 md:right-6 flex justify-between items-center select-none">
          <span className="text-xs font-mono opacity-50 tracking-wider">
            ID PARTIDO: <strong className="font-mono text-sm tracking-widest bg-black/5 dark:bg-white/5 px-2 py-1 rounded">{matchId}</strong>
          </span>
          <button
            onClick={() => setIsDarkTheme(!isDarkTheme)}
            className={`px-3 py-1.5 rounded-xl font-bold transition-colors shadow-sm text-xs ${isDarkTheme ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-white border text-slate-700 hover:bg-slate-100"}`}
          >
            {isDarkTheme ? "☀️ Claro" : "🌙 Oscuro"}
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-16 mb-6 max-w-7xl w-full px-4">
          <div className="h-40 sm:h-52 md:h-72 aspect-square flex items-center justify-center p-3 md:p-4 transform">
            <img src="/logofunesil.png" alt="Logo Funesil" className="h-full w-full object-contain" />
          </div>

          <div className="h-64 sm:h-76 md:h-96 aspect-square flex items-center justify-center bg-black rounded-[2.5rem] md:rounded-[4rem] p-6 md:p-8 shadow-2xl filter drop-shadow-lg transform">
            <img src="/TRINI.png" alt="Logo TRINI" className="h-full w-full object-contain" />
          </div>

          <div className="h-40 sm:h-52 md:h-72 aspect-square flex items-center justify-center p-3 md:p-4 transform">
            <img src="/logosfunesil.png" alt="Logos Funesil" className="h-full w-full object-contain" />
          </div>
        </div>

        <h1 className="text-xl sm:text-2xl md:text-4xl font-black mb-6 md:mb-10 italic uppercase tracking-tighter max-w-3xl px-2">
          {!teams ? "Seleccionar Primer Equipo (Tendrá la Pelota)" : "Seleccionar Segundo Equipo Rival"}
        </h1>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-5 max-w-5xl w-full px-2">
          {Object.entries(BANDERAS).map(([name, flag]) => (
            <button
              key={name}
              onClick={() => selectTeam(name)}
              className={`p-3 sm:p-5 rounded-2xl border-2 transition-all flex flex-col items-center transform hover:scale-105 active:scale-95 shadow-md ${isDarkTheme ? "bg-zinc-900 border-zinc-800 hover:border-blue-500" : "bg-white border-slate-200 hover:border-blue-500"} ${teams?.blue === name ? "opacity-30 cursor-not-allowed border-blue-500" : ""}`}
              disabled={teams?.blue === name}
            >
              <span className="text-3xl sm:text-5xl md:text-6xl drop-shadow-sm">{flag}</span>
              <p className="text-[9px] sm:text-[10px] font-black mt-2 sm:mt-3 uppercase tracking-wider text-center line-clamp-1">{name}</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const currentTeamName = teams[possession.team];
  const blueBallOwnerIndex = possession.team === "blue" && !isWaitingTransition ? POSITION_TEMPLATES.findIndex((p) => p.role === possession.role) : -1;
  const redBallOwnerIndex = possession.team === "red" && !isWaitingTransition ? POSITION_TEMPLATES.findIndex((p) => p.role === possession.role) : -1;

  return (
    <div className={`flex flex-col lg:flex-row min-h-screen font-sans overflow-hidden transition-colors duration-300 ${isDarkTheme ? "bg-zinc-950 text-white" : "bg-slate-100 text-slate-900"}`}>
      <div className="flex-[1.4] p-6 flex flex-col h-full justify-between lg:max-h-screen overflow-y-auto">
        <div>
          {/* BARRA SUPERIOR DURANTE EL PARTIDO CON EL ID LIMPIO */}
          <div className="flex justify-between items-center mb-4 select-none">
            <span className="text-xs font-mono opacity-50 tracking-wider">
              ID: <span className="font-bold tracking-widest">{matchId}</span>
            </span>
            <button onClick={() => setIsDarkTheme(!isDarkTheme)} className={`px-2 py-1 rounded text-sm font-bold transition-colors ${isDarkTheme ? "bg-slate-800 text-yellow-400 hover:bg-slate-700" : "bg-slate-200 text-slate-700 hover:bg-slate-300"}`}>
              {isDarkTheme ? "☀️" : "🌙"}
            </button>
          </div>

          <div className="flex items-center justify-center p-1 mb-8 select-none font-mono tracking-tight w-full">
            <div className="flex items-center bg-black text-white rounded-full px-4 sm:px-6 shadow-2xl border border-zinc-800 w-full max-w-4xl min-h-[5.5rem] py-2 md:py-4">
              <div className={`flex items-center justify-end gap-2 sm:gap-3 flex-1 transition-opacity duration-300 ${possession.team === "blue" ? "opacity-100" : "opacity-60"}`}>
                <span className="text-3xl sm:text-4xl lg:text-5xl drop-shadow-md">{BANDERAS[teams.blue]}</span>
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-blue-500 border border-white/50 transition-all ${possession.team === "blue" && !isWaitingTransition ? "animate-pulse ring-4 ring-white scale-110" : ""}`} />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white pr-2">{getTeamCode(teams.blue)}</span>
              </div>

              <div className="flex items-center justify-center mx-1 sm:mx-3">
                <div className="bg-[#64e3b7] text-black h-12 sm:h-14 lg:h-16 px-4 sm:px-6 rounded-l-2xl flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black tabular-nums">{score.blue}</span>
                </div>

                <div className="p-0 h-16 sm:h-20 lg:h-24 aspect-square flex items-center justify-center z-10 rounded-xl overflow-hidden">
                  <img src="/TRINI.png" alt="Logo TRINI" className="h-full w-full object-contain filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.15)]" />
                </div>

                <div className="bg-[#64e3b7] text-black h-12 sm:h-14 lg:h-16 px-4 sm:px-6 rounded-r-2xl flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black tabular-nums">{score.red}</span>
                </div>
              </div>

              <div className={`flex items-center justify-start gap-2 sm:gap-3 flex-1 transition-opacity duration-300 ${possession.team === "red" ? "opacity-100" : "opacity-60"}`}>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-white pl-2">{getTeamCode(teams.red)}</span>
                <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 border border-white/50 transition-all ${possession.team === "red" && !isWaitingTransition ? "animate-pulse ring-4 ring-white scale-110" : ""}`} />
                <span className="text-3xl sm:text-4xl lg:text-5xl drop-shadow-md">{BANDERAS[teams.red]}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center w-full">
          {isWaitingTransition ? (
            <div className="flex flex-col items-center justify-center py-12 text-center animate-pulse">
              <div className="text-6xl mb-4">📢</div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight mb-2">Preparando la siguiente jugada...</h3>
              <p className="text-sm opacity-70 mb-6">Moviendo las líneas del equipo</p>
              <div className={`text-5xl font-black px-6 py-3 rounded-2xl ${isDarkTheme ? "bg-zinc-900 border border-zinc-800" : "bg-white border border-slate-200"} shadow-md text-yellow-500`}>
                {transitionCountdown}s
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className={`px-4 py-1.5 border rounded-full text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 transition-colors ${possession.team === "blue" ? "bg-blue-600/20 border-blue-500/50 text-blue-400" : "bg-red-600/20 border-red-500/50 text-red-400"}`}>
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-current"></span>
                  </span>
                  En posesión: {BANDERAS[currentTeamName]} {currentTeamName} ({possession.role})
                </span>
              </div>

              <div className="mb-4 flex flex-wrap items-center gap-4 bg-black/5 dark:bg-white/5 p-4 rounded-2xl border border-slate-300 dark:border-zinc-800 w-full justify-between sm:w-fit">
                <div className={`text-4xl font-black tabular-nums ${timeLeft <= 10 ? "text-red-500 animate-pulse" : ""}`}>⏱️ {timeLeft}s</div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setIsTimerRunning(true)} className={`px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all active:scale-95 ${isTimerRunning ? "bg-green-600 text-white opacity-40 cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700 shadow-md"}`} disabled={isTimerRunning}>
                    ▶️ Play
                  </button>
                  <button onClick={() => setIsTimerRunning(false)} className={`px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all active:scale-95 ${!isTimerRunning ? "bg-amber-500 text-white opacity-40 cursor-not-allowed" : "bg-amber-500 text-white hover:bg-amber-600 shadow-md"}`} disabled={!isTimerRunning}>
                    ⏸️ Pausa
                  </button>
                  <button onClick={handleForceChangeQuestion} className="px-3 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all active:scale-95 bg-indigo-600 text-white hover:bg-indigo-700 shadow-md border-b-2 border-indigo-800">
                    🔄 Cambiar
                  </button>
                </div>
              </div>

              <div className={`mb-2 text-xs font-black tracking-widest uppercase italic ${isDarkTheme ? "text-zinc-500" : "text-slate-600"}`}>
                Pregunta de {currentQ?.country || "Fútbol"} • {remainingQuestions.length} restantes
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight uppercase tracking-tight">{currentQ?.question}</h2>

              <div className="space-y-3">
                {!isShowingOptions ? (
                  <div>
                    {possession.role === "9" || possession.role === "EXT" ? (
                      <div className="space-y-3">
                        <button onClick={() => handleManualAction("largo")} className="w-full p-5 font-black uppercase text-xl transition-all active:scale-95 shadow-lg rounded border-2 bg-orange-600 text-white border-orange-600 hover:bg-orange-700">
                          🚀 FUSILAR AL ARCO
                        </button>
                        <button onClick={() => setIsShowingOptions(true)} className="w-full p-5 font-black uppercase text-xl transition-all active:scale-95 shadow-lg rounded border-2 bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
                          {possession.role === "9" ? "🎯 Definir a colocar (Ver Opciones)" : "🎯 Pase corto al 9 (Ver Opciones)"}
                        </button>
                        <button onClick={handleManualError} className={`w-full p-4 font-black rounded-lg transition-all text-base uppercase border-2 ${isDarkTheme ? "bg-red-900/20 border-red-800 text-red-400 hover:bg-red-900/40" : "bg-red-50 border-red-300 text-red-600 hover:bg-red-100"}`}>
                          ❌ Tirarla afuera
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <button onClick={() => handleManualAction("largo")} className={`w-full p-5 font-black uppercase text-xl transition-all active:scale-95 shadow-lg rounded border-2 ${isDarkTheme ? "bg-white text-black border-white hover:bg-zinc-100" : "bg-slate-800 text-white border-slate-800 hover:bg-slate-700"}`}>
                          🔫 Pase largo
                        </button>
                        <button onClick={() => setIsShowingOptions(true)} className="w-full p-5 font-black uppercase text-xl transition-all active:scale-95 shadow-lg rounded border-2 bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
                          🎯 Pase Corto (Ver Opciones)
                        </button>
                        <button onClick={handleManualError} className={`w-full p-4 font-black rounded-lg transition-all text-base uppercase border-2 ${isDarkTheme ? "bg-red-900/20 border-red-800 text-red-400 hover:bg-red-900/40" : "bg-red-50 border-red-300 text-red-600 hover:bg-red-100"}`}>
                          ❌ Pelota perdida
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className={`text-sm font-black tracking-widest uppercase ${possession.team === "blue" ? "text-blue-500" : "text-red-500"}`}>{possession.role === "9" ? "Opciones para definir Colocado:" : "Opciones para descargar Pase Corto:"}</div>
                    <div className="grid grid-cols-1 gap-2">
                      {currentQ?.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => handleSelectOptionTrivia(opt)}
                          className={`w-full p-4 font-bold rounded-lg text-base text-left uppercase border transition-all cursor-pointer transform hover:translate-x-1 active:scale-[0.99] ${isDarkTheme ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`}
                        >
                          • {opt}
                        </button>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button onClick={() => handleManualAction("corto")} className="p-5 font-black rounded-xl transition-all text-lg uppercase bg-green-600 text-white hover:bg-green-700 active:scale-95 shadow-md">
                        {possession.role === "9" ? "⚽ ¡GOL!" : "✅ Pase Exitoso"}
                      </button>
                      <button onClick={handleManualError} className="p-5 font-black rounded-xl transition-all text-lg uppercase bg-red-600 text-white hover:bg-red-700 active:scale-95 shadow-md">
                        {possession.role === "9" ? "❌ Tiro Errado" : "❌ Pase Cortado"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {feedback && (
          <div className="mt-4 p-4 bg-yellow-400 border-2 border-black text-black font-black uppercase italic text-center animate-bounce rounded-xl shadow-xl w-full">
            {feedback}
          </div>
        )}
      </div>

      {/* SECCIÓN DERECHA: LOGOS + CANCHA */}
      <div className={`flex-[1.8] flex flex-col items-center justify-center p-4 lg:max-h-screen my-auto overflow-hidden ${isDarkTheme ? "bg-zinc-950" : "bg-slate-100"}`}>
        <div className="w-full max-w-[524px] flex flex-col gap-4">

          {/* CONTENEDOR DE LOGOS */}
          <div className="w-full flex items-center justify-center h-40 bg-transparent border-0 p-0 overflow-visible select-none mb-6">
            <img
              src="/logosfunesil.png"
              alt="Logos Funesil"
              className="h-full w-full object-contain scale-150 transform origin-center"
            />
          </div>

          {/* DIBUJO DE LA CANCHA */}
          <div
            className="relative w-full aspect-[100/115] border-[5px] border-white/30 rounded-2xl overflow-hidden transition-all duration-300"
            style={{ background: "repeating-linear-gradient(0deg, #2e7d32, #2e7d32 8%, #388e3c 8%, #388e3c 16%)" }}
          >
            <div className="absolute top-1/2 left-0 w-full h-[3px] bg-white/40 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-32 h-32 border-[3px] border-white/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-2.5 h-2.5 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2" />

            <div className="absolute top-0 left-1/2 w-[62%] h-[14%] border-b-[3px] border-x-[3px] border-white/40 -translate-x-1/2" />
            <div className="absolute top-0 left-1/2 w-[32%] h-[5%] border-b-[3px] border-x-[3px] border-white/30 -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-[62%] h-[14%] border-t-[3px] border-x-[3px] border-white/40 -translate-x-1/2" />
            <div className="absolute bottom-0 left-1/2 w-[32%] h-[5%] border-t-[3px] border-x-[3px] border-white/30 -translate-x-1/2" />

            {POSITION_TEMPLATES.map((p, index) => {
              const topPos = p.top;
              const isBallOwner = index === blueBallOwnerIndex;
              return (
                <div
                  key={`blue-${index}`}
                  className={`absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 bg-blue-600 transition-all duration-500 flex items-center justify-center font-black text-sm text-white border-white/80 ${p.role === "ARQ" ? "border-yellow-400 font-bold bg-zinc-800" : ""} ${isBallOwner ? "scale-[1.35] z-50 ring-4 ring-yellow-400 shadow-[0_0_35px_rgba(250,204,21,1)]" : ""}`}
                  style={{ top: `${topPos}%`, left: `${p.left}%`, transform: "translate(-50%, -50%)" }}
                >
                  {isBallOwner ? <span className="animate-pulse text-base">⚽</span> : p.dorsal}
                </div>
              );
            })}

            {POSITION_TEMPLATES.map((p, index) => {
              const topPos = 100 - p.top;
              const isBallOwner = index === redBallOwnerIndex;
              return (
                <div
                  key={`red-${index}`}
                  className={`absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 bg-red-600 transition-all duration-500 flex items-center justify-center font-black text-sm text-white border-white/80 ${p.role === "ARQ" ? "border-yellow-400 font-bold bg-zinc-800" : ""} ${isBallOwner ? "scale-[1.35] z-50 ring-4 ring-yellow-400 shadow-[0_0_35px_rgba(250,204,21,1)]" : ""}`}
                  style={{ top: `${topPos}%`, left: `${p.left}%`, transform: "translate(-50%, -50%)" }}
                >
                  {isBallOwner ? <span className="animate-pulse text-base">⚽</span> : p.dorsal}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}