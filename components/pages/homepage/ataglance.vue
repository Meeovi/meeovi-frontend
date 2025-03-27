<template>
    <div>
        <section data-bs-version="5.1" class="content2 cid-skeBU2vAkT" id="content2-8">
    
    
    <div class="container">
        <div class="row mt-4">
            <div class="item features-image сol-12 col-md-6 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <NuxtImg loading="lazy" :src="`${$directus.url}assets/${blocks?.media?.[0]?.directus_files_id?.filename_disk}`" :alt="blocks?.name" />
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5"><NuxtLink to="#top" class="text-primary"></NuxtLink>{{ blocks?.content[0]?.name }}</h5>
                        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><strong>{{ blocks?.content[0]?.subtitle }}</strong></h6>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7" v-html="blocks?.content[2]?.content"></p>
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><NuxtLink :to="blocks?.content?.[0]?.url" class="btn item-btn btn-primary display-7" target="_blank">{{blocks?.content?.[0]?.url_name}} &gt;</NuxtLink></div>
                </div>
            </div>
            <div class="item features-image сol-12 col-md-6 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <NuxtImg loading="lazy" :src="`${$directus.url}assets/${blocks?.media?.[1]?.directus_files_id?.filename_disk}`" :alt="blocks?.name" />
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5"><NuxtLink to="#top" class="text-primary"></NuxtLink>{{ blocks?.content[1]?.name }}</h5>
                        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><strong>{{ blocks?.content[1]?.subtitle }}&nbsp;</strong></h6>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7" v-html="blocks?.content[2]?.content">
                        </p>
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><NuxtLink :to="blocks?.content?.[1]?.url" class="btn btn-primary item-btn display-7" target="_blank">{{blocks?.content?.[1]?.url_name}} &gt;</NuxtLink></div>
                </div>
            </div>
            <div class="item features-image сol-12 col-md-6 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <NuxtImg loading="lazy" :src="`${$directus.url}assets/${blocks?.media?.[2]?.directus_files_id?.filename_disk}`" :alt="blocks?.name" />
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5"><NuxtLink to="#top" class="text-primary"></NuxtLink>{{ blocks?.content[2]?.name }}</h5>
                        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><strong>{{ blocks?.content[2]?.subtitle }}</strong></h6>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7" v-html="blocks?.content[2]?.content"></p>
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><NuxtLink :to="blocks?.content?.[2]?.url" class="btn btn-primary item-btn display-7" target="_blank">{{blocks?.content?.[2]?.url_name}} &gt;</NuxtLink></div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocks
    } = await useAsyncData('blocks', () => {
        return $directus.request($readItem('page_blocks', '2', {
            fields: ['*', 'media.directus_files_id.filename_disk', 'content.*'],
        }))
    })
</script>