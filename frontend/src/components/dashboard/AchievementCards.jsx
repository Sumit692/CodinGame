const achievements = [
  {
    title: "First Blood",
    description: "Solve your first coding problem",
    icon: "⚔️",
  },
  {
    title: "Bug Hunter",
    description: "Fix 50 coding errors",
    icon: "🐞",
  },
  {
    title: "Speed Runner",
    description: "Solve a problem in under 2 minutes",
    icon: "⚡",
  },
];

function AchievementCards() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-purple-500 transition"
          >
            <div className="text-4xl mb-4">
              {achievement.icon}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {achievement.title}
            </h3>

            <p className="text-zinc-400 mt-2">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementCards;