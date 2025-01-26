<template>
    <div>
        <section data-bs-version="5.1" class="features19 cid-twaIYCrSLG" id="features19-48" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row justify-content-center align-items-start">

                    <div class="card">
                        <a :href="`/social/group/${space?.id}`">
                            <div class="card-wrapper flip-card">
                                <div class="card-img">
                                    <NuxtImg loading="lazy" class="align-end text-white spaceImage"
                                        :src="`${$directus.url}assets/${space?.image?.filename_disk}`"
                                        :alt="space?.name" cover />
                                    <div class="img-text mbr-text mbr-fonts-style align-left mbr-white display-4"
                                        style="color: white !important;">
                                        {{ space?.type }}
                                    </div>
                                </div>
                                <div class="card-box">
                                    <p class="mbr-title mbr-fonts-style mbr-bold mbr-black display-5">
                                        {{ space?.name }}
                                    </p>
                                    <p class="mbr-title mbr-fonts-style mbr-bold mbr-black display-7">
                                        Created: {{ new Date(space?.date_created).toLocaleDateString() }}
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    const {
        $directus
    } = useNuxtApp()

    const model = ref(null)
    const props = defineProps({
        space: {
            type: Object,
            required: true,
        },
    });
    const {
        space
    } = props;
</script>