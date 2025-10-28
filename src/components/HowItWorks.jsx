import { Image, Scissors, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: Image,
    title: "Upload Your Photo",
    desc: "Drop in a selfie, portrait, or full-body shot.",
  },
  {
    icon: Scissors,
    title: "Pick Your Pivot",
    desc: "Tell us what to tweak: 'Swap to a red evening gown' or 'Add hoop earrings.' Select the exact spot—We handle the rest.",
  },
  {
    icon: Sparkles,
    title: "AI Does the Heavy Lifting",
    desc: "Precision restyling blends with lighting, shadows, and details for seamless results.",
  },
  {
    icon: Download,
    title: "Download & Dazzle",
    desc: "Get your polished photo in seconds. Share, save, or iterate—endlessly.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Simple as a Swipe
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
          Perfect for creators, social pros, and weekend warriors experimenting with looks.
        </p>

        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <li
              key={s.title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {idx + 1}. {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
