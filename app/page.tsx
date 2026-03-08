export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen">

      {/* NAVBAR */}

      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-800">

        <h1 className="text-2xl font-bold">SwiftPing</h1>

        <div className="flex gap-8 text-gray-300">

          <a href="#">Features</a>
          <a href="#">Download</a>
          <a href="#">Pricing</a>
          <a href="#">Support</a>
          <a href="#">Login</a>

        </div>

      </nav>


      {/* HERO */}

      <section className="flex flex-col items-center text-center mt-24 px-6">

        <h2 className="text-6xl font-bold mb-6">
          Boost Your Gaming Performance
        </h2>

        <p className="text-gray-400 text-xl max-w-2xl mb-10">
          Reduce ping, free RAM, and optimize your PC instantly with SwiftPing.
        </p>

        <div className="flex gap-6">

          <a className="bg-green-500 px-10 py-4 rounded-lg text-lg hover:bg-green-600">
            Download
          </a>

          <a className="bg-gray-800 px-10 py-4 rounded-lg text-lg hover:bg-gray-700">
            Pricing
          </a>

        </div>

      </section>


      {/* FEATURES */}

      <section className="grid grid-cols-3 gap-16 max-w-6xl mx-auto mt-32 px-10 text-center">

        <div>
          <h3 className="text-2xl font-semibold mb-4">⚡ Lower Ping</h3>
          <p className="text-gray-400">
            Optimize network routing for smoother gameplay.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">🧠 Free RAM</h3>
          <p className="text-gray-400">
            Instantly clean memory and background processes.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">🚀 Boost FPS</h3>
          <p className="text-gray-400">
            Improve system performance and game stability.
          </p>
        </div>

      </section>


      {/* DOWNLOAD SECTION */}

      <section className="text-center mt-40 pb-32">

        <h2 className="text-4xl font-bold mb-6">
          Download SwiftPing Today
        </h2>

        <p className="text-gray-400 mb-10">
          Start optimizing your PC in seconds.
        </p>

        <a className="bg-green-500 px-12 py-5 rounded-xl text-xl hover:bg-green-600">
          Download for Windows
        </a>

      </section>

    </main>
  )
}