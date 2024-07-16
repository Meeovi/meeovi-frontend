<template>
    <div class="sellerDashboard">
        <iframe style="position: relative; height: 100vh !important;" frameborder="0"
            allow="clipboard-write;camera;geolocation;fullscreen" :src="`${url}meeovi-seller-dashboard`"></iframe>
    </div>
</template>

<script>
export default {
    data() {
        console.log('BUDIBASE_EMBED:', process.env.BUDIBASE_EMBED);
        return {
            url: process.env.BUDIBASE_EMBED || ''
        };
    },
}
</script>

<script setup>
import { useRuntimeConfig } from '#app';

definePageMeta({
    layout: "nolive",
});

useHead({
    title: "Seller Dashboard"
});

const config = useRuntimeConfig();
const url = config.public.budibaseEmbed;
</script>