<template>
    <v-card class="mx-auto" max-width="400">
        <NuxtImg loading="lazy" class="align-end text-white" height="200" :src="`${$directus.url}assets/${website?.image?.filename_disk}`" :alt="website?.name" cover />
        <v-card-title>{{ website?.name }}</v-card-title>

        <v-card-subtitle class="pt-4">
            Created: {{ new Date(website?.created_at).toLocaleDateString() }}
        </v-card-subtitle>

        <v-card-text>
            <div>Type: {{ website?.type }}</div>

            <div>{{ website?.note }}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn color="orange" text="Edit" :href="`/social/bookmark/${website?.id}`"></v-btn>

            <v-btn color="orange" text="Visit" :href="website?.url"></v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
    import {
        ref,
        computed
    } from 'vue'
    import createListBtn from '~/components/partials/globals/createListBtn.vue'

    const model = ref(null)
    const props = defineProps({
        website: {
            type: Object,
            required: true,
        },
    });

    const {
        website
    } = props;
</script>