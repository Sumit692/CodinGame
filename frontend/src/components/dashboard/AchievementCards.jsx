import { useEffect } from "react";
import {
  getAchievements,
  getSeenAchievements,
  markAchievementSeen,
} from "../../utils/xpManager";
import { useNotification } from "../../context/NotificationContext";

function AchievementCards() {
  const achievements = getAchievements();

  const { showNotification } =
    useNotification();

  useEffect(() => {
    const seenAchievements =
      getSeenAchievements();

    achievements.forEach((achievement) => {
      if (
        !seenAchievements.includes(
          achievement.title
        )
      ) {
        showNotification(
          `🏆 ${achievement.title} Unlocked`
        );

        markAchievementSeen(
          achievement.title
        );
      }
    });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">
        🏅 Achievements
      </h2>

      {achievements.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400">
            No achievements unlocked yet.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="bg-zinc-900 border border-yellow-500 rounded-2xl p-6"
            >
              <div className="text-5xl mb-3">
                {achievement.icon}
              </div>

              <h3 className="text-xl font-bold text-white">
                {achievement.title}
              </h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AchievementCards;