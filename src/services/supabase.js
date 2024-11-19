import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nqupsanbskhbfbglgimk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xdXBzYW5ic2toYmZiZ2xnaW1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5Nzk0NDksImV4cCI6MjA0NzU1NTQ0OX0.ATwyRW3Wv9M8ZWvtdaYRkQGWLwMTsj9BkxNCK_wbyhg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
