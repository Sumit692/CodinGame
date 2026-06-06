import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Matchmaking() {
  const navigate = useNavigate();

  const [seconds, setSeconds] = useState(0);
  const [playersOnline, setPlayersOnline] = useState(1247);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onlineTimer = setInterval(() => {
      setPlayersOnline(
        1200 + Math.floor(Math.random() * 200)
      );
    }, 3000);

    return () => clearInterval(onlineTimer);
  }, []);

  useEffect(() => {
    const foundTimer = setTimeout(() => {
      navigate("/opponent-found");
    }, 5000);

    return () => clearTimeout(foundTimer);
  }, [navigate]);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          🌐 Matchmaking
        </h1>

        <div className="bg-zinc-900 border border-cyan-500 rounded-2xl p-10">
          <div className="text-7xl mb-6">🔍</div>

          <h2 className="text-3xl font-bold text-white">
            Searching for Opponent...
          </h2>

          <p className="text-zinc-400 mt-4">
            Queue Time: {seconds}s
          </p>

          <p className="text-green-400 mt-4 text-xl">
            🟢 {playersOnline} Players Online
          </p>

          <div className="mt-8">
            <div className="w-full bg-zinc-800 rounded-full h-4">
              <div
                className="bg-cyan-500 h-4 rounded-full animate-pulse"
                style={{
                  width: `${Math.min(seconds * 20, 100)}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Matchmaking;