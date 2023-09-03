import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gbkdklgfdyavqnbsakyh.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdia2RrbGdmZHlhdnFuYnNha3loIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NjQ5MjMxNiwiZXhwIjoyMDAyMDY4MzE2fQ.Npd5OGLVoiV8JehO_C5ia7jZsfKE6Pj-Y8YJ1nw1syY"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
