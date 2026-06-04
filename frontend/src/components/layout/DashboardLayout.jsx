import { NavLink } from "react-router-dom";

function DashboardLayout({ children }) {
  const navItems = [
    {
      name: "Dashboard",
      icon: "🏠",
      path: "/dashboard",
    },
    {
      name: "Story Mode",
      icon: "🌍",
      path: "/story-mode",
    },
    {
      name: "Arena",
      icon: "⚔️",
      path: "/arena",
    },
    {
      name: "Leaderboard",
      icon: "🏆",
      path: "/leaderboard",
    },
    {
      name: "Profile",
      icon: "👤",
      path: "/profile",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-zinc-800 p-6 hidden lg:block sticky top-0">
          <NavLink to="/">
            <h2 className="text-2xl font-bold mb-10 hover:text-cyan-400 transition">
              🎮 CodinGame
            </h2>
          </NavLink>

          <nav className="space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                    isActive
                      ? "bg-cyan-500 text-black font-semibold"
                      : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                  }`
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;