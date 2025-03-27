import { createClient } from '@supabase/supabase-js';

export function useNewsfeed() {
  const supabase = createClient();
  const newsfeed = ref([]);

  async function fetchNewsfeed() {
    try {
      const { data, error } = await supabase
        .from('feeds')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      newsfeed.value = data;
    } catch (error) {
      console.error('Failed to fetch newsfeed:', error);
    }
  }

  function subscribeToRealtimeUpdates(userId) {
    supabase
      .channel('user-newsfeed')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'feeds',
          filter: `user_id=eq.${userId}`, // Only receive events for the logged-in user
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            newsfeed.value.unshift(payload.new);
          } else if (payload.eventType === 'UPDATE') {
            const index = newsfeed.value.findIndex((post) => post.id === payload.new.id);
            if (index !== -1) newsfeed.value[index] = payload.new;
          } else if (payload.eventType === 'DELETE') {
            newsfeed.value = newsfeed.value.filter((post) => post.id !== payload.old.id);
          }
        }
      )
      .subscribe();
  }

  async function fetchNewsfeed() {
    try {
      const { data, error } = await supabase
        .from('feeds')
        .select('*')
        .order('created_at', { ascending: false });
  
      if (error) throw error;
      newsfeed.value = data;
    } catch (error) {
      handleError(error, 'Failed to load your newsfeed.');
    }
  }
  
  
  onMounted(() => {
    const user = useSupabaseAuth().user; // Example of fetching the logged-in user
    fetchNewsfeed();
    if (user) subscribeToRealtimeUpdates(user.id);
  });
  
  return { newsfeed, fetchNewsfeed, subscribeToRealtimeUpdates };
}

  export function handleError(error, userMessage = 'Something went wrong') {
    console.error('Error:', error);
    alert(userMessage); // You can replace this with a custom error UI
  }