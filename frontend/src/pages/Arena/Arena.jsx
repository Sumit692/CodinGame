import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Arena() {
  const navigate = useNavigate();

  const bots = [
    {
      name: "Rookie Bot",
      emoji: "🤖",
      difficulty: "Easy",
    },
    {
      name: "Pro Bot",
      emoji: "🦾",
      difficulty: "Medium",
    },
    {
      name: "Master Bot",
      emoji: "🔥",
      difficulty: "Hard",
    },
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          ⚔️ AI Battle Arena
        </h1>

        <p className="text-zinc-400 mb-10">
          Challenge AI opponents and earn XP.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {bots.map((bot) => (
            <div
              key={bot.name}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <div className="text-6xl mb-4">
                {bot.emoji}
              </div>

              <h2 className="text-2xl font-bold text-white">
                {bot.name}
              </h2>

              <p className="text-zinc-400 mt-2">
                Difficulty: {bot.difficulty}
              </p>

              <button
                onClick={() => navigate("/battle")}
                className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-xl"
              >
                Battle
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Arena;