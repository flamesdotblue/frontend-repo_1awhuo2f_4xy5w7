import { Rocket, Play, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-slate-950 text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-500 blur-3xl" />
        <div className="absolute bottom-0 -right-16 h-96 w-96 rounded-full bg-indigo-500 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 sm:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-indigo-100 ring-1 ring-white/20">
            <Sparkles size={14} />
            Repixelize • Where AI meets your style story
          </span>

          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Unlock Effortless Style Experiments
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-indigo-100/90 sm:text-lg">
            Swap outfits, try bold hairstyles, or add that perfect accessory—without a trip to the store or a wonky edit. Repixelize precisely restyles what you want and keeps everything else untouched.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#signup"
              className="inline-flex items-center gap-2 rounded-lg bg-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-indigo-900"
            >
              <Rocket size={18} /> Get Early Access
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30 focus:ring-offset-2 focus:ring-offset-indigo-900"
            >
              <Play size={18} /> Watch Demo Video
            </a>
          </div>

          <div id="demo" className="mt-12 w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="aspect-video w-full">
              <iframe
                title="Repixelize Demo"
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
