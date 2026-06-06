import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../components/layout/DashboardLayout";
import problemsData from "../../data/problemsData";
import { getSolvedProblems } from "../../utils/xpManager";

function Problems() {
  const navigate = useNavigate();

  const [difficulty, setDifficulty] = useState("All");
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const solvedProblems = getSolvedProblems();

  const filteredProblems = problemsData.filter((problem) => {
    const difficultyMatch =
      difficulty === "All" ||
      problem.difficulty === difficulty;

    const categoryMatch =
      category === "All" ||
      problem.category === category;

    const searchMatch = problem.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return (
      difficultyMatch &&
      categoryMatch &&
      searchMatch
    );
  });

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-white mb-8">
          📚 Problem Set
        </h1>

        <input
          type="text"
          placeholder="Search problems..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full mb-8 bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-white outline-none"
        />

        {/* Difficulty Filters */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setDifficulty("All")}
            className="bg-cyan-500 px-4 py-2 rounded-xl text-black font-semibold"
          >
            All
          </button>

          <button
            onClick={() => setDifficulty("Easy")}
            className="bg-green-500 px-4 py-2 rounded-xl text-black font-semibold"
          >
            Easy
          </button>

          <button
            onClick={() => setDifficulty("Medium")}
            className="bg-yellow-500 px-4 py-2 rounded-xl text-black font-semibold"
          >
            Medium
          </button>

          <button
            onClick={() => setDifficulty("Hard")}
            className="bg-red-500 px-4 py-2 rounded-xl text-white font-semibold"
          >
            Hard
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <button
            onClick={() => setCategory("All")}
            className="bg-cyan-500 px-4 py-2 rounded-xl text-black font-semibold"
          >
            All Categories
          </button>

          <button
            onClick={() => setCategory("Arrays")}
            className="bg-purple-500 px-4 py-2 rounded-xl text-white font-semibold"
          >
            Arrays
          </button>

          <button
            onClick={() => setCategory("Searching")}
            className="bg-purple-500 px-4 py-2 rounded-xl text-white font-semibold"
          >
            Searching
          </button>

          <button
            onClick={() => setCategory("Sorting")}
            className="bg-purple-500 px-4 py-2 rounded-xl text-white font-semibold"
          >
            Sorting
          </button>

          <button
            onClick={() => setCategory("Graphs")}
            className="bg-purple-500 px-4 py-2 rounded-xl text-white font-semibold"
          >
            Graphs
          </button>
        </div>

        {/* Progress Card */}
        <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-white">
            📊 Progress
          </h2>

          <p className="text-zinc-400 mt-2">
            Solved {solvedProblems.length} / {problemsData.length}
            Problems
          </p>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.map((problem) => (
            <div
              key={problem.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-white">
                    {solvedProblems.includes(problem.id)
                      ? "✅ "
                      : ""}
                    {problem.title}
                  </h2>

                  <p className="text-zinc-400 mt-2">
                    {problem.category}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-cyan-400">
                    {problem.difficulty}
                  </p>

                  <p className="text-yellow-400">
                    {problem.xp} XP
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate(`/problem/${problem.id}`)}
                className="mt-5 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-xl"
              >
                Solve Problem
              </button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Problems;