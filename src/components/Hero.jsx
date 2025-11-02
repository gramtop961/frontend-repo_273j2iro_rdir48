import { Play, Link as LinkIcon, Shield, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold text-blue-700 shadow-sm">
            Built for tuition teachers worldwide
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Run your classes like a pro with SoloDevLMS
          </h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            An all‑in‑one LMS to manage students, payments, classes and recordings. Choose a plan, try a live demo, and get your unique URL to share with students instantly.
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
            >
              View Pricing
            </a>
            <a
              id="demo"
              href="#demo-section"
              className="inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
            >
              <Play className="h-4 w-4" /> Try Demo
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-blue-600" /> Student portals
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-blue-600" /> Secure payments
            </div>
            <div className="col-span-2 flex items-center gap-2">
              <LinkIcon className="h-4 w-4 text-blue-600" /> Unique URL for every teacher
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-blue-100 bg-white p-4 shadow-lg">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-semibold text-slate-500">Dashboard preview</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-3">
                <button className="w-full rounded-md bg-blue-50 px-3 py-2 text-left text-sm font-semibold text-blue-700">
                  Classes
                </button>
                <button className="w-full rounded-md px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50">
                  Students
                </button>
                <button className="w-full rounded-md px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50">
                  Payments
                </button>
                <button className="w-full rounded-md px-3 py-2 text-left text-sm text-slate-600 hover:bg-slate-50">
                  Recordings
                </button>
              </div>
              <div className="col-span-2">
                <div className="rounded-lg border border-slate-100 bg-slate-50 p-3 text-sm text-slate-700">
                  <p className="font-semibold">Upcoming Algebra Class</p>
                  <p className="mt-1 text-slate-600">Tue, 4:00 PM • 45 mins • 18 students</p>
                  <div className="mt-3 flex gap-2">
                    <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                      Share URL
                    </span>
                    <span className="rounded bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                      Start Class
                    </span>
                    <span className="rounded bg-slate-200 px-2 py-1 text-xs font-medium text-slate-800">
                      Upload Recording
                    </span>
                  </div>
                </div>
                <div className="mt-3 rounded-lg border border-slate-100 bg-white p-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-slate-700">Monthly revenue</span>
                    <span className="text-blue-700">$1,240</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-slate-100">
                    <div className="h-2 w-2/3 rounded-full bg-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-10 -top-10 -z-0 h-40 w-40 rounded-full bg-blue-200 opacity-30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
