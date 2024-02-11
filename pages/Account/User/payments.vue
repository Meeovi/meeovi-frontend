<template>
    <div class="contentPage">
        <profilebar />
        <v-toolbar color="transparent" density="compact" title="My Addresses">
            <addPayment />
        </v-toolbar>
        <v-table fixed-header>
            <thead>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        Value
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(payment, index) in data.customerOrders?.items" :key="index">
                    <td>{{ payment?.name }}</td>
                    <td>{{ payment?.type }}</td>
                    <td>{{ payment?.payment_methods?.additional_data?.value }}</td>
                    <td><v-btn icon="fas fa-home" title="View" :href="`/Account/User/addAccount/add-payment/${payment?.name}`"></v-btn></td>
                </tr>
            </tbody>
        </v-table>
    </div>

</template>

<script>
    import addPayment from './addAccount/add-payment.vue'
    import profilebar from '../../../components/Menus/profilebar.vue'

    export default {
        components: {
            profilebar,
            addPayment
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
  customerOrders {
    items {
      payment_methods {
        additional_data {
          name
          value
        }
        name
        type
      }
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
</script>