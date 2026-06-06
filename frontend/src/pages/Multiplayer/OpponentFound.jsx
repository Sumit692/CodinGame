import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

function OpponentFound() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center text-white mb-10">
          ⚔️ Opponent Found
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Player */}
          <div className="bg-zinc-900 border border-cyan-500 rounded-2xl p-8 text-center">
            <div className="text-7xl mb-4">🧑‍💻</div>

            <h2 className="text-3xl font-bold text-white">
              You
            </h2>

            <p className="text-cyan-400 mt-2">
              Level 4
            </p>
          </div>

          {/* Opponent */}
          <div className="bg-zinc-900 border border-red-500 rounded-2xl p-8 text-center">
            <div className="text-7xl mb-4">🎯</div>

            <h2 className="text-3xl font-bold text-white">
              CodeNinja27
            </h2>

            <p className="text-red-400 mt-2">
              Level 5
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/vs-battle")}
            className="bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-xl text-xl"
          >
            Accept Match
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default OpponentFound;