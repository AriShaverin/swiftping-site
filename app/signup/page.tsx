\"use\ client\"\; 
import\ {supabase}\ from\ \"../../lib/supabase\"\; 
export\ default\ function\ Signup\(\)\{ 
const\ signup\=\ async\(\)\=\
const\ email\=document.getElementById\(\"email\"\)\.value\; 
const\ pass\=document.getElementById\(\"pass\"\)\.value\; 
await\ supabase\.auth\.signUp\(\{email\:email\,password\:pass\}\)\; 
alert\(\"Account\ created\"\)\}\; 
