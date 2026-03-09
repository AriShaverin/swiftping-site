"use client"

import Link from "next/link"
import "./globals.css"

export default function Home() {
  return (
    <main className="bg-[#020617] text-white">

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          <div className="text-2xl font-bold tracking-wide">
            SwiftPing
          </div>

          <div className="flex gap-8 text-sm text-gray-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <Link href="/download" className="hover:text-white transition">Download</Link>
            <Link href="/support" className="hover:text-white transition">Support</Link>
          </div>

          <Link
            href="/download"
            className="bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded-lg font-semibold shadow-[0_0_15px_rgba(34,197,94,0.5)] transition"
          >
            Get SwiftPing
          </Link>

        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">

        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070)"
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/30 via-[#020617]/80 to-[#020617]" />

        <div className="relative text-center max-w-4xl px-6">

          <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            SwiftPing
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10">
            Reduce ping. Boost FPS. Clean RAM. Built for competitive gamers.
          </p>

          <div className="flex justify-center gap-6">

            <Link
              href="/download"
              className="bg-green-500 hover:bg-green-400 text-black font-semibold px-10 py-4 rounded-xl text-lg shadow-[0_0_25px_rgba(34,197,94,0.6)] transition"
            >
              Download
            </Link>

            <a
              href="#pricing"
              className="bg-[#1e293b] hover:bg-[#334155] px-10 py-4 rounded-xl text-lg border border-gray-700 transition"
            >
              Pricing
            </a>

          </div>

        </div>

      </section>

      <section id="features" className="py-32 px-6 text-center bg-[#020617]">

        <h2 className="text-5xl font-bold mb-20 tracking-tight">
          Built For Competitive Gaming
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-[#0f172a] p-10 rounded-2xl border border-gray-800 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)] transition">
            <h3 className="text-2xl font-semibold mb-4">⚡ Lower Ping</h3>
            <p className="text-gray-400">
              Automatically optimize network routing for faster response times.
            </p>
          </div>

          <div className="bg-[#0f172a] p-10 rounded-2xl border border-gray-800 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)] transition">
            <h3 className="text-2xl font-semibold mb-4">🧠 Free RAM</h3>
            <p className="text-gray-400">
              Clean background memory and boost system responsiveness instantly.
            </p>
          </div>

          <div className="bg-[#0f172a] p-10 rounded-2xl border border-gray-800 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.35)] transition">
            <h3 className="text-2xl font-semibold mb-4">🚀 Boost FPS</h3>
            <p className="text-gray-400">
              Optimize system performance for smoother gameplay and stability.
            </p>
          </div>

        </div>

      </section>

      <section id="pricing" className="py-32 px-6 text-center bg-[#020617]">

        <h2 className="text-5xl font-bold mb-20 tracking-tight">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-[#0f172a] p-12 rounded-2xl border border-gray-800">
            <h3 className="text-2xl mb-6 font-semibold">Free</h3>
            <p className="text-4xl font-bold mb-8">£0</p>

            <ul className="text-gray-400 space-y-3 mb-10">
              <li>✓ Basic optimizer</li>
              <li>✓ RAM cleaner</li>
              <li>✓ Ping reset</li>
            </ul>

            <Link
              href="/signup"
              className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg transition"
            >
              Start Free
            </Link>

          </div>

          <div className="bg-[#0f172a] p-12 rounded-2xl border border-green-500 scale-105 shadow-[0_0_30px_rgba(34,197,94,0.45)]">
            <h3 className="text-2xl mb-6 font-semibold">Pro</h3>
            <p className="text-4xl font-bold mb-2">£10</p>
            <p className="text-gray-400 mb-8">per month</p>

            <ul className="text-gray-400 space-y-3 mb-10">
              <li>✓ Full optimizer</li>
              <li>✓ Network routing</li>
              <li>✓ FPS boost</li>
              <li>✓ Priority updates</li>
            </ul>

            <Link
              href="/checkout?plan=pro"
              className="bg-green-500 hover:bg-green-400 px-8 py-3 rounded-lg text-black font-semibold shadow-[0_0_15px_rgba(34,197,94,0.5)] transition"
            >
              Get Pro
            </Link>

          </div>

          <div className="bg-[#0f172a] p-12 rounded-2xl border border-gray-800">
            <h3 className="text-2xl mb-6 font-semibold">Lifetime</h3>
            <p className="text-4xl font-bold mb-8">£35.99</p>

            <ul className="text-gray-400 space-y-3 mb-10">
              <li>✓ Everything included</li>
              <li>✓ Lifetime access</li>
              <li>✓ Future updates</li>
            </ul>

            <Link
              href="/checkout?plan=lifetime"
              className="bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg transition"
            >
              Buy Once
            </Link>

          </div>

        </div>

      </section>

      <footer className="py-16 text-center text-gray-500 border-t border-gray-800">
        <p>© 2026 SwiftPing</p>
        <p className="mt-2 text-sm">Built for competitive gamers.</p>
      </footer>

    </main>
  )
}