import { BookOpen, Calendar, CreditCard, Link as LinkIcon, Users, Video, BarChart } from "lucide-react";

const features = [
  {
    title: "Class management",
    desc: "Schedule, reschedule, and automate reminders for every class.",
    icon: Calendar,
  },
  {
    title: "Student roster",
    desc: "Add students, track attendance, and monitor progress.",
    icon: Users,
  },
  {
    title: "Integrated payments",
    desc: "Accept payments securely and reconcile dues instantly.",
    icon: CreditCard,
  },
  {
    title: "Recordings library",
    desc: "Upload HD recordings and control access per class.",
    icon: Video,
  },
  {
    title: "Unique teacher URL",
    desc: "Share your personal link for enrollments and classes.",
    icon: LinkIcon,
  },
  {
    title: "Insights & analytics",
    desc: "Visualize revenue, attendance, and growth trends.",
    icon: BarChart,
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-blue-50/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Everything you need to run your classes
          </h2>
          <p className="mt-3 text-slate-600">
            SoloDevLMS gives tuition teachers a complete toolkit to teach, get paid, and grow.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
