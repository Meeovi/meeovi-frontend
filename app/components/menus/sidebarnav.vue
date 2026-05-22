<template>
    <div>
        <v-list v-for="item in navAccount?.menus" :key="item">
            <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
            </v-list-item>
        </v-list>
    </div>
</template>

<script setup>
    const gateway = useGateway()
    const content = gateway.content
    const route = useRoute()

    const {
        data: navAccount
    } = await useAsyncData('navAccount', () => {
        return content.readItem('navigation', '87')
    })
</script>