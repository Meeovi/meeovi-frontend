<template>
    <div>
        <v-btn id="likeButton" prepend-icon="fas fa-stamp" @click="handleLike(post.id)">Like</v-btn>
    </div>
</template>

<script setup>
import { useReactions } from '~/composables/social/useReactions';

const { toggleLike } = useReactions();

function handleLike(postId) {
  toggleLike(postId, currentUser.id).then((count) => {
    console.log('Updated like count:', count);
  });
}

function toggleLike(postId) {
  if (!user.value) {
    alert('Please log in to like posts.');
    return;
  }

  $fetch('/api/reactions/toggle', {
    method: 'POST',
    body: { postId, userId: user.value.id },
  });
}

</script>