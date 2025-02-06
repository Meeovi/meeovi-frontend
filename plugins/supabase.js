import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    process.env.SUPABASE_URL || config.public.supabase.url,
    process.env.SUPABASE_KEY || config.public.supabase.key
  )

  return {
    provide: {
      supabase
    }
  }
})
