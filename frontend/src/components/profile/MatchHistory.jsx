import { getMatches } from "../../utils/xpManager";

function MatchHistory() {
  const matches = getMatches();

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">
        📜 Match History
      </h2>

      {matches.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <p className="text-zinc-400">
            No matches played yet.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4"
            >
              <p className="text-green-400 font-bold">
                {match.result}
              </p>

              <p className="text-white">
                Opponent: {match.opponent}
              </p>

              <p className="text-zinc-400 text-sm">
                {match.date}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MatchHistory;