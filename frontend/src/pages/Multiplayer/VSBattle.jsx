import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

function VSBattle() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center">
        <div className="grid md:grid-cols-3 gap-8 items-center">

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

          {/* VS */}
          <div className="text-center">
            <h1 className="text-7xl font-extrabold text-red-500 animate-pulse">
              VS
            </h1>
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

        <button
          onClick={() => navigate("/battle")}
          className="mt-12 bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-xl text-xl"
        >
          Start Match
        </button>
      </div>
    </DashboardLayout>
  );
}

export default VSBattle;