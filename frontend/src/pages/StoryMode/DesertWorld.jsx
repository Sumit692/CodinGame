import DashboardLayout from "../../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

function DesertWorld() {
  const navigate = useNavigate();

  const levels = [
    {
      id: 6,
      title: "Array Basics",
      xp: 100,
      unlocked: true,
    },
    {
      id: 7,
      title: "Find Maximum Element",
      xp: 125,
      unlocked: true,
    },
    {
      id: 8,
      title: "Array Rotation",
      xp: 150,
      unlocked: false,
    },
    {
      id: 9,
      title: "Prefix Sum",
      xp: 175,
      unlocked: false,
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🏜️ Desert of Arrays
        </h1>

        <p className="text-zinc-400 mb-10">
          Learn arrays and solve increasingly difficult challenges.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {levels.map((level) => (
            <div
              key={level.id}
              className={`rounded-2xl p-6 border ${
                level.unlocked
                  ? "bg-zinc-900 border-yellow-500"
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
                disabled={!level.unlocked}
                onClick={() => navigate("/desert-challenge")}
                className={`mt-6 px-5 py-2 rounded-xl font-semibold ${
                  level.unlocked
                    ? "bg-yellow-500 hover:bg-yellow-600 text-black"
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

export default DesertWorld;