import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import StoryMode from "../pages/StoryMode/StoryMode";
import Arena from "../pages/Arena/Arena";
import Battle from "../pages/Arena/Battle";

import Leaderboard from "../pages/Leaderboard/Leaderboard";
import Profile from "../pages/Profile/Profile";

import Problems from "../pages/Problems/Problems";
import Problem from "../pages/Problems/Problem";

import Multiplayer from "../pages/Multiplayer/Multiplayer";
import Matchmaking from "../pages/Multiplayer/Matchmaking";
import OpponentFound from "../pages/Multiplayer/OpponentFound";
import VSBattle from "../pages/Multiplayer/VSBattle";

import LevelSelect from "../pages/StoryMode/LevelSelect";
import StoryChallenge from "../pages/StoryMode/StoryChallenge";
import WorldMap from "../pages/StoryMode/WorldMap";

import DesertWorld from "../pages/StoryMode/DesertWorld";
import DesertChallenge from "../pages/StoryMode/DesertChallenge";

import MountainWorld from "../pages/StoryMode/MountainWorld";
import MountainChallenge from "../pages/StoryMode/MountainChallenge";

import SpaceWorld from "../pages/StoryMode/SpaceWorld";
import FinalBoss from "../pages/StoryMode/FinalBoss";
import StoryComplete from "../pages/StoryMode/StoryComplete";
import {
  NotificationProvider,
} from "../context/NotificationContext";

function AppRoutes() {
  return (
    <NotificationProvider>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/story-mode" element={<StoryMode />} />
        <Route path="/level-select" element={<LevelSelect />} />
        <Route path="/story-challenge" element={<StoryChallenge />} />
        <Route path="/world-map" element={<WorldMap />} />

        <Route path="/desert-world" element={<DesertWorld />} />
        <Route
          path="/desert-challenge"
          element={<DesertChallenge />}
        />

        <Route path="/mountain-world" element={<MountainWorld />} />
        <Route
          path="/mountain-challenge"
          element={<MountainChallenge />}
        />

        <Route path="/space-world" element={<SpaceWorld />} />
        <Route path="/final-boss" element={<FinalBoss />} />
        <Route
          path="/story-complete"
          element={<StoryComplete />}
        />

        <Route path="/arena" element={<Arena />} />
        <Route path="/battle" element={<Battle />} />

        <Route
          path="/multiplayer"
          element={<Multiplayer />}
        />
        <Route
          path="/matchmaking"
          element={<Matchmaking />}
        />
        <Route
          path="/opponent-found"
          element={<OpponentFound />}
        />
        <Route path="/vs-battle" element={<VSBattle />} />

        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/problems" element={<Problems />} />
        <Route path="/problem/:id" element={<Problem />} />
      </Routes>
      </BrowserRouter>
</NotificationProvider>
  );
}

export default AppRoutes;