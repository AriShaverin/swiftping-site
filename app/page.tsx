export default function Home() {
  return (
    <main className="bg-[#020617] text-white">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* background image */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000')",
          }}
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/60 to-[#020617]" />

        {/* content */}
        <div className="relative text-center max-w-3xl px-6">

          <h1 className="text-6xl font-bold mb-6 tracking-wide">
            SwiftPing
          </h1>

          <p className="text-xl text-gray-300 mb-8">
            Reduce ping. Boost FPS. Clean RAM.  
            Built for competitive gamers.
          </p>

          <div className="flex justify-center gap-6">

            <button className="bg-green-500 hover:bg-green-400 px-8 py-4 rounded-lg font-semibold transition">
              Download
            </button>

            <button className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg font-semibold transition">
              Pricing
            </button>

          </div>
        </div>
      </section>


      {/* FEATURES */}
      <section className="py-24 px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Built For Competitive Gaming
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-[#0f172a] p-10 rounded-xl border border-gray-800 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-4">⚡ Lower Ping</h3>
            <p className="text-gray-400">
              Automatically optimize network routing for faster response times.
            </p>
          </div>

          <div className="bg-[#0f172a] p-10 rounded-xl border border-gray-800 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-4">🧠 Free RAM</h3>
            <p className="text-gray-400">
              Clean background memory and improve overall system responsiveness.
            </p>
          </div>

          <div className="bg-[#0f172a] p-10 rounded-xl border border-gray-800 hover:border-green-400 transition">
            <h3 className="text-2xl font-semibold mb-4">🚀 Boost FPS</h3>
            <p className="text-gray-400">
              Optimize system performance for smoother gameplay and stability.
            </p>
          </div>

        </div>
      </section>


      {/* PRICING */}
      <section className="py-24 px-6 bg-[#020617] text-center">

        <h2 className="text-4xl font-bold mb-16">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-[#0f172a] p-10 rounded-xl border border-gray-800">
            <h3 className="text-2xl mb-4">Free</h3>
            <p className="text-3xl font-bold mb-6">$0</p>

            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Basic optimizer</li>
              <li>✓ RAM cleaner</li>
              <li>✓ Ping reset</li>
            </ul>

            <button className="bg-gray-700 px-6 py-3 rounded-lg">
              Start Free
            </button>
          </div>


          <div className="bg-[#0f172a] p-10 rounded-xl border border-green-500 scale-105">
            <h3 className="text-2xl mb-4">Pro</h3>
            <p className="text-3xl font-bold mb-6">$4.99/mo</p>

            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Full optimizer</li>
              <li>✓ Network routing</li>
              <li>✓ FPS boost</li>
              <li>✓ Priority updates</li>
            </ul>

            <button className="bg-green-500 px-6 py-3 rounded-lg">
              Get Pro
            </button>
          </div>


          <div className="bg-[#0f172a] p-10 rounded-xl border border-gray-800">
            <h3 className="text-2xl mb-4">Lifetime</h3>
            <p className="text-3xl font-bold mb-6">$25</p>

            <ul className="text-gray-400 space-y-2 mb-8">
              <li>✓ Everything included</li>
              <li>✓ Lifetime access</li>
              <li>✓ Future updates</li>
            </ul>

            <button className="bg-gray-700 px-6 py-3 rounded-lg">
              Buy Once
            </button>
          </div>

        </div>
      </section>


      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 border-t border-gray-800">

        <p>© 2026 SwiftPing</p>
        <p className="mt-2 text-sm">
          Built for competitive gamers.
        </p>

      </footer>

    </main>
  );
}