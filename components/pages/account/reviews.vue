<template>
    <div>
        <!--<profilebar />-->
        <v-toolbar color="transparent" density="compact" title="My Reviews">
            <addReview />
        </v-toolbar>
        <v-table fixed-header>
            <thead>
                <tr>
                    <th class="text-left">
                        Nickname
                    </th>
                    <th class="text-left">
                        Summary
                    </th>
                    <th class="text-left">
                        Review
                    </th>
                    <th class="text-left">
                        Created At
                    </th>
                </tr>
            </thead>
            <tbody v-for="(review, index) in data?.customer?.reviews" :key="index">
                <tr v-for="(review, index) in review?.items" :key="index">
                    <td>{{ review?.nickname }}</td>
                    <td>{{ review?.summary }}</td>
                    <td>{{ review?.text }}</td>
                    <td>{{ review?.created_at }}</td>
                    <td><v-rating hover :length="review?.average_rating" :size="32" :model-value="review?.average_rating" active-color="orange" /></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    //import profilebar from '~/components/menus/profilebar.vue'
    import addReview from '~/components/crud/create/add-review.vue'
    //import profilebar from '~/components/menus/profilebar.vue'    
    import {
        useQuery
    } from '@vue/apollo-composable'
    import reviews from '~/graphql/commerce/queries/reviews.js'

    const {
        data
    } = useQuery(reviews);

    useHead({
        title: 'My Reviews',
    });
</script>