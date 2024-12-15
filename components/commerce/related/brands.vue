<template>
    <div>
        <v-card color="#1F7087" :class="['ma-4', selectedClass]" @click="toggle" elevation="0">
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title class="text-h5">
                        {{ brand.title }}
                    </v-card-title>

                    <v-card-subtitle>{{ brand.description }}</v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="ms-2" size="small" text="VIEW PRODUCTS" variant="outlined"
                            :href="`/commerce/brands/${brand.brand_id}`"></v-btn>
                    </v-card-actions>
                </div>

                <v-avatar class="ma-3" rounded="0" size="125">
                    <NuxtImg loading="lazy" :src="`${config.public.commerceUrl}/media/${brand.image}`" :alt="brand.title" />
                </v-avatar>
            </div>
        </v-card>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue'
    import { useRuntimeConfig } from 'nuxt/app';

    const config = useRuntimeConfig();

    const model = ref(null)
    const props = defineProps({
        brand: {
            type: Object,
            required: true,
        },
    });
    const {
        brand
    } = props;
</script>