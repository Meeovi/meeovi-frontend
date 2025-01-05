<template>
    <div>
        <v-toolbar color="transparent" density="compact" :title="listsbar?.name"></v-toolbar>
        <v-table fixed-header>
            <thead>
                <tr>
                    <th class="text-left" v-for="listsbar in listsbar?.menus" :key="listsbar">
                        {{ listsbar?.name }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(list, index) in lists" :key="index">
                    <td>
                        <NuxtImg loading="lazy" :src="list?.gateway?.icon" :alt="list?.gateway?.title" />
                    </td>
                    <td>{{ list?.type }}</td>
                    <td>{{ list?.name }}</td>
                    <td>{{ list?.description }}</td>
                    <td><NuxtLink :to="`/commerce/list/${list?.id}`">{{ list?.id }}</NuxtLink></td>
                </tr>
            </tbody>
        </v-table>
    </div>

</template>

<script setup>
    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })

    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: lists
    } = await useAsyncData('lists', () => {
        return $directus.request($readItems('lists', {
            filter: {
                user: {
                    _eq: `${userDisplayName.value}`
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: listsbar
    } = await useAsyncData('listsbar', () => {
        return $directus.request($readItem('navigation', '41', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>