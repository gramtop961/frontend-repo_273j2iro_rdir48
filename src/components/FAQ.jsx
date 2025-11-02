export default function FAQ() {
  const faqs = [
    {
      q: "Do I need a credit card to try the demo?",
      a: "No. You can explore the full dashboard experience without a card.",
    },
    {
      q: "How does the unique teacher URL work?",
      a: "When you subscribe, we generate a personal link (e.g., solodev.app/your-name) that you can share with students for enrollments and class access.",
    },
    {
      q: "Can I use my own domain?",
      a: "Yes, on the Pro plan and above you can connect a custom domain to your teacher portal.",
    },
    {
      q: "Is my data secure?",
      a: "We use modern encryption and follow industry best practices to keep your data safe.",
    },
  ];

  return (
    <section id="faq" className="bg-blue-50/40 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-slate-600">Answers to common questions about SoloDevLMS.</p>
        </div>
        <div className="mt-10 divide-y divide-blue-100 rounded-2xl border border-blue-100 bg-white">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-base font-semibold text-slate-900">
                {item.q}
                <span className="ml-4 rounded-md border border-blue-200 px-2 py-0.5 text-xs text-blue-700 group-open:bg-blue-600 group-open:text-white">
                  {""}
                  {"Show"}
                </span>
              </summary>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
