<template>
    <div>
        <div v-if="store">
            <v-card class="mx-auto" max-width="300">
                <NuxtImg loading="lazy" class="align-end text-white" height="200" v-if="store.store_logo" :src="`${config.public.commerceUrl}/media/${shop?.store_logo}`"
                    :alt="store.store_name" cover />

                <v-card-title>{{ store.store_name }}</v-card-title>

                <v-card-subtitle class="pt-4">
                    {{ store.store_description }}
                </v-card-subtitle>

                <v-card-actions>
                    <v-btn color="orange" text="Visit" :href="`/shops/${store.entity_idpts}`"></v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <p v-else>No stores found.</p>
    </div>
</template>

<script setup>
  import { useRuntimeConfig } from 'nuxt/app';

    const config = useRuntimeConfig();
    const props = defineProps({
        store: {
            type: Object,
            required: true,
        },
    });

    const {
        store
    } = props;
</script>