<template>
    <div class="sellerDashboard">
        <iframe style="position: relative; height: 100vh !important;" frameborder="0"
            allow="clipboard-write;camera;geolocation;fullscreen" :src="`${url}meeovi-seller-dashboard`"></iframe>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from '#app';

useHead({
    title: "Seller Dashboard"
});

const config = useRuntimeConfig();
const url = config.public.budibaseEmbed;

definePageMeta({
    layout: "nolive",
    middleware: ['authenticated'],
  })
</script>