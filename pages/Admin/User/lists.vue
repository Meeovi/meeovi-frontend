<template>
    <div>
        <profilebar />
        <v-toolbar color="transparent" density="compact" title="My Lists">
            <addList />
        </v-toolbar>
        <v-table fixed-header>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Description
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        # of Products
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="list in data.lists" :key="list">
                    <td>{{ list.name }}</td>
                    <td>{{ list.description }}</td>
                    <td>{{ list.type }}</td>
                    <td></td>
                    <td><v-btn icon="fas fa-x" variant="flat" :href="list.id"></v-btn></td>
                </tr>
            </tbody>
        </v-table>
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

            }
        },
    }
</script>

<script setup>
import query from '../../apollo/Queries/Lists.js'

const { data } = await useAsyncQuery(query)

    useHead({
        title: 'Lists',
    });
</script>