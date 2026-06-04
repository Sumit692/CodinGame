function StatsCards() {
  const stats = [
    {
      title: "Problems Solved",
      value: "128",
      icon: "💻",
    },
    {
      title: "Current Rank",
      value: "Elite",
      icon: "🏆",
    },
    {
      title: "Battle Wins",
      value: "37",
      icon: "⚔️",
    },
    {
      title: "Global XP",
      value: "12,450",
      icon: "⭐",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500 transition"
        >
          <div className="text-4xl mb-3">
            {stat.icon}
          </div>

          <p className="text-zinc-400 text-sm">
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