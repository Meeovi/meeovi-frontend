import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'

const config = useRuntimeConfig();

// Initialize Supabase client (do this only once)
if (!config.public.supabase.url || !config.public.supabase.key) {
  throw new Error('Supabase credentials are not set in environment variables')
}

const supabase = createClient(
  config.public.supabase.url,
  config.public.supabase.key
)

export default defineEventHandler(async (event) => {
  try {
    const { access_token } = await readBody(event)
    
    // Verify the Supabase session
    const { data: { user }, error } = await supabase.auth.getUser(access_token)
    
    if (error) throw error
    
    if (!user) {
      throw new Error('User not found')
    }

    // Return user data
    return {
      uid: user.id,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      // Add any other user properties you need
    }
  } catch (error) {
    console.error('Error in login:', error)
    return createError({
      statusCode: 400,
      statusMessage: 'Authentication failed',
      data: { message: error.message }
    })
  }
})
