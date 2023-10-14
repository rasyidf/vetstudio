import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// add createClient<Database> if you want to use the typed client
const supabase = createClient(supabaseUrl, supabaseAnonKey)

export { supabase }