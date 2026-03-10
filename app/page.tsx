import "./globals.css";
export default function Home(){
return (<main style={{background:"#020617",color:"white",minHeight:"100vh",fontFamily:"Arial"}}>
<nav style={{display:"flex",justifyContent:"space-between",padding:"20px 40px",borderBottom:"1px solid #1f2937"}}>
<div style={{fontSize:"24px",fontWeight:"bold"}}>SwiftPing</div>
<div style={{display:"flex",gap:"20px"}}>
<a href="/#features">Features</a>
<a href="/#pricing">Pricing</a>
<a href="/#download">Download</a>
<a href="/#support">Support</a>
</div>
</nav>
<section style={{padding:"140px 80px"}}>
<h1 style={{fontSize:"80px"}}>SwiftPing</h1>
<p style={{color:"#9ca3af"}}>Reduce ping. Boost FPS. Clean RAM.</p>
</section>
<section id="features" style={{padding:"100px 80px"}}>
<h2 style={{fontSize:"40px"}}>Features</h2>
<p style={{color:"#9ca3af"}}>Lower ping. Free RAM. Boost FPS.</p>
</section>
<section id="pricing" style={{padding:"100px 80px"}}>
<h2 style={{fontSize:"40px"}}>Pricing</h2>
<p>Free - œ0</p>
<p>Pro - œ10/month</p>
<p>Lifetime - œ35.99</p>
</section>
<section id="download" style={{padding:"100px 80px"}}>
<h2 style={{fontSize:"40px"}}>Download</h2>
<p>Client coming soon.</p>
</section>
<section id="support" style={{padding:"100px 80px"}}>
<h2 style={{fontSize:"40px"}}>Support</h2>
<p>support@swiftping.com</p>
</section>
</main>);
}
