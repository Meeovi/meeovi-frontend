<template>
    <div>
        <section data-bs-version="5.1" class="people1 cid-u1nLQKMuh5" id="apeople1-6q">
            <div class="container">
                <div class="row">
                    <div class="item features-image col-12 col-xl-3 col-sm-6">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <NuxtImg :src="`${$directus.url}assets/${image?.filename_disk}`"
                                    :alt="contact?.first_name" />
                            </div>
                            <div class="item-content-container">
                                <div class="item-content">
                                    <h5 class="item-title mbr-fonts-style align-center display-7">
                                        {{ contact?.first_name }} {{ contact?.last_name }}</h5>
                                    <p class="mbr-text mbr-fonts-style align-center display-4">
                                        <NuxtLink class="text-black" :to="`/social/member/${contact?.id}`">Edit
                                        </NuxtLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import updatecontact from '@/components/contacts/update-contact.vue'

    const props = defineProps({
        contact: {
            type: Object,
            required: true,
        },
    });
</script>