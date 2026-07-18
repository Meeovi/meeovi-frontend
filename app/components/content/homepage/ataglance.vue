<template>
    <div>
        <section data-bs-version="5.1" class="content2 cid-skeBU2vAkT" id="content2-8">


            <div class="container">
                <div class="row mt-4">

                    <!-- Feature Item -->
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img" v-if="hasAsset(blocks?.media?.[0]?.file || blocks?.media?.[0])">
                                <NuxtImg provider="cloudinary" loading="lazy" :src="getAssetURL(blocks?.media?.[0]?.file || blocks?.media?.[0])" :alt="blocks?.name" />
                            </div>

                            <div class="item-img" v-else>
                                <NuxtImg provider="cloudinary" loading="lazy" src="/images/display-1.png" :alt="blocks?.name" />
                            </div>                            
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-5">
                                    <NuxtLink to="#top" class="text-primary"></NuxtLink>{{ blocks?.content?.[0]?.name }}
                                </h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                    <strong>{{ blocks?.content?.[0]?.subtitle }}</strong></h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7" v-dompurify-html="blocks?.content?.[0]?.content">
                                </p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2">
                                <NuxtLink :to="blocks?.content?.[0]?.url" class="btn item-btn btn-primary display-7"
                                    target="_blank">{{blocks?.content?.[0]?.url_name}} &gt;</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Feature Item 2 -->
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img" v-if="hasAsset(blocks?.media?.[1]?.file || blocks?.media?.[1])">
                                <NuxtImg provider="cloudinary" loading="lazy" :src="getAssetURL(blocks?.media?.[1]?.file || blocks?.media?.[1])" :alt="blocks?.name" />
                            </div>

                            <div class="item-img" v-else>
                                <NuxtImg provider="cloudinary" loading="lazy" src="/images/display-2.png" :alt="blocks?.name" />
                            </div> 
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-5">
                                    <NuxtLink to="#top" class="text-primary"></NuxtLink>{{ blocks?.content?.[1]?.name }}
                                </h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                    <strong>{{ blocks?.content?.[1]?.subtitle }}&nbsp;</strong></h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7" v-dompurify-html="blocks?.content?.[1]?.content">
                                </p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2">
                                <NuxtLink :to="blocks?.content?.[1]?.url" class="btn btn-primary item-btn display-7"
                                    target="_blank">{{blocks?.content?.[1]?.url_name}} &gt;</NuxtLink>
                            </div>
                        </div>
                    </div>

                    <!-- Feature Item 3-->
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img" v-if="hasAsset(blocks?.media?.[2]?.file || blocks?.media?.[2])">
                                <NuxtImg provider="cloudinary" loading="lazy" :src="getAssetURL(blocks?.media?.[2]?.file || blocks?.media?.[2])" :alt="blocks?.name" />
                            </div>

                            <div class="item-img" v-else>
                                <NuxtImg provider="cloudinary" loading="lazy" src="/images/display-3.png" :alt="blocks?.name" />
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-5">
                                    <NuxtLink to="#top" class="text-primary"></NuxtLink>{{ blocks?.content?.[2]?.name }}
                                </h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7">
                                    <strong>{{ blocks?.content?.[2]?.subtitle }}</strong></h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7" v-dompurify-html="blocks?.content?.[2]?.content">
                                </p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2">
                                <NuxtLink :to="blocks?.content?.[2]?.url" class="btn btn-primary item-btn display-7"
                                    target="_blank">{{blocks?.content?.[2]?.url_name}} &gt;</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    const { $directus, $readItem, $readItems } = useNuxtApp()

    import { getAssetURL } from '#shared/app/utils/get-asset-url'

    const hasAsset = (file) => Boolean(getAssetURL(file))

    const {
        data: blocks,
        error
    } = await useAsyncData('blocks', async () => {
        try {
            const resp = await $directus.request($readItem('page_blocks', '2', {
                fields: ['*', 'media.file.*', 'content.*'],
            }))
            return resp?.data || resp || null
        } catch {
            return null
        }
    })
</script>