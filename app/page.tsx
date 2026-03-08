export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl font-bold mb-6 text-center">
        SwiftPing
      </h1>

      <p className="text-xl text-gray-300 mb-10 text-center max-w-xl">
        Boost your gaming performance. Reduce ping, free RAM, and optimize your PC instantly.
      </p>

      <div className="flex gap-6">
        <a
          href="/download"
          className="bg-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-600"
        >
          Download
        </a>

        <a
          href="/pricing"
          className="bg-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-700"
        >
          Pricing
        </a>
      </div>

      <div className="grid grid-cols-3 gap-10 mt-24 max-w-4xl text-center">

        <div>
          <h2 className="text-2xl font-semibold mb-2">⚡ Lower Ping</h2>
          <p className="text-gray-400">
            Automatically optimize network settings for gaming.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🧠 Free RAM</h2>
          <p className="text-gray-400">
            Clean memory and background processes instantly.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🚀 Boost FPS</h2>
          <p className="text-gray-400">
            Improve system performance for smoother gameplay.
          </p>
        </div>

      </div>

    </main>
  )
}