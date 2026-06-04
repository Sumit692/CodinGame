import React from "react";

const Button = React.forwardRef(
  (
    {
      variant = "default",
      size = "default",
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-white text-black hover:bg-gray-100",
      secondary: "bg-gray-800 text-white hover:bg-gray-700",
      ghost: "hover:bg-gray-800/50 text-white",
      gradient:
        "bg-gradient-to-b from-white via-white/95 to-white/60 text-black hover:scale-105 active:scale-95",
    };

    const sizes = {
      default: "h-10 px-4 py-2 text-sm",
      sm: "h-10 px-5 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

const ArrowRight = ({ className = "", size = 16 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const Menu = ({ className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = ({ className = "", size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Navigation = React.memo(() => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b border-gray-800/50 bg-black/80 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-white">
            CodinGame
          </div>

          <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Worlds
            </a>

            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Arena
            </a>

            <a href="#" className="text-sm text-white/60 hover:text-white transition-colors">
              Leaderboard
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button type="button" variant="ghost" size="sm">
              Login
            </Button>

            <Button type="button" variant="default" size="sm">
              Register
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800/50">
          <div className="px-6 py-4 flex flex-col gap-4">
            <a href="#" className="text-white/60 hover:text-white">
              Story Mode
            </a>

            <a href="#" className="text-white/60 hover:text-white">
              Battles
            </a>

            <a href="#" className="text-white/60 hover:text-white">
              Leaderboard
            </a>
          </div>
        </div>
      )}
    </header>
  );
});

Navigation.displayName = "Navigation";

const Hero = React.memo(() => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 bg-black text-white">
      <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50">
        <span className="text-xs text-gray-400">
          New World Available
        </span>

        <a
          href="#"
          className="flex items-center gap-1 text-xs text-gray-400 hover:text-white"
        >
          Explore
          <ArrowRight size={12} />
        </a>
      </div>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center max-w-4xl leading-tight">
        Conquer Coding
        <br />
        One Battle At A Time
      </h1>

      <p className="text-gray-400 text-center max-w-2xl mt-6 text-lg">
       Master programming through epic quests,
multiplayer coding duels, boss battles,
and real-world coding challenges.
      </p>

      <div className="mt-10 flex gap-4">
        <Button variant="gradient" size="lg">
          Start Adventure
        </Button>

        <Button variant="secondary" size="lg">
          Enter Arena
        </Button>
      </div>

      <div className="mt-20 w-full max-w-5xl">
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
          alt="Coding Dashboard"
          className="rounded-xl shadow-2xl w-full"
        />
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default function Component() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
    </main>
  );
}