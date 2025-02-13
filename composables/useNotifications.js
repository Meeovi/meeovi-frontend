import { ref, onMounted, onUnmounted } from 'vue';
import { createClient, useSupabaseUser } from '#imports';

export function useNotifications() {
  const supabase = createClient();
  const user = useSupabaseUser();
  const notifications = ref([]);

  const fetchNotifications = async () => {
    if (!user.value) return;
    const { data, error } = await supabase
      .from('notifications')
      .select('*')
      .eq('user_id', user.value.id)
      .order('created_at', { ascending: false });

    if (!error) notifications.value = data;
  };

  const subscribeToNotifications = () => {
    if (!user.value) return;

    return supabase
      .channel('notifications')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'notifications', filter: `user_id=eq.${user.value.id}` },
        (payload) => {
          notifications.value.unshift(payload.new);
        }
      )
      .subscribe();
  };

  onMounted(() => {
    fetchNotifications();
    subscribeToNotifications();
  });

  onUnmounted(() => {
    supabase.removeChannel('notifications');
  });

  return { notifications, fetchNotifications };
}
