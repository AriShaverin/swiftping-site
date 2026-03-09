import fs from "fs"
import path from "path"

export async function POST(req:Request){

  const {username,password}=await req.json()

  const file=path.join(process.cwd(),"users.json")

  let users:any[]=[]

  if(fs.existsSync(file)){
    users=JSON.parse(fs.readFileSync(file,"utf8"))
  }

  users.push({username,password})

  fs.writeFileSync(file,JSON.stringify(users))

  return new Response("ok")
}