<template>
    <div v-if="ads.length">
        <div v-for="ad in ads" :key="ad.id" class="ad">
            <img :src="ad.image" :alt="ad.title" />
            <p>{{ ad.description }}</p>
        </div>
    </div>
</template>

<script setup>
    import {
        useAdvertising
    } from '~/composables/social/useAdvertising';

    const {
        ads,
        fetchAds
    } = useAdvertising();

    onMounted(() => {
        fetchAds();
    });
</script>