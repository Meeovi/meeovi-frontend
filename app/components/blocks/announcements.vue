<template>
    <v-sheet class="mx-auto announcementBar" elevation="0">
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
            <v-slide-group-item v-for="announcement in announcements" :key="announcement.id"
                v-slot="{ isSelected, toggle, selectedClass }">
                <v-alert v-model="alert" border="start" close-label="Close Alert" :icon="announcement?.icon"
                    :color="announcement?.color" :border-color="announcement?.border_color"
                    :title="announcement?.subject" variant="tonal" closable v-dompurify-html="announcement?.description">
                </v-alert>

                <!--<div v-if="!alert" class="text-center">
            <v-btn @click="alert = true">
                Reset
            </v-btn>
        </div>-->
            </v-slide-group-item>
        </v-slide-group>
    </v-sheet>

</template>

<script setup>

    const alert = ref(true);
    const model = ref(null);

    const {
        $directus,
        $readItems,
    } = useNuxtApp()

    const {
        data: announcements
    } = await useAsyncData('announcements', async () => {
        const resp = await $directus.request($readItems('articles', {
            fields: ['*', {
                '*': ['*']
            }],
            filter: {
                type: {
                    _eq: 'Announcements'
                }
            }
        }))
        return resp?.data || resp || []
    })
</script>