import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { addXP, unlockWorld } from "../../utils/xpManager";

function DesertChallenge() {
  const navigate = useNavigate();

  const completeLevel = () => {
    addXP(100);

    unlockWorld(3);

    alert(
      "🎉 Desert Completed! Mountain World Unlocked!"
    );

    navigate("/world-map");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">
          🏜️ Array Basics
        </h1>

        <div className="bg-zinc-900 border border-yellow-500 rounded-2xl p-6">
          <p className="text-zinc-300 mb-6">
            Find the maximum element in an array.
          </p>

          <button
            onClick={completeLevel}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl"
          >
            Complete Challenge
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DesertChallenge;