import { Rocket, User } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-700">
            SoloDevLMS
          </span>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#features" className="hover:text-blue-700">
            Features
          </a>
          <a href="#pricing" className="hover:text-blue-700">
            Pricing
          </a>
          <a href="#demo" className="hover:text-blue-700">
            Demo
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-blue-200 px-3 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <a
            href="#pricing"
            className="hidden rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 md:inline-block"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
