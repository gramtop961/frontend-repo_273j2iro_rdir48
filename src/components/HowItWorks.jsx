import { CheckCircle, Globe, Rocket } from "lucide-react";

const steps = [
  {
    title: "Pick a plan",
    desc: "Choose the package that fits your teaching style and class size.",
    icon: Rocket,
  },
  {
    title: "Get your URL",
    desc: "We generate a unique link you can share with your students.",
    icon: Globe,
  },
  {
    title: "Launch your dashboard",
    desc: "Manage classes, students, payments and recordings in one place.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">How it works</h2>
          <p className="mt-3 text-slate-600">Start teaching in minutes — zero setup headaches.</p>
        </div>
        <ol className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
          {steps.map(({ title, desc, icon: Icon }, idx) => (
            <li key={title} className="relative rounded-2xl border border-blue-100 bg-blue-50/40 p-6">
              <div className="absolute -top-3 left-4 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">
                Step {idx + 1}
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-700 shadow">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
