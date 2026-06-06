import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

function SpaceWorld() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🚀 Space of Algorithms
        </h1>

        <p className="text-zinc-400 mb-10">
          The final world. Defeat the Algorithm Emperor.
        </p>

        <div className="bg-zinc-900 border border-cyan-500 rounded-2xl p-8">
          <div className="text-7xl mb-4">
            👑
          </div>

          <h2 className="text-3xl font-bold text-white">
            Final Boss Challenge
          </h2>

          <p className="text-zinc-400 mt-4">
            Master algorithms and claim the title of Coding Legend.
          </p>

          <button
            onClick={() => navigate("/final-boss")}
            className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-8 py-3 rounded-xl"
          >
            Start Final Battle
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default SpaceWorld;