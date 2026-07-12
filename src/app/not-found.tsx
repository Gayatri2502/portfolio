export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-slate-300 mb-8">Page not found</p>
        <a href="/" className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-semibold text-slate-950 hover:bg-[#00b2e3]">
          Return home
        </a>
      </div>
    </main>
  )
}
