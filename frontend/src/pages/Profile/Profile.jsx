import DashboardLayout from "../../components/layout/DashboardLayout";
import MatchHistory from "../../components/profile/MatchHistory";
import ProfileSettings from "../../components/profile/ProfileSettings";

function Profile() {
  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-10">
          👤 Profile
        </h1>

        <MatchHistory />

        <div className="mt-10">
          <ProfileSettings />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Profile;