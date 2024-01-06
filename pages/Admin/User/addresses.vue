<template>
    <div class="contentPage">
        <profilebar />
        <v-toolbar color="transparent" density="compact" title="My Addresses">
            <addAddress />
        </v-toolbar>
        <v-table fixed-header>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Address
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        Drescription
                    </th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="address in address" :key="address.id">
                    <td>{{ address.name }}</td>
                    <td>{{ address.address }}</td>
                    <td>{{ address.type }}</td>
                    <td>{{ address.description }}</td>
                    <td><v-btn icon="fas fa-home" title="View" :href="`/addAccount/add-address/${address.id}`"></v-btn></td>
                </tr>
            </tbody>
        </v-table>
    </div>

</template>

<script>
    import addAddress from './addAccount/add-address.vue'
    import profilebar from '../../../components/Menus/profilebar.vue'

    export default {
        components: {
            profilebar,
            addAddress
        },
        data() {
            return {

            }
        },
    }
</script>

<script setup>
const {
        getItems
    } = useDirectusItems()

    const address = await getItems({
        collection: "address"
    });    
/*import address from '../../../apollo/queries-mutations_subscriptions/queries/address.gql'

const { data } = useAsyncQuery(address);*/

    useHead({
        title: 'Addresses',
    });
</script>