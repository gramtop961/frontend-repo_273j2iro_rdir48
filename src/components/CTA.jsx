export default function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Give your students a world‑class learning experience
            </h2>
            <p className="mt-3 text-blue-100">
              Start with a demo, pick a plan later. Your unique teacher URL is ready in minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#pricing"
                className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow hover:bg-blue-50"
              >
                Start Free Demo
              </a>
              <a
                href="#pricing"
                className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Compare Plans
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-blue-100">Unique URL</p>
                <p className="mt-1 font-semibold">solodev.app/your-name</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-blue-100">Students</p>
                <p className="mt-1 font-semibold">Unlimited</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-blue-100">Classes</p>
                <p className="mt-1 font-semibold">Unlimited</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-blue-100">Payments</p>
                <p className="mt-1 font-semibold">Integrated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
