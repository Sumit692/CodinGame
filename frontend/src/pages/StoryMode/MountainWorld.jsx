import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

function MountainWorld() {
  const navigate = useNavigate();

  const levels = [
    {
      id: 11,
      title: "Array Traversal",
      xp: 200,
      unlocked: true,
    },
    {
      id: 12,
      title: "Binary Search",
      xp: 250,
      unlocked: true,
    },
    {
      id: 13,
      title: "Sorting Challenge",
      xp: 300,
      unlocked: false,
    },
    {
      id: 14,
      title: "🏆 Mountain Boss",
      xp: 500,
      unlocked: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🏔️ Mountain of Arrays
        </h1>

        <p className="text-zinc-400 mb-10">
          Climb the mountain and defeat the boss challenge.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`rounded-2xl p-6 border ${
                level.unlocked
                  ? "bg-zinc-900 border-purple-500"
                  : "bg-zinc-950 border-zinc-800 opacity-60"
              }`}
            >
              <h2 className="text-2xl font-bold text-white">
                {level.title}
              </h2>

              <p className="text-purple-400 mt-4">
                Reward: {level.xp} XP
              </p>

              <button
                disabled={!level.unlocked}
                onClick={() => navigate("/mountain-challenge")}
                className={`mt-6 px-5 py-2 rounded-xl font-semibold ${
                  level.unlocked
                    ? "bg-purple-500 hover:bg-purple-600 text-white"
                    : "bg-zinc-800 text-zinc-500"
                }`}
              >
                {level.unlocked ? "Play Level" : "Locked"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MountainWorld;