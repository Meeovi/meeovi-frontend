<template>
    <div class="contentPage">
        <profilebar />
        <v-toolbar color="transparent" density="compact" title="Reviews"></v-toolbar>
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
                <tr v-for="(address, index) in data?.customer?.addresses" :key="index">
                    <td>{{ address?.firstname }} {{ address?.middlename }} {{ address?.lastname }}</td>
                    <td>{{ address?.company }}</td>
                    <td>{{ address?.street }}</td>
                    <td>{{ address?.postcode }}</td>
                    <td>{{ address?.city }}</td>
                    <td>{{ address?.country_code }}</td>
                    <td>{{ address?.default_billing }}</td>
                    <td>{{ address?.default_shipping }}</td>
                    <td><v-btn icon="fas fa-home" title="View" :href="`/Account/User/addAccount/add-address/${address?.id}`"></v-btn></td>
                </tr>
            </tbody>
        </v-table>
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
        data() {
            return {

            }
        },
    }
</script>

<script setup>
import gql from 'graphql-tag'

const query = gql`
query MyQuery {
  customer {
    addresses {
      city
      company
      country_code
      default_billing
      default_shipping
      firstname
      id
      lastname
      middlename
      postcode
      street
    }
  }
}

`
  const {
    data
  } = await useAsyncQuery(query)

    useHead({
        title: 'Reviews',
    });

    definePageMeta({
	  middleware: ['auth-logged-in'],
	})
</script>