<template>
    <section data-bs-version="5.1" class="footer7 cid-u4ccfXoeP6" once="footers" id="footer7-8c"
        data-sortbtn="btn-primary">
        <div class="container">
            <div class="row align-left justify-content-center mbr-white">
                <v-col cols="3" v-for="child in copyright?.menus" :key="child.id">
                    <v-list-item :title="child?.name" :value="child?.name" :prepend-icon="child?.icon"
                        :href="`/${child.slug}`"></v-list-item>
                </v-col>
                <v-col cols="12">
                    <p class="mbr-text mb-0 mbr-fonts-style display-7" style="width: 100%; text-align: center;">
                        {{ blocksCopyright?.content?.[0]?.subtitle }} {{ new Date().getFullYear() }}&nbsp;<NuxtLink
                            :to="blocksCopyright?.content?.[0]?.url">{{ blocksCopyright?.name }}&nbsp;&nbsp;</NuxtLink>
                        {{ blocksCopyright?.content?.[0]?.name }}
                    </p>
                </v-col>
            </div>
        </div>
    </section>
</template>

<script setup>
    const {
        $directus,
        $readItem
    } = useNuxtApp()
    const route = useRoute()

    const {
        data: blocksCopyright
    } = await useAsyncData('blocksCopyright', () => {
        return $directus.request($readItem('page_blocks', '5', {
            fields: ['*', 'media.*.*'],
        }))
    })

    const {
        data: copyright
    } = await useAsyncData('copyright', () => {
        return $directus.request($readItem('navigation', '10'))
    })
</script>