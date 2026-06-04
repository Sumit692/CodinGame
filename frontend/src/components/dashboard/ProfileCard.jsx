function ProfileCard() {
  const currentXP = 750;
  const maxXP = 1000;

  const progress = (currentXP / maxXP) * 100;

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
            Level 7 Coder
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-between text-sm text-zinc-400 mb-2">
          <span>XP Progress</span>
          <span>{currentXP}/{maxXP}</span>
        </div>

        <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;