<template>
    <div>
        <div class="container-fluid">
            <div>
                <div>
                    <div class="card_wrapper">
                        <div class="card-box">
                            <div class="icon_block">
                                <div class="iconfont-wrapper">
                                    <img :src="`${$directus.url}assets/${list?.image?.filename_disk}`" :alt="list?.name" cover />
                                </div>
                            </div>
                            <p class="card-text mbr-fonts-style display-4">{{ list?.name }}</p>
                            <p class="card-text mbr-fonts-style display-4">Type: <div v-html="list?.type"></div></p>
                            <p class="card-text mbr-fonts-style display-4">{{ list?.description }}
                            </p>
                            <p class="btn_link mbr-fonts-style display-4"><a :href="`/commerce/list/${list?.id}`"
                                    class="text-secondary">View<span
                                        class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></a></p>
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