export function useComments() {
    const comments = ref([]);
  
    async function fetchComments(postId) {
      try {
        const response = await $fetch(`/api/comments?postId=${postId}`);
        comments.value = response;
      } catch (error) {
        console.error('Failed to fetch comments:', error);
      }
    }
  
    async function addComment(postId, content) {
      try {
        const newComment = await $fetch('/api/comments', {
          method: 'POST',
          body: { postId, content },
        });
        comments.value.push(newComment);
      } catch (error) {
        console.error('Failed to add comment:', error);
      }
    }
  
    async function deleteComment(commentId) {
      try {
        await $fetch(`/api/comments/${commentId}`, { method: 'DELETE' });
        comments.value = comments.value.filter((c) => c.id !== commentId);
      } catch (error) {
        console.error('Failed to delete comment:', error);
      }
    }
  
    return { comments, fetchComments, addComment, deleteComment };
  }
  