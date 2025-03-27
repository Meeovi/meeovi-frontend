<template>
    <div>
        <div class="container-fluid">
            <div>
                <div>
                    <div class="card_wrapper">
                        <div class="card-box">
                            <div class="icon_block">
                                <div class="iconfont-wrapper">
                                    <NuxtImg loading="lazy" :src="`${$directus.url}assets/${list?.image?.filename_disk}`" :alt="list?.name" cover />
                                </div>
                            </div>
                            <p class="card-text mbr-fonts-style display-4">{{ list?.name }}</p>
                            Type: <p class="card-text mbr-fonts-style display-4" v-html="list?.type"></p>
                            <p class="card-text mbr-fonts-style display-4">{{ list?.description }}
                            </p>
                            <p class="btn_link mbr-fonts-style display-4"><NuxtLink :to="`/commerce/list/${list?.id}`"
                                    class="text-secondary">View<span
                                        class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></NuxtLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        list: {
            type: Object,
            required: true,
        },
    });
    const {
        list
    } = props;
</script>