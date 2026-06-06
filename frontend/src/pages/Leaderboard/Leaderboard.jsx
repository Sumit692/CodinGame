import DashboardLayout from "../../components/layout/DashboardLayout";
import leaderboardData from "../../data/leaderboardData";
import { getXP, getLevel } from "../../utils/xpManager";

function Leaderboard() {
  const currentPlayer = {
    rank: 5,
    name: "You",
    level: getLevel(),
    xp: getXP(),
  };

  const players = [...leaderboardData, currentPlayer]
    .sort((a, b) => b.xp - a.xp)
    .map((player, index) => ({
      ...player,
      rank: index + 1,
    }));

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-10">
          🏆 Global Leaderboard
        </h1>

        <div className="space-y-4">
          {players.map((player) => (
            <div
              key={player.name}
              className={`rounded-2xl p-5 border ${
                player.name === "You"
                  ? "bg-cyan-500/10 border-cyan-500"
                  : "bg-zinc-900 border-zinc-800"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-white">
                    #{player.rank} {player.name}
                  </h2>

                  <p className="text-zinc-400">
                    Level {player.level}
                  </p>
                </div>

                <div className="text-cyan-400 font-bold">
                  {player.xp} XP
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Leaderboard;