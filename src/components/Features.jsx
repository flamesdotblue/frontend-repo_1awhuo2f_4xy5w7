import { Shield, Sparkles, Shirt, Gem, Zap } from "lucide-react";

const features = [
  {
    icon: Shirt,
    title: "Targeted Edits",
    what: "Change outfits, hair, or accessories without touching faces, backgrounds, or poses.",
    why: "Say goodbye to full-image overhauls that glitch everything up.",
  },
  {
    icon: Sparkles,
    title: "Realistic Blends",
    what: "Matches lighting, skin tones, and textures for pro-level results.",
    why: "Your edits look like they happened—not Photoshopped.",
  },
  {
    icon: Zap,
    title: "Quick & Intuitive",
    what: "One-tap selections, natural language prompts, instant previews.",
    why: "No design degree required; fun for all skill levels.",
  },
  {
    icon: Shield,
    title: "Privacy-First",
    what: "Your photos stay yours—processed securely with zero creepy data grabs.",
    why: "Edit with confidence, share with style.",
  },
  {
    icon: Gem,
    title: "Endless Styles",
    what: "From casual chic to red-carpet glam, inspired by real trends.",
    why: "Fuel your creativity without limits.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Features That Make You Shine
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Built for dreamers, creators, and anyone who loves a glow-up.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                  <f.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                <div>
                  <dt className="font-medium text-slate-700">What It Does</dt>
                  <dd className="text-slate-600">{f.what}</dd>
                </div>
                <div>
                  <dt className="font-medium text-slate-700">Why You'll Love It</dt>
                  <dd className="text-slate-600">{f.why}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-indigo-200/60 bg-indigo-50 p-6 text-center">
          <p className="text-sm text-indigo-900">
            “Finally, an app that nails jewelry adds without morphing my face. Game-changer for my Etsy shop!” — Early Tester
          </p>
          <p className="mt-2 text-sm text-indigo-900">
            “Swapped my boring tee for a killer suit in seconds. Feels like magic.” — Fiverr Client
          </p>
        </div>
      </div>
    </section>
  );
}
