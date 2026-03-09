import fs from "fs"
import path from "path"

export async function POST(req:Request){

  const {username,password}=await req.json()

  const file=path.join(process.cwd(),"users.json")

  if(!fs.existsSync(file)){
    return new Response("fail",{status:401})
  }

  const users=JSON.parse(fs.readFileSync(file,"utf8"))

  const user=users.find((u:any)=>u.username===username && u.password===password)

  if(user){
    return new Response("ok")
  }

  return new Response("fail",{status:401})
}