import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getUnlockedLevels } from "../../utils/xpManager";

function LevelSelect() {
  const navigate = useNavigate();

  const unlockedLevels = getUnlockedLevels();

  const levels = [
    {
      id: 1,
      title: "Hello World",
      xp: 50,
    },
    {
      id: 2,
      title: "Variables Challenge",
      xp: 75,
    },
    {
      id: 3,
      title: "Loops Challenge",
      xp: 100,
    },
    {
      id: 4,
      title: "Arrays Challenge",
      xp: 150,
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🌲 Forest of Variables
        </h1>

        <p className="text-zinc-400 mb-10">
          Complete levels to unlock new challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {levels.map((level) => {
            const unlocked = unlockedLevels.includes(level.id);

            return (
              <div
                key={level.id}
                className={`rounded-2xl p-6 border ${
                  unlocked
                    ? "bg-zinc-900 border-cyan-500"
                    : "bg-zinc-950 border-zinc-800 opacity-60"
                }`}
              >
                <h2 className="text-2xl font-bold text-white">
                  Level {level.id}
                </h2>

                <p className="text-zinc-400 mt-2">
                  {level.title}
                </p>

                <p className="text-yellow-400 mt-4">
                  Reward: {level.xp} XP
                </p>

                <button
                  disabled={!unlocked}
                  onClick={() =>
                    navigate("/story-challenge")
                  }
                  className={`mt-6 px-5 py-2 rounded-xl font-semibold ${
                    unlocked
                      ? "bg-cyan-500 hover:bg-cyan-600 text-black"
                      : "bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {unlocked ? "Play Level" : "Locked"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default LevelSelect;