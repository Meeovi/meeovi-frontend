<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel :title="navAccount?.name" expand-icon="fas:fa fa-plus" collapse-icon="fas:fa fa-minus" elevation="0">
        <v-expansion-panel-text>
          <v-list v-for="item in navAccount?.menus" :key="item">
            <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
            </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
const gateway = useGateway()
const content = gateway.content
const route = useRoute()

const { data: navAccount } = await useAsyncData('navAccount', () => {
  return content.readItem('navigation', '2')
})
</script>