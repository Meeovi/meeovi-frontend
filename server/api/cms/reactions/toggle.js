export default defineEventHandler(async (event) => {
  const user = event.context.auth.user;
  if (!user) throw createError({ statusCode: 401, message: 'Unauthorized' });

  const body = await readBody(event);
  const { postId } = body;

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );

  const { data: existingReaction, error } = await supabase
    .from('reactions')
    .select('*')
    .eq('post_id', postId)
    .eq('user_id', user.id)
    .single();

  if (error) throw createError({ statusCode: 500, message: error.message });

  if (existingReaction) {
    await supabase.from('reactions').delete().eq('id', existingReaction.id);
  } else {
    await supabase.from('reactions').insert({ post_id: postId, user_id: user.id });
  }

  return { success: true };
});
