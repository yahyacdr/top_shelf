import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xldhfboiiqpwwfsdjbfu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZGhmYm9paXFwd3dmc2RqYmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxNzgzMTcsImV4cCI6MjAzMzc1NDMxN30.Y2ulbbwdN9Z8mVl2J0_H0mS8PtV6FTC6GKJL2uHnuk0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
