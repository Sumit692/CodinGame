import DashboardLayout from "../../components/layout/DashboardLayout";

function StoryComplete() {
  return (
    <DashboardLayout>
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
        <div className="text-8xl mb-6">
          🏆
        </div>

        <h1 className="text-6xl font-bold text-white mb-6">
          Story Completed
        </h1>

        <p className="text-zinc-400 text-xl">
          You defeated the Algorithm Emperor and became a Coding Legend.
        </p>

        <div className="mt-8 text-3xl">
          👑 Legendary Rank Achieved
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StoryComplete;