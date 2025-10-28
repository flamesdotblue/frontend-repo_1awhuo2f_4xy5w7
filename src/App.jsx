import Hero from "./components/Hero";
import Story from "./components/Story";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <Story />
      <HowItWorks />
      <Features />

      <section id="signup" className="bg-gradient-to-br from-indigo-900 to-indigo-950 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to Repixelize Your World?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-indigo-100/90">
            Join the waitlist for our public launch—early birds get exclusive styling packs and beta perks. Pricing starts at an affordable rate with details coming soon.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-indigo-200/70 focus:border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Sign Up Now
            </button>
          </form>
          <div className="mt-6 text-xs text-indigo-200/80">
            By signing up you agree to our <a href="#" className="underline">Privacy Policy</a>.
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-8 text-slate-300">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row">
          <div>© 2025 Repixelize. All rights reserved.</div>
          <nav className="flex flex-wrap items-center gap-4">
            <a className="hover:text-white" href="#">Contact Us</a>
            <a className="hover:text-white" href="#">FAQ</a>
            <a className="hover:text-white" href="#">Privacy Policy</a>
            <a className="hover:text-white" href="#">See Before & After Gallery</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
