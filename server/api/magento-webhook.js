import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig()
const supabase = createClient(
  config.public.supabase.url,
  config.public.supabase.key
);

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body || !body.customer_id || !body.status) {
      throw createError({ statusCode: 400, message: 'Invalid payload' });
    }

    const { data, error } = await supabase
      .from('notifications')
      .insert([{ user_id: body.customer_id, message: `Your order status: ${body.status}` }]);

    if (error) throw error;

    return { success: true, data };
  } catch (err) {
    return { success: false, message: err.message };
  }
});
