import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://kksdmgbkofysjrwblupf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtrc2RtZ2Jrb2Z5c2pyd2JsdXBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMjk5OTYsImV4cCI6MjAxNzcwNTk5Nn0._8TW0ZhauEkelPHirLBh_87l1sB-4Hf3qYGmZMWaT-8"; // process.env.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey);
