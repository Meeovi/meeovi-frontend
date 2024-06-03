<template>
    <div class="contentPage">
        <profilebar />
        <v-toolbar color="transparent" density="compact" title="My Addresses">
            <addAddress />
        </v-toolbar>
        <v-card>
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">Billing Address</v-tab>
                <v-tab value="two">Shipping Address</v-tab>
                <v-tab value="three"></v-tab>
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
                                        City and State
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
                                <tr v-for="(address, index) in data?.customer?.billing" :key="index">
                                    <td>{{ address?.firstName }} {{ address?.lastName }}</td>
                                    <td>{{ address?.company }}</td>
                                    <td>{{ address?.address1 }} {{ address?.address2 }}</td>
                                    <td>{{ address?.postcode }}</td>
                                    <td>{{ address?.city }} {{ address?.state }}</td>
                                    <td>{{ address?.country }}</td>
                                    <td>{{ address?.email }}</td>
                                    <td>{{ address?.phone }}</td>
                                    <td>
                                        <v-btn icon="fas fa-home" title="View"
                                            :href="`/Account/User/addAccount/add-address/${address?.id}`"></v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two">
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
                                        Default Billing
                                    </th>
                                    <th class="text-left">
                                        Default Shipping
                                    </th>
                                    <th class="text-left">
                                        Edit
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(address, index) in data?.customer?.shipping" :key="index">
                                    <td>{{ address?.firstName }} {{ address?.lastName }}</td>
                                    <td>{{ address?.company }}</td>
                                    <td>{{ address?.address1 }} {{ address?.address2 }}</td>
                                    <td>{{ address?.postcode }}</td>
                                    <td>{{ address?.city }} {{ address?.state }}</td>
                                    <td>{{ address?.country }}</td>
                                    <td>{{ address?.email }}</td>
                                    <td>{{ address?.phone }}</td>
                                    <td>
                                        <v-btn icon="fas fa-home" title="View"
                                            :href="`/Account/User/addAccount/add-address/${address?.id}`"></v-btn>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        Three
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import addAddress from '../../../components/create/commerce/add-address.vue'
    import profilebar from '../../../components/menus/profilebar.vue'

    export default {
        components: {
            profilebar,
            addAddress
        },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    const route = useRoute();
    const query = gql `
query NewQuery ($id: ID!) {
  customer(id: $id) {
    displayName
    id
    username
    role
    date
    billing {
      address1
      address2
      city
      country
      company
      email
      firstName
      lastName
      phone
      postcode
      state
    }
    shipping {
      address1
      address2
      city
      company
      country
      email
      firstName
      lastName
      phone
      postcode
      state
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query, {
        id: route.params.id
    });
    /*const {
        getItems
      } = useDirectusItems()

      const customer = await getItems({
        collection: "customers",
      });*/

    useHead({
        title: 'Addresses',
    });

    definePageMeta({
        //middleware: ['auth-logged-in'],
    })
</script>