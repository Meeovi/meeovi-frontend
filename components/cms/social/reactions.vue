<template>
    <div>
        <v-btn id="likeButton" prepend-icon="fas fa-stamp">Like</v-btn>
        <span id="likeCount">0</span>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from "vue";


    const {
        $directus,
        $readItem,
        $createItem,
        $deleteItem
    } = useNuxtApp();

    // Define and capture the props
    const props = defineProps({
        contentId: {
            type: String,
            required: true,
        },
        contentType: {
            type: String,
            required: true,
        },
    });

    const likeButton = document.getElementById('likeButton');
    const likeCount = document.getElementById('likeCount');
    let count = 0;

    likeButton.addEventListener('click', () => {
        count++;
        likeCount.innerText = count;
    });

    onMounted(() => {
        fetchLikes();
    });
</script>