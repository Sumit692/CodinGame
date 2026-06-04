import { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import DashboardLayout from "../../components/layout/DashboardLayout";

function Problem() {
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(`function solve() {

}`);

  const [output, setOutput] = useState("");

  const runCode = async () => {
  try {
    console.log("Sending request...");

    const response = await axios.post(
      "https://scaling-space-goldfish-7vrgpwxpjgxp2x4pw-5000.app.github.dev/api/run-code",
      {
        code,
        language,
      }
    );

    console.log(response.data);

    setOutput(response.data.output);
  } catch (error) {
    console.error(error);

    setOutput(
      error.response?.data?.message ||
      error.message ||
      "Failed to connect to backend."
    );
  }
};

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Problem Description */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h1 className="text-3xl font-bold text-white mb-4">
              Two Sum
            </h1>

            <p className="text-zinc-300">
              Given an array of integers nums and target,
              return indices of the two numbers that add up to target.
            </p>
          </div>

          {/* Editor */}
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
                <option value="javascript">JavaScript</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option>
                <option value="python">Python</option>
              </select>
            </div>

            <Editor
              height="400px"
              theme="vs-dark"
              language={language}
              value={code}
              onChange={(value) => setCode(value || "")}
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