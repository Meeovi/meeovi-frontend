<template>
    <div v-if="announcement">
        <v-alert v-model="alert" border="start" close-label="Close Alert" :icon="announcement?.icon"
            :color="announcement?.color" :border-color="announcement?.border_color" :title="announcement?.subject"
            variant="tonal" closable>
            {{ announcement?.description }}
        </v-alert>

        <!--<div v-if="!alert" class="text-center">
            <v-btn @click="alert = true">
                Reset
            </v-btn>
        </div>-->
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const alert = ref(true);

    const {
      $directus,
      $readItems
  } = useNuxtApp()

  const {
      data: announcements
  } = await useAsyncData('announcements', () => {
      return $directus.request($readItems('announcements', {
          fields: ['*', { '*': ['*'] }]
      }))
  })
</script>