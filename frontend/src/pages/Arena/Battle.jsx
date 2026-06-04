import DashboardLayout from "../../components/layout/DashboardLayout";

function Battle() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-10">
          ⚔️ Battle Arena
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Player */}
          <div className="bg-zinc-900 border border-cyan-500 rounded-2xl p-6">
            <div className="text-6xl mb-4">🧑‍💻</div>

            <h2 className="text-3xl font-bold text-white">
              You
            </h2>

            <p className="text-zinc-400 mt-2">
              Level 8 Coder
            </p>

            <div className="mt-6">
              <p className="text-cyan-400">
                XP: 1250
              </p>
            </div>
          </div>

          {/* AI */}
          <div className="bg-zinc-900 border border-red-500 rounded-2xl p-6">
            <div className="text-6xl mb-4">🤖</div>

            <h2 className="text-3xl font-bold text-white">
              Rookie Bot
            </h2>

            <p className="text-zinc-400 mt-2">
              AI Opponent
            </p>

            <div className="mt-6">
              <p className="text-red-400">
                Difficulty: Easy
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white mb-4">
            Challenge
          </h2>

          <p className="text-zinc-300">
            Write a function that returns the sum of two numbers.
          </p>

          <button className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl">
            Start Battle
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Battle;