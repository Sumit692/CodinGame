import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import StoryMode from "../pages/StoryMode/StoryMode";
import Arena from "../pages/Arena/Arena";
import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Profile from "../pages/Profile/Profile";
import Problem from "../pages/Problem/Problem";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/story-mode" element={<StoryMode />} />
        <Route path="/arena" element={<Arena />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/problem" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;