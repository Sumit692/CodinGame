import { useState, useEffect } from "react";
import { addXP } from "../../utils/xpManager";
import { useNotification } from "../../context/NotificationContext";

const challenges = [
  {
    id: 1,
    title: "Binary Search",
    reward: 200,
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Maximum Subarray",
    reward: 250,
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Dijkstra Algorithm",
    reward: 500,
    difficulty: "Hard",
  },
];

function DailyChallenges() {
  const { showNotification } = useNotification();

  const [dailyChallenge, setDailyChallenge] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const dayOfMonth = new Date().getDate();

    const challenge =
      challenges[dayOfMonth % challenges.length];

    setDailyChallenge(challenge);

    const todayString =
      new Date().toDateString();

    const completedToday =
      localStorage.getItem(
        `daily_challenge_${challenge.id}_${todayString}`
      ) === "true";

    setCompleted(completedToday);
  }, []);

  const completeChallenge = () => {
    if (!dailyChallenge || completed) return;

    addXP(dailyChallenge.reward);

    showNotification(
      `🎉 +${dailyChallenge.reward} XP Earned`
    );

    localStorage.setItem(
      `daily_challenge_${dailyChallenge.id}_${new Date().toDateString()}`,
      "true"
    );

    setCompleted(true);

    setTimeout(() => {
      showNotification(
        "🔥 Daily Challenge Completed"
      );
    }, 500);
  };

  if (!dailyChallenge) {
    return null;
  }

  const difficultyColor =
    dailyChallenge.difficulty === "Easy"
      ? "text-green-400"
      : dailyChallenge.difficulty === "Medium"
      ? "text-yellow-400"
      : "text-red-400";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white">
          🔥 Daily Challenge
        </h2>

        <div className="bg-orange-500/20 border border-orange-500 rounded-xl px-4 py-2 text-orange-400">
          Daily Reward
        </div>
      </div>

      <div className="bg-zinc-900 border border-orange-500 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-white">
          {dailyChallenge.title}
        </h3>

        <p
          className={`mt-3 font-semibold ${difficultyColor}`}
        >
          Difficulty: {dailyChallenge.difficulty}
        </p>

        <p className="text-green-400 mt-3 text-lg font-bold">
          Reward: +{dailyChallenge.reward} XP
        </p>

        <div className="mt-6">
          {completed ? (
            <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-xl inline-block">
              ✅ Completed Today
            </div>
          ) : (
            <button
              onClick={completeChallenge}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              Complete Challenge
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DailyChallenges;