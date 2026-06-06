import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getUnlockedWorlds } from "../../utils/xpManager";

function WorldMap() {
  const navigate = useNavigate();

  const unlockedWorlds = getUnlockedWorlds();

  const worlds = [
    {
      id: 1,
      name: "Forest of Variables",
      emoji: "🌲",
      route: "/level-select",
    },
    {
      id: 2,
      name: "Desert of Loops",
      emoji: "🏜️",
      route: "/desert-world",
    },
    {
      id: 3,
      name: "Mountain of Arrays",
      emoji: "🏔️",
      route: "/mountain-world",
    },
    {
      id: 4,
      name: "Space of Algorithms",
      emoji: "🚀",
      route: "/space-world",
    },
  ].map((world) => ({
    ...world,
    unlocked: unlockedWorlds.includes(world.id),
  }));

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🌍 Story World Map
        </h1>

        <p className="text-zinc-400 mb-10">
          Travel through coding worlds and become a Coding Legend.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {worlds.map((world) => (
            <div
              key={world.id}
              className={`rounded-2xl p-6 border ${
                world.unlocked
                  ? "bg-zinc-900 border-cyan-500"
                  : "bg-zinc-950 border-zinc-800 opacity-60"
              }`}
            >
              <div className="text-6xl mb-4">
                {world.emoji}
              </div>

              <h2 className="text-2xl font-bold text-white">
                {world.name}
              </h2>

              <button
                disabled={!world.unlocked}
                onClick={() => navigate(world.route)}
                className={`mt-6 px-5 py-2 rounded-xl font-semibold ${
                  world.unlocked
                    ? "bg-cyan-500 hover:bg-cyan-600 text-black"
                    : "bg-zinc-800 text-zinc-500"
                }`}
              >
                {world.unlocked ? "Enter World" : "Locked"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default WorldMap;