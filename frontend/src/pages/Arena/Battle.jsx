import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";

import {
  getXP,
  addXP,
  getLevel,
  getXPProgress,
  addWin,
  saveMatch,
} from "../../utils/xpManager";
function Battle() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [aiProgress, setAiProgress] = useState(0);
  const [battleEnded, setBattleEnded] = useState(false);
  const [result, setResult] = useState("");
 const [xp, setXP] = useState(getXP());
const [level, setLevel] = useState(getLevel());
  useEffect(() => {
    if (battleEnded) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);

          setBattleEnded(true);

          if (aiProgress >= 100) {
            setResult("❌ You Lost");
          } else {
            setResult("🏆 You Won");
          }

          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [battleEnded, aiProgress]);

  useEffect(() => {
    if (battleEnded) return;

    const aiTimer = setInterval(() => {
      setAiProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 10);

        if (next >= 100) {
          clearInterval(aiTimer);
          setBattleEnded(true);
          setResult("❌ AI Finished First");
          return 100;
        }

        return next;
      });
    }, 2000);

    return () => clearInterval(aiTimer);
  }, [battleEnded]);

  const winBattle = () => {
  if (!battleEnded) {
    const newXP = addXP(100);

    addWin();

    saveMatch("Victory");

    setXP(newXP);

    setLevel(getLevel());

    setBattleEnded(true);

    setResult("🏆 Victory +100 XP");
  }
};
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-8">
          ⚔️ Battle Arena
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Player */}
          <div className="bg-zinc-900 border border-cyan-500 rounded-2xl p-6">
            <div className="text-6xl mb-4">🧑‍💻</div>

            <h2 className="text-3xl font-bold text-white">
              You
            </h2>

            <div className="mt-4">
  <p className="text-cyan-400">
    Level {level}
  </p>

  <p className="text-zinc-400 mt-1">
    XP: {xp}
  </p>

  <div className="w-full bg-zinc-800 rounded-full h-3 mt-3">
    <div
      className="bg-cyan-500 h-3 rounded-full"
      style={{
        width: `${getXPProgress()}%`,
      }}
    />
  </div>
</div>
          </div>

          {/* AI */}
          <div className="bg-zinc-900 border border-red-500 rounded-2xl p-6">
            <div className="text-6xl mb-4">🤖</div>

            <h2 className="text-3xl font-bold text-white">
              Rookie Bot
            </h2>

            <p className="text-red-400 mt-2">
              AI Progress: {aiProgress}%
            </p>

            <div className="w-full bg-zinc-800 rounded-full h-3 mt-4">
              <div
                className="bg-red-500 h-3 rounded-full"
                style={{ width: `${aiProgress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Challenge
          </h2>

          <p className="text-zinc-300 mb-6">
            Write a function that returns the sum of two numbers.
          </p>

          <div className="text-4xl font-bold text-yellow-400 mb-6">
            ⏱️ {timeLeft}s
          </div>

          {!battleEnded && (
            <button
              onClick={winBattle}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl"
            >
              Submit Solution
            </button>
          )}

          {battleEnded && (
            <div className="mt-6 text-3xl font-bold text-white">
              {result}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Battle;