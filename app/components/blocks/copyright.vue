<template>
    <section data-bs-version="5.1" class="footer7 cid-u4ccfXoeP6" once="footers" id="footer7-8c"
        data-sortbtn="btn-primary">
        <div class="container">
            <v-row class="align-left justify-content-center mbr-white">
                <v-col cols="3" v-for="child in copyright?.menus" :key="child.id">
                    <NuxtLink :value="child?.name" :to="toPath(child?.slug)"><v-icon :prepend-icon="child?.icon"></v-icon>{{ child?.name }}
                    </NuxtLink>
                </v-col>
                <v-col cols="12">
                    <p class="mbr-text mb-0 mbr-fonts-style display-7" style="width: 100%; text-align: center;">
                        {{ blocksCopyright?.content?.[0]?.subtitle }} {{ new Date().getFullYear() }}&nbsp;<NuxtLink
                            :to="blocksCopyright?.content?.[0]?.url">{{ blocksCopyright?.name }}&nbsp;&nbsp;</NuxtLink>
                        {{ blocksCopyright?.content?.[0]?.name }}
                    </p>
                </v-col>
            </v-row>
        </div>
    </section>
</template>

<script setup>
    import { useRoutePath } from '#shared/app/composables/routing/useRoutePath'

    const { normalizeRoutePath } = useRoutePath()

    const toPath = (slug) => normalizeRoutePath(slug)

    const { $directus, $readItem, $readItems } = useNuxtApp()

    const {
        data: blocksCopyright
    } = await useAsyncData('blocksCopyright', async () => {
        const result = await $directus.request($readItem('page_blocks', '5', {
            fields: ['*', 'media.*.*'],
        }))
        return result?.data || result || {}
    })

    const {
        data: copyright
    } = await useAsyncData('copyright', async () => {
        const result = await $directus.request($readItem('navigation', '10'))
        return result?.data || result || {}
    })
</script>