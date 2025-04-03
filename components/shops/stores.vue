<template>
    <div>
        <div v-if="store">
            <div class="card col-12 col-md-6 col-lg-4">
                <div class="card-wrapper">
                    <div class="img-wrapper">
                        <NuxtImg loading="lazy" class="align-end text-white" v-if="store.store_logo"
                            :src="`${config.public.commerceUrl}/media/${shop?.store_logo}`" :alt="store.store_name"
                            cover>
                    </div>
                    <div class="card-box align-center">
                        <h5 class="card-title mbr-fonts-style display-5">
                            {{ store.store_name }}
                        </h5>
                        <p class="mbr-text mbr-fonts-style display-4">{{ store.store_description }}</p>
                    </div>
                    <div class="mbr-section-btn mt-3">
                        <NuxtLink class="btn btn-secondary display-4" :href="`/shops/${store.entity_idpts}`">Visit
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <p v-else>No stores found.</p>
    </div>
</template>

<script setup>
    import {
        useRuntimeConfig
    } from 'nuxt/app';

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