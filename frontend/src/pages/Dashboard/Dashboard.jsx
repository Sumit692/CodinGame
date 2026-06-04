import StatsCards from "../../components/dashboard/StatsCards";
import ProfileCard from "../../components/dashboard/ProfileCard";
import AchievementCards from "../../components/dashboard/AchievementCards";
import StoryWorlds from "../../components/dashboard/StoryWorlds";
import DailyChallenges from "../../components/dashboard/DailyChallenges";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-10">
          Dashboard
        </h1>

        <StatsCards />

        <div className="mt-16">
          <ProfileCard />
        </div>

        <div className="mt-16">
          <AchievementCards />
        </div>

        <div className="mt-16">
          <StoryWorlds />
        </div>

        <div className="mt-16">
          <DailyChallenges />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;