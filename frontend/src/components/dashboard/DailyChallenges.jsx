const challenges = [
  {
    title: "Easy Challenge",
    reward: "+50 XP",
    difficulty: "Easy",
  },
  {
    title: "Medium Challenge",
    reward: "+100 XP",
    difficulty: "Medium",
  },
  {
    title: "Hard Challenge",
    reward: "+250 XP",
    difficulty: "Hard",
  },
];

function DailyChallenges() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          Daily Challenges
        </h2>

        <div className="bg-orange-500/20 border border-orange-500 rounded-xl px-4 py-2">
          🔥 7 Day Streak
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-orange-500 transition"
          >
            <h3 className="text-xl font-bold text-white">
              {challenge.title}
            </h3>

            <p className="text-zinc-400 mt-2">
              Difficulty: {challenge.difficulty}
            </p>

            <p className="text-green-400 mt-4 font-semibold">
              Reward: {challenge.reward}
            </p>

            <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
              Start Challenge
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyChallenges;