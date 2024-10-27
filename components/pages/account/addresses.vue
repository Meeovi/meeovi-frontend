<template>
    <div>
        <!--<profilebar />-->
        <v-toolbar color="transparent" density="compact" title="My Addresses">
            <addAddress />
        </v-toolbar>
        <v-card>
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">Addresses</v-tab>
                <!--<v-tab value="two">Shipping Address</v-tab>-->
                <!--<v-tab value="three">Shipping Address</v-tab>-->
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-table fixed-header>
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Name
                                    </th>
                                    <th class="text-left">
                                        Company
                                    </th>
                                    <th class="text-left">
                                        Address
                                    </th>
                                    <th class="text-left">
                                        Postcode
                                    </th>
                                    <th class="text-left">
                                        City
                                    </th>
                                    <th class="text-left">
                                        Country Code
                                    </th>
                                    <th class="text-left">
                                        Email
                                    </th>
                                    <th class="text-left">
                                        Phone
                                    </th>
                                    <th class="text-left">
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(address, index) in result?.customer?.addresses" :key="index">
                                    <td>{{ address?.firstName }} {{ address?.lastName }}</td>
                                    <td>{{ address?.company }}</td>
                                    <td>{{ address?.street }}</td>
                                    <td>{{ address?.postcode }}</td>
                                    <td>{{ address?.city }}</td>
                                    <td>{{ address?.country_code }} {{ address?.region?.region }}</td>
                                    <td>{{ address?.email }}</td>
                                    <td>{{ address?.telephone }}</td>
                                    <td>
                                        <v-btn icon="fas fa-home" title="View"
                                            :href="`/account/user/addAccount/add-address/${address?.id}`"></v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useQuery
    } from '@vue/apollo-composable'
    import addAddress from '~/components/crud/create/add-address.vue'
    //import profilebar from '~/components/menus/profilebar.vue'
    import address from '~/graphql/commerce/queries/address.js'

    const tab = ref(null)
    const {
        result
    } = useQuery(address)
    /*const {
        getItems
      } = useDirectusItems()

      const customer = await getItems({
        collection: "customers",
      });*/

    useHead({
        title: 'Addresses',
    });
</script>