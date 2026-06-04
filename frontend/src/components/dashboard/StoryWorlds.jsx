const worlds = [
  {
    name: "Forest of Variables",
    description: "Learn variables, input and output",
    level: "Level 1-5",
    emoji: "🌲",
  },
  {
    name: "Desert of Arrays",
    description: "Master arrays and loops",
    level: "Level 6-10",
    emoji: "🏜️",
  },
  {
    name: "Cyber City",
    description: "Conquer strings and recursion",
    level: "Level 11-15",
    emoji: "🌃",
  },
  {
    name: "Dragon Mountain",
    description: "Defeat graphs and dynamic programming",
    level: "Level 16-20",
    emoji: "🐉",
  },
];

function StoryWorlds() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-6">
        Story Worlds
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {worlds.map((world) => (
          <div
            key={world.name}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-500 transition cursor-pointer"
          >
            <div className="text-5xl mb-4">
              {world.emoji}
            </div>

            <h3 className="text-2xl font-bold text-white">
              {world.name}
            </h3>

            <p className="text-zinc-400 mt-2">
              {world.description}
            </p>

            <p className="text-cyan-400 mt-4">
              {world.level}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StoryWorlds;