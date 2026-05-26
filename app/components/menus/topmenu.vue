<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel v-for="menuItem in topmenu" :key="menuItem.id" :title="menuItem?.name"
        expand-icon="fas fa-caret-down" collapse-icon="fas fa-caret-up" elevation="0">
        <v-expansion-panel-text>
          <v-list class="ml-4">
            <v-list-item v-for="pageItem in menuItem.pages" :key="pageItem?.pages_id?.id"
              :title="pageItem?.pages_id?.name" :value="pageItem?.pages_id?.name" :href="pageItem?.pages_id?.slug" />
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
  const gateway = useGateway()
  const content = gateway.content

  const {
    data: topmenu
  } = await useAsyncData('topmenu', async () => {
    const items = await content.readItems('about_departments', {
      fields: ['*', 'image.*', 'pages.pages_id.*'],
      deep: {
        pages: {
          _sort: ['pages_id.name'],
        },
      },
    })
    return Array.isArray(items) ? items : Array.isArray(items?.data) ? items.data : []
  })
</script>