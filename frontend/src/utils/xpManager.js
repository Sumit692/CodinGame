export const getXP = () => {
  return Number(localStorage.getItem("codingame_xp")) || 1250;
};

export const addXP = (amount) => {
  const currentXP = getXP();

  const newXP = currentXP + amount;

  localStorage.setItem("codingame_xp", newXP);

  return newXP;
};

export const getLevel = () => {
  const xp = getXP();

  return Math.floor(xp / 500) + 1;
};

export const getCurrentLevelXP = () => {
  const xp = getXP();

  return xp % 500;
};

export const getXPProgress = () => {
  return (getCurrentLevelXP() / 500) * 100;
};

export const getWins = () => {
  return Number(localStorage.getItem("codingame_wins")) || 0;
};

export const addWin = () => {
  const wins = getWins() + 1;

  localStorage.setItem("codingame_wins", wins);

  return wins;
};

export const getRank = () => {
  const level = getLevel();

  if (level < 3) return "Beginner";
  if (level < 5) return "Coder";
  if (level < 8) return "Elite";

  return "Legend";
};

export const getAchievements = () => {
  const wins = getWins();
  const level = getLevel();

  const achievements = [];

  if (wins >= 1) {
    achievements.push({
      title: "First Victory",
      icon: "🥇",
    });
  }

  if (wins >= 5) {
    achievements.push({
      title: "Battle Master",
      icon: "⚔️",
    });
  }

  if (level >= 5) {
    achievements.push({
      title: "Level 5 Reached",
      icon: "🚀",
    });
  }

  if (level >= 10) {
    achievements.push({
      title: "Legend",
      icon: "👑",
    });
  }

  return achievements;
};

export const saveMatch = (result) => {
  const matches =
    JSON.parse(localStorage.getItem("codingame_matches")) || [];

  matches.unshift({
    result,
    opponent: "CodeNinja27",
    date: new Date().toLocaleString(),
  });

  localStorage.setItem(
    "codingame_matches",
    JSON.stringify(matches)
  );
};

export const getMatches = () => {
  return (
    JSON.parse(
      localStorage.getItem("codingame_matches")
    ) || []
  );
};

export const getUnlockedLevels = () => {
  return (
    JSON.parse(
      localStorage.getItem("codingame_story_levels")
    ) || [1, 2]
  );
};

export const unlockLevel = (levelId) => {
  const levels = getUnlockedLevels();

  if (!levels.includes(levelId)) {
    levels.push(levelId);

    localStorage.setItem(
      "codingame_story_levels",
      JSON.stringify(levels)
    );
  }
};

export const getUnlockedWorlds = () => {
  return (
    JSON.parse(
      localStorage.getItem("codingame_unlocked_worlds")
    ) || [1, 2]
  );
};

export const unlockWorld = (worldId) => {
  const worlds = getUnlockedWorlds();

  if (!worlds.includes(worldId)) {
    worlds.push(worldId);

    localStorage.setItem(
      "codingame_unlocked_worlds",
      JSON.stringify(worlds)
    );
  }
};

export const getSolvedProblems = () => {
  return (
    JSON.parse(
      localStorage.getItem("codingame_solved_problems")
    ) || []
  );
};

export const markProblemSolved = (problemId) => {
  const solved = getSolvedProblems();

  if (!solved.includes(problemId)) {
    solved.push(problemId);

    localStorage.setItem(
      "codingame_solved_problems",
      JSON.stringify(solved)
    );
  }
};

/* =========================
   SUBMISSION HISTORY SYSTEM
   ========================= */

export const saveSubmission = (
  problemId,
  status = "Accepted"
) => {
  const submissions =
    JSON.parse(
      localStorage.getItem("codingame_submissions")
    ) || [];

  submissions.unshift({
    problemId,
    status,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem(
    "codingame_submissions",
    JSON.stringify(submissions)
  );
};

export const getSubmissions = (
  problemId = null
) => {
  const submissions =
    JSON.parse(
      localStorage.getItem("codingame_submissions")
    ) || [];

  if (!problemId) {
    return submissions;
  }

  return submissions.filter(
    (submission) =>
      submission.problemId === problemId
  );
};

/* =========================
   STREAK SYSTEM
   ========================= */

export const updateStreak = () => {
  const today = new Date().toDateString();

  const lastVisit =
    localStorage.getItem("codingame_last_visit");

  let streak =
    Number(
      localStorage.getItem("codingame_streak")
    ) || 0;

  let bestStreak =
    Number(
      localStorage.getItem("codingame_best_streak")
    ) || 0;

  if (!lastVisit) {
    streak = 1;
  } else {
    const lastDate = new Date(lastVisit);

    const currentDate = new Date(today);

    const diffDays = Math.floor(
      (currentDate - lastDate) /
        (1000 * 60 * 60 * 24)
    );

    if (diffDays === 1) {
      streak += 1;

      if (streak === 3) {
        addXP(100);
      }

      if (streak === 7) {
        addXP(300);
      }

      if (streak === 30) {
        addXP(1000);
      }
    } else if (diffDays > 1) {
      streak = 1;
    }
  }

  if (streak > bestStreak) {
    bestStreak = streak;
  }

  localStorage.setItem(
    "codingame_streak",
    streak
  );

  localStorage.setItem(
    "codingame_best_streak",
    bestStreak
  );

  localStorage.setItem(
    "codingame_last_visit",
    today
  );
};
export const getCurrentStreak = () => {
  return (
    Number(
      localStorage.getItem("codingame_streak")
    ) || 1
  );
};

export const getBestStreak = () => {
  return (
    Number(
      localStorage.getItem(
        "codingame_best_streak"
      )
    ) || 1
  );
};

/* =========================
   ACHIEVEMENT NOTIFICATIONS
   ========================= */

export const getSeenAchievements = () => {
  return (
    JSON.parse(
      localStorage.getItem(
        "codingame_seen_achievements"
      )
    ) || []
  );
};

export const markAchievementSeen = (
  achievementTitle
) => {
  const seen = getSeenAchievements();

  if (!seen.includes(achievementTitle)) {
    seen.push(achievementTitle);

    localStorage.setItem(
      "codingame_seen_achievements",
      JSON.stringify(seen)
    );
  }
};