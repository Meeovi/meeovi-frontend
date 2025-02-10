import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig()
const supabase = createClient(
  config.public.supabase.url,
  config.public.supabase.key
);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body || !body.user_id || !body.message) {
      throw createError({ statusCode: 400, message: 'Invalid payload' });
    }

    const { data, error } = await supabase
      .from('notifications')
      .insert([{ user_id: body.user_id, message: body.message }]);

    if (error) throw error;

    return { success: true, data };
  } catch (err) {
    return { success: false, message: err.message };
  }
});
