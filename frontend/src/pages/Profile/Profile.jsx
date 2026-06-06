import DashboardLayout from "../../components/layout/DashboardLayout";
import ProfileStats from "../../components/profile/ProfileStats";
import Badges from "../../components/profile/Badges";
import MatchHistory from "../../components/profile/MatchHistory";
import ProfileSettings from "../../components/profile/ProfileSettings";

function Profile() {
  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-10">
          👤 Profile
        </h1>

        <ProfileStats />

        <div className="mt-12">
          <Badges />
        </div>

        <div className="mt-12">
          <MatchHistory />
        </div>

        <div className="mt-12">
          <ProfileSettings />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;