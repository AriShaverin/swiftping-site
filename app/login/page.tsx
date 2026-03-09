\"use\ client\"\; 
import\ {supabase}\ from\ \"../../lib/supabase\"\; 
export\ default\ function\ Login\(\)\{ 
const\ login\=\ async\(\)\=\
const\ email\=document.getElementById\(\"email\"\)\.value\; 
const\ pass\=document.getElementById\(\"pass\"\)\.value\; 
await\ supabase\.auth\.signInWithPassword\(\{email\:email\,password\:pass\}\)\; 
alert\(\"Logged\ in\"\)\}\; 
