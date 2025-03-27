
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

const config = useRuntimeConfig();
const supabaseUrl = config.public.supabase.url;
const supabaseAnonKey = config.public.supabase.key;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
        