"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#020617]/70 border-b border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold text-white">
          SwiftPing
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">

          <Link href="/features" className="hover:text-white transition">
            Features
          </Link>

          <Link href="/pricing" className="hover:text-white transition">
            Pricing
          </Link>

          <Link href="/download" className="hover:text-white transition">
            Download
          </Link>

          <Link href="/support" className="hover:text-white transition">
            Support
          </Link>

        </div>

        <div className="flex gap-4">

          <Link
            href="/login"
            className="px-5 py-2 rounded-lg border border-gray-600 hover:border-gray-400"
          >
            Login
          </Link>

          <Link
            href="/download"
            className="bg-green-500 px-5 py-2 rounded-lg font-semibold hover:bg-green-400"
          >
            Get SwiftPing
          </Link>

        </div>

      </div>

    </nav>
  )
}