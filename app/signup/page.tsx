"use client"

export default function Signup() {

  async function signup(e:any){
    e.preventDefault()

    const username=e.target.username.value
    const password=e.target.password.value

    const res=await fetch("/api/signup",{
      method:"POST",
      body:JSON.stringify({username,password})
    })

    if(res.ok){
      alert("Account created")
      window.location.href="/login"
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white flex items-center justify-center">

      <form onSubmit={signup} className="bg-[#0f172a] p-10 rounded-xl w-96">

        <h1 className="text-3xl font-bold mb-6">Create Account</h1>

        <input
          name="username"
          placeholder="Username"
          className="w-full mb-4 p-3 bg-[#020617] border border-gray-700 rounded"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 bg-[#020617] border border-gray-700 rounded"
        />

        <button className="w-full bg-green-500 hover:bg-green-400 text-black p-3 rounded font-semibold">
          Sign Up
        </button>

      </form>

    </main>
  )
}