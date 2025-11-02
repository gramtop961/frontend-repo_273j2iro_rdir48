export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-blue-50/50">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-semibold text-blue-800">SoloDevLMS</p>
            <p className="text-xs text-slate-600">
              Empowering tuition teachers to deliver world-class learning.
            </p>
          </div>
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} SoloDevLMS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
