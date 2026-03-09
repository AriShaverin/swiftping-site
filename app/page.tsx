import Link from "next/link";
export default function Home(){
return (
<main style={{background:"#020617",color:"white",minHeight:"100vh",padding:"60px",fontFamily:"Arial"}}>
<h1 style={{fontSize:"60px",marginBottom:"20px"}}>SwiftPing</h1>
<p style={{fontSize:"20px",color:"#9ca3af"}}>Reduce ping. Boost FPS. Clean RAM.</p>
<div style={{marginTop:"40px"}}>
<Link href="/download">Download</Link>
<br/>
<Link href="/support">Support</Link>
<br/>
<Link href="/signup">Signup</Link>
</div>
</main>
);
}
