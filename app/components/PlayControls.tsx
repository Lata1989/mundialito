import { Question, Role } from "../data/gameData";

type PlayControlsProps = {
  currentQ: Question;
  possession: { team: "blue" | "red"; role: Role };
  teams: { blue: string; red: string };
  isShowingOptions: boolean;
  setIsShowingOptions: (value: boolean) => void;
  handleManualAction: (mode: "corto" | "largo") => void;
  handleManualError: () => void;
  feedback: string;
};

export function PlayControls({
  currentQ,
  possession,
  teams,
  isShowingOptions,
  setIsShowingOptions,
  handleManualAction,
  handleManualError,
  feedback,
}: PlayControlsProps) {
  const isStriker = possession.role === "9";
  const isWinger = possession.role === "EXT";
  const isShootingRole = isStriker || isWinger;

  return (
    <div className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full">
      <div className="mb-6">
        <p
          className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded mb-4 ${
            possession.team === "blue" ? "bg-blue-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          POSESIÓN: {possession.team === "blue" ? teams.blue : teams.red} ({possession.role})
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
              className={`p-10 text-2xl font-black uppercase italic transition-all active:scale-95 shadow-xl ${
                isShootingRole ? "bg-green-600 text-white" : "bg-zinc-900 dark:bg-white text-white dark:text-black"
              }`}
            >
              {isStriker ? "Rematar Fuerte 🚀" : isWinger ? "Rematar 🚀" : "Pase Largo 🚀"}
            </button>
            <button
              onClick={() => setIsShowingOptions(true)}
              className="p-10 text-2xl font-black uppercase italic border-4 border-zinc-900 dark:border-white dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all active:scale-95"
            >
              {isStriker ? "Tirar a colocar ⚽" : "Pase Corto 🙋‍♂️"}
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
                {isStriker ? "¡GOOOOL! ✅" : "Pase correcto ✅"}
              </button>
              <button
                onClick={handleManualError}
                className="p-8 bg-red-600 text-white text-2xl font-black uppercase italic shadow-lg active:scale-95"
              >
                {isStriker ? "¡La tiró afuera! ❌" : "Pase incorrecto ❌"}
              </button>
            </div>
          </div>
        )}

        <button
          onClick={handleManualError}
          className={`w-full p-4 mt-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-500 font-black uppercase text-sm rounded hover:bg-red-100 hover:text-red-600 transition-all ${
            isShowingOptions ? "hidden" : ""
          }`}
        >
          {isShootingRole ? "Perderla 🏳️" : "Perder la pelota!!!!🏳️"}
        </button>
      </div>

      {feedback && (
        <div className="mt-8 p-4 bg-yellow-400 text-black font-black uppercase italic text-center animate-bounce rounded shadow-xl border-2 border-black">
          {feedback}
        </div>
      )}
    </div>
  );
}
