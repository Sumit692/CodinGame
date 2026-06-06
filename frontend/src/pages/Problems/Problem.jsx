import problemsData from "../../data/problemsData";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Editor from "@monaco-editor/react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  addXP,
  markProblemSolved,
  saveSubmission,
  getSubmissions,
} from "../../utils/xpManager";

function Problem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentProblem =
    problemsData.find(
      (problem) => problem.id === Number(id)
    ) || problemsData[0];

  const currentIndex = problemsData.findIndex(
    (problem) => problem.id === Number(id)
  );

  const previousProblem =
    problemsData[currentIndex - 1];

  const nextProblem =
    problemsData[currentIndex + 1];

  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(
    currentProblem.starterCode
  );

  const [output, setOutput] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);

  const [showHint, setShowHint] = useState(false);

  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    setCode(currentProblem.starterCode);
    setOutput("");
    setShowHint(false);

    setSubmissions(
      getSubmissions(currentProblem.id)
    );
  }, [currentProblem]);

  const runCode = async () => {
    try {
      const response = await axios.post(
        "https://scaling-space-goldfish-7vrgpwxpjgxp2x4pw-5000.app.github.dev/api/run-code",
        {
          code,
          language,
        }
      );

      setOutput(response.data.output);

      markProblemSolved(currentProblem.id);

      addXP(currentProblem.xp);

      saveSubmission(
        currentProblem.id,
        "Accepted"
      );

      setSubmissions(
        getSubmissions(currentProblem.id)
      );

      setEarnedXP(currentProblem.xp);

      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } catch (error) {
      setOutput(
        error.response?.data?.message ||
          error.message ||
          "Failed to connect to backend."
      );
    }
  };

  const difficultyColor =
    currentProblem.difficulty === "Easy"
      ? "bg-green-500"
      : currentProblem.difficulty === "Medium"
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-6 py-10">
        {showPopup && (
          <div className="fixed top-8 right-8 z-50 bg-green-500 text-black px-6 py-4 rounded-2xl shadow-xl">
            <h2 className="font-bold text-lg">
              🎉 Problem Solved!
            </h2>

            <p>
              +{earnedXP} XP Earned
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Problem Info */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h1 className="text-3xl font-bold text-white mb-4">
                {currentProblem.title}
              </h1>

              <p className="text-zinc-300">
                {currentProblem.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-5">
                <span
                  className={`${difficultyColor} text-black font-bold px-4 py-1 rounded-full`}
                >
                  {currentProblem.difficulty}
                </span>

                <span className="bg-cyan-500 text-black font-bold px-4 py-1 rounded-full">
                  {currentProblem.xp} XP
                </span>
              </div>

              <div className="flex gap-4 mt-8">
                {previousProblem && (
                  <button
                    onClick={() =>
                      navigate(
                        `/problem/${previousProblem.id}`
                      )
                    }
                    className="bg-zinc-700 hover:bg-zinc-600 text-white px-5 py-2 rounded-xl"
                  >
                    ⬅ Previous
                  </button>
                )}

                {nextProblem && (
                  <button
                    onClick={() =>
                      navigate(
                        `/problem/${nextProblem.id}`
                      )
                    }
                    className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-xl"
                  >
                    Next ➡
                  </button>
                )}
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                📈 Problem Statistics
              </h2>

              <div className="space-y-2 text-zinc-300">
                <p>
                  Acceptance Rate:
                  <span className="text-green-400 ml-2">
                    {currentProblem.acceptanceRate}
                  </span>
                </p>

                <p>
                  XP Reward:
                  <span className="text-yellow-400 ml-2">
                    {currentProblem.xp}
                  </span>
                </p>

                <p>
                  Total Submissions:
                  <span className="text-cyan-400 ml-2">
                    {submissions.length}
                  </span>
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Tags
              </h2>

              <div className="flex flex-wrap gap-3">
                {currentProblem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Example Input */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">
                Example Input
              </h2>

              <pre className="text-cyan-400 whitespace-pre-wrap">
                {currentProblem.exampleInput}
              </pre>
            </div>

            {/* Example Output */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">
                Example Output
              </h2>

              <pre className="text-green-400 whitespace-pre-wrap">
                {currentProblem.exampleOutput}
              </pre>
            </div>

            {/* Constraints */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-3">
                Constraints
              </h2>

              <ul className="list-disc pl-5 text-zinc-300 space-y-2">
                {currentProblem.constraints.map(
                  (constraint, index) => (
                    <li key={index}>
                      {constraint}
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Hint */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <button
                onClick={() =>
                  setShowHint(!showHint)
                }
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-2 rounded-xl"
              >
                {showHint
                  ? "Hide Hint"
                  : "Show Hint"}
              </button>

              {showHint && (
                <div className="mt-4 p-4 bg-zinc-800 rounded-xl">
                  <p className="text-yellow-300">
                    💡 {currentProblem.hint}
                  </p>
                </div>
              )}
            </div>

            {/* Submission History */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                📜 Submission History
              </h2>

              {submissions.length === 0 ? (
                <p className="text-zinc-400">
                  No submissions yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {submissions.map(
                    (submission, index) => (
                      <div
                        key={index}
                        className="bg-zinc-800 rounded-xl p-3"
                      >
                        <p className="text-green-400">
                          {submission.status}
                        </p>

                        <p className="text-zinc-400 text-sm">
                          {submission.date}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">
                Code Editor
              </h2>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-black border border-zinc-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="javascript">
                  JavaScript
                </option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="python">
                  Python
                </option>
              </select>
            </div>

            <Editor
              height="400px"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(value) =>
                setCode(value || "")
              }
            />

            <button
              onClick={runCode}
              className="mt-4 bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-5 py-2 rounded-xl"
            >
              Run Code
            </button>

            <div className="mt-6 bg-black rounded-xl p-4 border border-zinc-800">
              <h3 className="text-white font-semibold mb-2">
                Output
              </h3>

              <pre className="text-green-400 whitespace-pre-wrap">
                {output}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Problem;