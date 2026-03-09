<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Signup() {

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [username,setUsername]=useState("")

async function signup(){

const {error}=await supabase.auth.signUp({
email,
password
})

if(error){
alert(error.message)
}else{
alert("Account created. Check email.")
}

}

return (

<main className="min-h-screen flex items-center justify-center bg-[#020617] text-white">

<div className="bg-[#0f172a] p-10 rounded-xl w-96">

<h1 className="text-3xl font-bold mb-6">Create Account</h1>

<input
placeholder="Username"
className="w-full mb-3 p-3 bg-[#020617] border border-gray-700 rounded"
onChange={(e)=>setUsername(e.target.value)}
/>

<input
placeholder="Email"
className="w-full mb-3 p-3 bg-[#020617] border border-gray-700 rounded"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="w-full mb-6 p-3 bg-[#020617] border border-gray-700 rounded"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={signup}
className="w-full bg-green-500 hover:bg-green-400 text-black p-3 rounded font-semibold"
>

Create Account

</button>

</div>

</main>

)

}
<div class="cf-turnstile" data-sitekey="0x4AAAAAACoWpjZWyoC-SGp8"></div>