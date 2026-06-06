import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { addXP } from "../../utils/xpManager";

function FinalBoss() {
  const navigate = useNavigate();

  const defeatBoss = () => {
    addXP(500);

    navigate("/story-complete");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-red-500 mb-6">
          👑 Algorithm Emperor
        </h1>

        <div className="bg-zinc-900 border border-red-500 rounded-2xl p-8">
          <p className="text-zinc-300 mb-6">
            Solve the ultimate algorithm challenge to save the Coding Kingdom.
          </p>

          <button
            onClick={defeatBoss}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl"
          >
            Defeat Boss
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default FinalBoss;