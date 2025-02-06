<template>
    <div class="followBtn">
      <div v-if="following">
        <v-btn @click="unfollow" text="Following" color="orangered"></v-btn>
      </div>
      <div v-else>
        <v-btn @click="follow" text="Follow" color="orange"></v-btn>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useNuxtApp } from '#app';
  import { useUserStore } from '@/stores/user'; // Assuming you're using Pinia for auth
  
  const props = defineProps({
    entityId: {
      type: String,
      required: true,
    },
    entityType: {
      type: String,
      required: true, // Either "user" or "space"
    },
  });
  
  const following = ref(false);
  const authStore = useUserStore();
  const { $directus, $readItem, $createItem, $deleteItem } = useNuxtApp();
  
  const checkFollowing = async () => {
    if (!authStore.user) return; // Ensure user is logged in
    try {
      const response = await $directus.request(
        $readItem('follows', null, {
          filter: {
            follower: { _eq: authStore.user.id },
            followed_type: { _eq: props.entityType },
            followed_id: { _eq: props.entityId },
          },
        })
      );
      following.value = response?.data?.length > 0;
    } catch (error) {
      console.error('Error checking follow status:', error);
    }
  };
  
  const follow = async () => {
    if (!authStore.user) return; // Ensure user is logged in
    try {
      await $directus.request(
        $createItem('follows', {
          follower: authStore.user.id,
          followed_type: props.entityType,
          followed_id: props.entityId,
        })
      );
      following.value = true;
    } catch (error) {
      console.error('Error following:', error);
    }
  };
  
  const unfollow = async () => {
    if (!authStore.user) return; // Ensure user is logged in
    try {
      const response = await $directus.request(
        $readItem('follows', null, {
          filter: {
            follower: { _eq: authStore.user.id },
            followed_type: { _eq: props.entityType },
            followed_id: { _eq: props.entityId },
          },
        })
      );
  
      if (response?.data?.length > 0) {
        await $directus.request($deleteItem('follows', response.data[0].id));
        following.value = false;
      }
    } catch (error) {
      console.error('Error unfollowing:', error);
    }
  };
  
  onMounted(() => {
    checkFollowing();
  });
  </script>
  
  <style scoped>
  .followBtn {
    display: flex;
    align-items: center;
  }
  </style>
  