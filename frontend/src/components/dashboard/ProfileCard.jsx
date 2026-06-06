import { useEffect } from "react";
import {
  getXP,
  getLevel,
  getRank,
  getXPProgress,
  getCurrentLevelXP,
  updateStreak,
  getCurrentStreak,
  getBestStreak,
} from "../../utils/xpManager";

function ProfileCard() {
  useEffect(() => {
    updateStreak();
  }, []);

  const currentXP = getCurrentLevelXP();
  const maxXP = 500;

  const progress = getXPProgress();

  const level = getLevel();
  const rank = getRank();

  const totalXP = getXP();

  const currentStreak =
    getCurrentStreak();

  const bestStreak =
    getBestStreak();

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-2xl font-bold">
          S
        </div>

        <div>
          <h2 className="text-xl font-bold text-white">
            Sumit
          </h2>

          <p className="text-zinc-400">
            Level {level} {rank}
          </p>

          <p className="text-cyan-400 text-sm">
            Total XP: {totalXP}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm text-zinc-400 mb-2">
          <span>XP Progress</span>

          <span>
            {currentXP}/{maxXP}
          </span>
        </div>

        <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        <div className="bg-zinc-800 rounded-xl p-4">
          <p className="text-orange-400 font-bold">
            🔥 Current Streak
          </p>

          <p className="text-white text-2xl mt-2">
            {currentStreak} Days
          </p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4">
          <p className="text-yellow-400 font-bold">
            🏆 Best Streak
          </p>

          <p className="text-white text-2xl mt-2">
            {bestStreak} Days
          </p>
        </div>
      </div>

      <div className="mt-6 bg-zinc-800 rounded-xl p-4">
        <h3 className="text-white font-bold mb-3">
          🎁 Streak Rewards
        </h3>

        <div className="space-y-2 text-zinc-300">
          <p>🔥 3 Days → +100 XP</p>
          <p>🔥 7 Days → +300 XP</p>
          <p>🔥 30 Days → +1000 XP</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;