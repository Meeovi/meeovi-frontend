<template>
    <div>
        <!---->
        <v-toolbar color="transparent" density="compact" :title="reviewsbar?.name">
            <addReview />
        </v-toolbar>
        <v-table fixed-header>
            <thead>
                <tr>
                    <th class="text-left" v-for="reviewsbar in reviewsbar?.menus" :key="reviewsbar">
                        {{ reviewsbar?.name }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(review, index) in reviews" :key="index">
                    <td>{{ review?.nickname }}</td>
                    <td>{{ review?.summary }}</td>
                    <td>{{ review?.response }}</td>
                    <td>{{ review?.created_at }}</td>
                    <td><v-rating hover :length="review?.average_rating" :size="32"
                            :model-value="review?.average_rating" active-color="orange" /></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    //
    import addReview from '~/components/crud/create/add-review.vue'
    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })
    
    const tab = ref(null);
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: reviews
    } = await useAsyncData('reviews', () => {
        return $directus.request($readItems('reviews', {
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
        data: reviewsbar
    } = await useAsyncData('reviewsbar', () => {
        return $directus.request($readItem('navigation', '39', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    useHead({
        title: 'My Reviews',
    });
</script>