import {
  getXP,
  getLevel,
  getWins,
  getRank,
} from "../../utils/xpManager";

function StatsCards() {
  const stats = [
    {
      title: "XP",
      value: getXP(),
      icon: "⭐",
    },
    {
      title: "Level",
      value: getLevel(),
      icon: "🎖️",
    },
    {
      title: "Battle Wins",
      value: getWins(),
      icon: "🏆",
    },
    {
      title: "Rank",
      value: getRank(),
      icon: "👑",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
        >
          <div className="text-4xl mb-3">
            {stat.icon}
          </div>

          <p className="text-zinc-400">
            {stat.title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-2">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;