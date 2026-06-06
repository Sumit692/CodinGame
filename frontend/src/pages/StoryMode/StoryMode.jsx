import DashboardLayout from "../../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

const worlds = [
  {
    id: 1,
    name: "Forest of Variables",
    description: "Learn variables, input and output.",
    level: "1 - 5",
    unlocked: true,
    emoji: "🌲",
  },
  {
    id: 2,
    name: "Desert of Arrays",
    description: "Master arrays and loops.",
    level: "6 - 10",
    unlocked: true,
    emoji: "🏜️",
  },
  {
    id: 3,
    name: "Cyber City",
    description: "Conquer strings and recursion.",
    level: "11 - 15",
    unlocked: false,
    emoji: "🌃",
  },
  {
    id: 4,
    name: "Dragon Mountain",
    description: "Defeat graphs and dynamic programming.",
    level: "16 - 20",
    unlocked: false,
    emoji: "🐉",
  },
];

function StoryMode() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🌍 Story Mode
        </h1>

        <p className="text-zinc-400 mb-10">
          Progress through worlds and unlock new coding challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {worlds.map((world) => (
            <div
              key={world.id}
              className={`rounded-2xl p-6 border transition ${
                world.unlocked
                  ? "bg-zinc-900 border-cyan-500 hover:scale-105 cursor-pointer"
                  : "bg-zinc-950 border-zinc-800 opacity-60"
              }`}
            >
              <div className="text-6xl mb-4">
                {world.emoji}
              </div>

              <h2 className="text-2xl font-bold text-white">
                {world.name}
              </h2>

              <p className="text-zinc-400 mt-2">
                {world.description}
              </p>

              <p className="mt-4 text-cyan-400">
                Levels {world.level}
              </p>

              <div className="mt-6">
                {world.unlocked ? (
                  <button
                    onClick={() => navigate("/world-map")}
                    className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-xl"
                  >
                    Enter World
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-zinc-800 text-zinc-500 px-5 py-2 rounded-xl"
                  >
                    Locked
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StoryMode;