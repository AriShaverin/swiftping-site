import {createClient} from '@supabase/supabase-js'; 
const supabaseUrl="https://btcyxisfyszxpwgcxxfd.supabase.co"; 
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0Y3l4aXNmeXN6eHB3Z2N4eGZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwNjAyNzUsImV4cCI6MjA4ODYzNjI3NX0._SoWpdA1qUZ59n8o3g5DbnZpEGYjk3E8ksMxv07Tg0"; 
export const supabase=createClient(supabaseUrl,supabaseKey); 
