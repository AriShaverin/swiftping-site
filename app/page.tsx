export default function Home() {
return (
<main className="min-h-screen bg-black text-white">
<nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-6 border-b border-zinc-800 bg-black/80 backdrop-blur">
<div className="text-3xl font-bold">SwiftPing</div>
<div className="flex gap-8 text-zinc-300">
<a href="#features">Features</a>
<a href="#pricing">Pricing</a>
<a href="#download">Download</a>
<a href="#support">Support</a>
</div>
</nav>
<section className="px-20 py-32">
<h1 className="text-8xl font-bold mb-6 tracking-tight">SwiftPing</h1>
<p className="text-2xl text-zinc-400 max-w-3xl">Reduce ping. Boost FPS. Clean RAM. Built for competitive gaming.</p>
</section>
<section id="features" className="px-20 py-28">
<h2 className="text-5xl font-bold mb-12">Features</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-2xl border border-zinc-800 p-8 bg-zinc-950">? Lower Ping</div>
<div className="rounded-2xl border border-zinc-800 p-8 bg-zinc-950">?? RAM Cleaner</div>
<div className="rounded-2xl border border-zinc-800 p-8 bg-zinc-950">?? FPS Boost</div>
</div>
</section>
<section id="pricing" className="px-20 py-28">
<h2 className="text-5xl font-bold mb-12">Pricing</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="rounded-2xl border border-zinc-800 p-8">Free - œ0</div>
<div className="rounded-2xl border border-green-500 p-8 shadow-[0_0_30px_rgba(34,197,94,0.3)]">Pro - œ10/mo</div>
<div className="rounded-2xl border border-zinc-800 p-8">Lifetime - œ35.99</div>
</div>
</section>
<section id="download" className="px-20 py-28">
<h2 className="text-5xl font-bold mb-6">Download</h2>
<button className="px-8 py-4 rounded-xl bg-green-500 text-black font-bold hover:bg-green-400 transition">Download SwiftPing</button>
</section>
<section id="support" className="px-20 py-28">
<h2 className="text-5xl font-bold mb-6">Support</h2>
<p className="text-zinc-400">support@swiftping.com</p>
</section>
</main>
);
}
