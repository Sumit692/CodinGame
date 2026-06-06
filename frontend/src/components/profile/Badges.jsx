import {
  getLevel,
  getWins,
  getSolvedProblems,
  getCurrentStreak,
} from "../../utils/xpManager";

function Badges() {
  const level = getLevel();
  const wins = getWins();
  const solvedProblems =
    getSolvedProblems().length;
  const streak = getCurrentStreak();

  const badges = [
    {
      title: "First Problem Solved",
      icon: "🥇",
      unlocked: solvedProblems >= 1,
    },
    {
      title: "7 Day Streak",
      icon: "🔥",
      unlocked: streak >= 7,
    },
    {
      title: "Battle Master",
      icon: "⚔️",
      unlocked: wins >= 5,
    },
    {
      title: "Level 5 Reached",
      icon: "🚀",
      unlocked: level >= 5,
    },
    {
      title: "Legend",
      icon: "👑",
      unlocked: level >= 10,
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">
        🏅 Badges
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className={`rounded-2xl p-6 border ${
              badge.unlocked
                ? "bg-zinc-900 border-yellow-500"
                : "bg-zinc-900 border-zinc-800 opacity-50"
            }`}
          >
            <div className="text-5xl mb-3">
              {badge.icon}
            </div>

            <h3 className="text-xl font-bold text-white">
              {badge.title}
            </h3>

            <p
              className={`mt-2 ${
                badge.unlocked
                  ? "text-green-400"
                  : "text-zinc-500"
              }`}
            >
              {badge.unlocked
                ? "Unlocked"
                : "Locked"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Badges;