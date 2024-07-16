<template>
    <div>
        <profilebar />
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
                                <tr v-for="(address, index) in data?.customer?.addresses" :key="index">
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
                                            :href="`/Account/User/addAccount/add-address/${address?.id}`"></v-btn>
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
    //const route = useRoute();
    const query = gql `
query {
  customer {
    addresses {
      city
      company
      country_code
      default_billing
      default_shipping
      fax
      prefix
      firstname
      middlename
      lastname
      postcode
      region {
        region
      }
      street
      suffix
      telephone
      vat_id
    }
    }
}
`

    const {
        data
    } = useAsyncQuery(query);
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