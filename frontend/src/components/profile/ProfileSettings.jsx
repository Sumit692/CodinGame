import { useEffect, useState } from "react";

function ProfileSettings() {
  const [notifications, setNotifications] =
    useState(true);

  const [language, setLanguage] =
    useState("javascript");

  const [themeColor, setThemeColor] =
    useState("cyan");

  useEffect(() => {
    const savedNotifications =
      localStorage.getItem(
        "codingame_notifications"
      );

    const savedLanguage =
      localStorage.getItem(
        "codingame_language"
      );

    const savedTheme =
      localStorage.getItem(
        "codingame_theme"
      );

    if (savedNotifications !== null) {
      setNotifications(
        savedNotifications === "true"
      );
    }

    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    if (savedTheme) {
      setThemeColor(savedTheme);
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      "codingame_notifications",
      notifications
    );

    localStorage.setItem(
      "codingame_language",
      language
    );

    localStorage.setItem(
      "codingame_theme",
      themeColor
    );

    alert("Settings Saved!");
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <h2 className="text-3xl font-bold text-white mb-6">
        ⚙️ Settings
      </h2>

      <div className="space-y-6">
        <div>
          <label className="text-white font-semibold block mb-2">
            Notifications
          </label>

          <input
            type="checkbox"
            checked={notifications}
            onChange={() =>
              setNotifications(
                !notifications
              )
            }
            className="h-5 w-5"
          />
        </div>

        <div>
          <label className="text-white font-semibold block mb-2">
            Preferred Language
          </label>

          <select
            value={language}
            onChange={(e) =>
              setLanguage(e.target.value)
            }
            className="bg-black border border-zinc-700 rounded-lg px-3 py-2 text-white w-full"
          >
            <option value="javascript">
              JavaScript
            </option>
            <option value="cpp">C++
            </option>
            <option value="java">Java</option>
            <option value="python">
              Python
            </option>
          </select>
        </div>

        <div>
          <label className="text-white font-semibold block mb-2">
            Theme Color
          </label>

          <select
            value={themeColor}
            onChange={(e) =>
              setThemeColor(e.target.value)
            }
            className="bg-black border border-zinc-700 rounded-lg px-3 py-2 text-white w-full"
          >
            <option value="cyan">Cyan</option>
            <option value="purple">
              Purple
            </option>
            <option value="green">
              Green
            </option>
            <option value="orange">
              Orange
            </option>
          </select>
        </div>

        <button
          onClick={saveSettings}
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-xl"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}

export default ProfileSettings;