import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { addXP, unlockLevel } from "../../utils/xpManager";

function StoryChallenge() {
  const navigate = useNavigate();

  const completeLevel = () => {
    addXP(50);

    unlockLevel(3);

    alert("🎉 Level Complete! +50 XP");

    navigate("/level-select");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-6">
          🌲 Level 1 – Hello World
        </h1>

        <div className="bg-zinc-900 border border-cyan-500 rounded-2xl p-6">
          <p className="text-zinc-300 mb-6">
            Write a program that prints:
          </p>

          <div className="bg-black p-4 rounded-xl text-green-400 mb-6">
            Hello World
          </div>

          <button
            onClick={completeLevel}
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-xl"
          >
            Complete Level
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StoryChallenge;