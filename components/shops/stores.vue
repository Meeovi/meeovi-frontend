<template>
    <div>
        <div v-if="store">
            <div class="card col-12 col-md-6 col-lg-4">
                <div class="card-wrapper">
                    <div class="img-wrapper">
                        <NuxtImg loading="lazy" class="align-end text-white" v-if="store?.image"
                            :src="`${$directus.url}assets/${store?.image?.filename_disk}`" :alt="store?.name"
                            cover />
                    </div>
                    <div class="card-box align-center">
                        <h5 class="card-title mbr-fonts-style display-5">
                            {{ store?.name }}
                        </h5>
                        <p class="mbr-text mbr-fonts-style display-4">{{ store?.description }}</p>
                    </div>
                    <div class="mbr-section-btn mt-3">
                        <NuxtLink class="btn btn-secondary display-4" :href="`/shops/${store?.id}`">Enter
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