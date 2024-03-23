import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jhfqkropquhzaljftokj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpoZnFrcm9wcXVoemFsamZ0b2tqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxMzc2OTksImV4cCI6MjAyNDcxMzY5OX0.aQvWr2ThU4DSGcgLXuFYLVgpkTuvOA238E29XPLQpQw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
