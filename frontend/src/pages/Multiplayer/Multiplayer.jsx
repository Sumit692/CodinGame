import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Multiplayer() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          🌐 Multiplayer Arena
        </h1>

        <p className="text-zinc-400 mb-10">
          Compete against real players around the world.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Beginner Queue */}
          <div className="bg-zinc-900 border border-green-500 rounded-2xl p-6">
            <div className="text-6xl mb-4">🟢</div>

            <h2 className="text-2xl font-bold text-white">
              Beginner Queue
            </h2>

            <p className="text-zinc-400 mt-2">
              Levels 1 - 3
            </p>

            <button
              onClick={() => navigate("/matchmaking")}
              className="mt-6 bg-green-500 hover:bg-green-600 text-black font-semibold px-5 py-2 rounded-xl"
            >
              Join Queue
            </button>
          </div>

          {/* Intermediate Queue */}
          <div className="bg-zinc-900 border border-yellow-500 rounded-2xl p-6">
            <div className="text-6xl mb-4">🟡</div>

            <h2 className="text-2xl font-bold text-white">
              Intermediate Queue
            </h2>

            <p className="text-zinc-400 mt-2">
              Levels 4 - 7
            </p>

            <button
              onClick={() => navigate("/matchmaking")}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-xl"
            >
              Join Queue
            </button>
          </div>

          {/* Elite Queue */}
          <div className="bg-zinc-900 border border-red-500 rounded-2xl p-6">
            <div className="text-6xl mb-4">🔴</div>

            <h2 className="text-2xl font-bold text-white">
              Elite Queue
            </h2>

            <p className="text-zinc-400 mt-2">
              Levels 8+
            </p>

            <button
              onClick={() => navigate("/matchmaking")}
              className="mt-6 bg-red-500 hover:bg-red-600 text-black font-semibold px-5 py-2 rounded-xl"
            >
              Join Queue
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Multiplayer;