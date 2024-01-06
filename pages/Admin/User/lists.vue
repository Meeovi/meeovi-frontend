<template>
    <div class="contentPage">
        <profilebar />
        <v-toolbar color="transparent" density="compact" title="My Lists">
            <addList />
        </v-toolbar>
        <v-row>
            <v-col cols="3" v-for="list in lists" :key="list">
                <v-card class="mx-auto" max-width="400">
                    <img class="align-end text-white" height="200"
                        :src="`${url}assets/${list.image.filename_disk}`" :alt="list.name" contain />
                        <v-card-title>{{ list.name }}</v-card-title>

                    <v-card-subtitle class="pt-4">
                        <time :datetime="$dayjs('2023-01-01').utc().toString()">{{ list.user_created }}</time>
                    </v-card-subtitle>

                    <v-card-text>
                        <div>{{ list.name }}</div>

                        <div>{{ list.type }}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange" :href="`/commerce/lists/${list.id}`">
                            View
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import addList from './addAccount/add-list.vue'
    import profilebar from '../../../components/Menus/profilebar.vue'

    export default {
        components: {
            profilebar,
            addList
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
const {
        getItems
    } = useDirectusItems()

    const lists = await getItems({
        collection: "lists"
    });    

/*import lists from '../../../apollo/queries-mutations_subscriptions/queries/lists.gql'

const {
    data
} = useAsyncQuery(lists);*/

    useHead({
        title: 'Lists',
    });
</script>