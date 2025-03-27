export function useReactions() {
    async function toggleLike(postId, userId) {
      try {
        const response = await $fetch('/api/reactions/toggle', {
          method: 'POST',
          body: { postId, userId },
        });
        return response.count; // Updated like count
      } catch (error) {
        console.error('Failed to toggle like:', error);
        throw error;
      }
    }
  
    return { toggleLike };
  }
  