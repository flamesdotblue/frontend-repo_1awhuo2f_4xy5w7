export default function Story() {
  return (
    <section className="bg-white py-20 text-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Why Repixelize? The Story Behind the Style
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Born from a simple wish: my mom adores flipping through fashion catalogs but hates how virtual try-ons fall flat. So, I built Repixelize—a no-fuss AI tool that turns "what if" into "wow, that's me."
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Powered by Google's Nano Banana model and crafted with Lovable's no-code magic, it's your pocket stylist for fashion fantasies, hair heroes, and accessory magic—without the sloppy edits.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-pink-50 p-6">
            <dl className="grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-slate-500">Fashion Fantasies</dt>
                <dd className="mt-1 text-slate-800">Slip into that dream dress or scarf without altering your pose or background.</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Hair Heroes</dt>
                <dd className="mt-1 text-slate-800">Test wild cuts or colors that actually suit your face.</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Accessory Magic</dt>
                <dd className="mt-1 text-slate-800">Layer on jewelry that catches the light just right—no editing disasters.</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-slate-500">Keeps It Real</dt>
                <dd className="mt-1 text-slate-800">No blurry faces, warped proportions, or cartoonish glitches. Just you—refined.</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
