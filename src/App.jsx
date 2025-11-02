import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <section id="demo-section" className="bg-blue-50 py-16">
          <div className="mx-auto max-w-5xl px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Try the live demo</h2>
            <p className="mx-auto mt-2 max-w-2xl text-slate-600">
              Experience the teacher dashboard: create a class, add students, share your
              unique URL, accept payments, and publish recordings — all in minutes.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3">
              <a
                href="#pricing"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700"
              >
                Start Free Demo
              </a>
              <a
                href="#pricing"
                className="rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-50"
              >
                Compare Plans
              </a>
            </div>
          </div>
        </section>
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
