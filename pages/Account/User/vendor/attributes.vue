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
                        Attribute Code
                    </th>
                    <th class="text-left">
                        Default Label
                    </th>
                    <th class="text-left">
                        Required
                    </th>
                    <th class="text-left">
                        System
                    </th>
                    <th class="text-left">
                        Action
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
        title: 'Addresses',
    });

    definePageMeta({
	  middleware: ['auth-logged-in'],
	})
</script>