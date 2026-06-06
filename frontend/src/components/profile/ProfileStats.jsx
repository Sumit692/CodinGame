import {
  getXP,
  getLevel,
  getWins,
  getAchievements,
  getSolvedProblems,
  getCurrentStreak,
  getBestStreak,
} from "../../utils/xpManager";

function ProfileStats() {
  const totalXP = getXP();
  const level = getLevel();
  const wins = getWins();

  const solvedProblems =
    getSolvedProblems().length;

  const achievements =
    getAchievements().length;

  const currentStreak =
    getCurrentStreak();

  const bestStreak =
    getBestStreak();

  const badges = [
    solvedProblems >= 1,
    currentStreak >= 7,
    wins >= 5,
    level >= 5,
    level >= 10,
  ].filter(Boolean).length;

  const stats = [
    {
      label: "Problems Solved",
      value: solvedProblems,
      icon: "📚",
    },
    {
      label: "Total XP",
      value: totalXP,
      icon: "⭐",
    },
    {
      label: "Current Level",
      value: level,
      icon: "🚀",
    },
    {
      label: "Wins",
      value: wins,
      icon: "⚔️",
    },
    {
      label: "Current Streak",
      value: currentStreak,
      icon: "🔥",
    },
    {
      label: "Best Streak",
      value: bestStreak,
      icon: "🏆",
    },
    {
      label: "Achievements",
      value: achievements,
      icon: "🥇",
    },
    {
      label: "Badges",
      value: badges,
      icon: "🏅",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">
        📊 Statistics
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <div className="text-4xl mb-3">
              {stat.icon}
            </div>

            <h3 className="text-zinc-400">
              {stat.label}
            </h3>

            <p className="text-3xl font-bold text-white mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileStats;