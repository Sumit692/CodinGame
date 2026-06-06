import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { addXP, unlockWorld } from "../../utils/xpManager";

function MountainChallenge() {
  const navigate = useNavigate();

  const completeChallenge = () => {
    addXP(200);

    unlockWorld(4);

    alert(
      "🏆 Mountain Cleared! Space World Unlocked!"
    );

    navigate("/world-map");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">
          🏔️ Binary Search Challenge
        </h1>

        <div className="bg-zinc-900 border border-purple-500 rounded-2xl p-6">
          <p className="text-zinc-300 mb-6">
            Implement Binary Search on a sorted array.
          </p>

          <button
            onClick={completeChallenge}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl"
          >
            Complete Challenge
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default MountainChallenge;