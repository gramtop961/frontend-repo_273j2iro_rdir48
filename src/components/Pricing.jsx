import { CreditCard, Link as LinkIcon, Shield, Users } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$9",
    period: "/month",
    description: "Perfect for getting started with a small batch of students.",
    features: [
      "Up to 50 students",
      "5 active classes",
      "Payment tracking",
      "Basic recordings",
      "Unique teacher URL",
    ],
    cta: "Start Free Demo",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description:
      "For growing tutors who need automation and premium experiences.",
    features: [
      "Unlimited students",
      "Unlimited classes",
      "Integrated payments",
      "HD recordings",
      "Custom domain for your URL",
      "Priority support",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Academy",
    price: "$99",
    period: "/month",
    description: "For institutions with multiple teachers and advanced needs.",
    features: [
      "Everything in Pro",
      "Team dashboards",
      "Payouts & invoices",
      "API access",
      "SLA & onboarding",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-slate-600">
            Choose a plan that fits your classroom. Try the demo any time — no credit
            card required.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.popular ? "border-blue-300" : "border-slate-200"
              } bg-white p-6 shadow-sm`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                  Most popular
                </span>
              )}
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-slate-900">{plan.name}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-blue-700">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-500">{plan.period}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm ${
                  plan.popular
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border border-blue-200 text-blue-700 hover:bg-blue-50"
                }`}
              >
                {plan.name === "Starter" ? (
                  <>
                    <CreditCard className="h-4 w-4" /> {plan.cta}
                  </>
                ) : plan.name === "Pro" ? (
                  <>
                    <Shield className="h-4 w-4" /> {plan.cta}
                  </>
                ) : (
                  <>
                    <Users className="h-4 w-4" /> {plan.cta}
                  </>
                )}
              </button>
              <div className="mt-4 flex items-center gap-2 rounded-md bg-blue-50 p-3 text-xs text-blue-800">
                <LinkIcon className="h-4 w-4" />
                Your unique URL looks like: solodev.app/your-name
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
