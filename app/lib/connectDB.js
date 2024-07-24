import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://kujxhgudslinapnnligd.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1anhoZ3Vkc2xpbmFwbm5saWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4Mjg4MzgsImV4cCI6MjAzNzQwNDgzOH0.qm0cSuJpZDYWJThSY0Ye7hgh5XyrF4GrQpL7-paIi04"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;