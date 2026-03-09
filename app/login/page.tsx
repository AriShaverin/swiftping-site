"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function Login(){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

async function login(){

const {error}=await supabase.auth.signInWithPassword({
email,
password
})

if(error){
alert("Login failed")
}else{
window.location.href="/download"
}

}

return(

<main className="min-h-screen flex items-center justify-center bg-[#020617] text-white">

<div className="bg-[#0f172a] p-10 rounded-xl w-96">

<h1 className="text-3xl font-bold mb-6">Login</h1>

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
onClick={login}
className="w-full bg-green-500 hover:bg-green-400 text-black p-3 rounded font-semibold"
>

Login

</button>

</div>

</main>

)

}