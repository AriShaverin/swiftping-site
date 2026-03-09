"use client"

import Link from "next/link"

export default function Download() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center">

      <div className="text-center max-w-xl">

        <h1 className="text-5xl font-bold mb-6">Download SwiftPing</h1>

        <p className="text-gray-400 mb-10">
          Get the latest version of SwiftPing for Windows.
        </p>

        <a
          href="/swiftping-installer.exe"
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-10 py-4 rounded-xl text-lg shadow-[0_0_25px_rgba(34,197,94,0.6)] transition"
        >
          Download Installer
        </a>

        <div className="mt-8">
          <Link href="/" className="text-gray-400 hover:text-white">
            Back to home
          </Link>
        </div>

      </div>

    </main>
  )
}
