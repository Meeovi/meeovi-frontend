<template>
  <div>
    <h5 class="menuh5">{{ bottomsidebarmenu?.name }}</h5>
    <v-list v-for="item in bottomsidebarmenu?.menus" :key="item">
      <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url"></v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const gateway = useGateway()
const content = gateway.content
const route = useRoute()

const { data: bottomsidebarmenu } = await useAsyncData('bottomsidebarmenu', () => {
  return content.readItem('navigation', '6')
})
</script>