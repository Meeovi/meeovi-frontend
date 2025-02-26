<template>
    <div>
        
        <v-toolbar color="transparent" density="compact" title="My Agreements">
            <NuxtLinkddPayment />
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
                        Default?
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(payment, index) in data?.customer?.availablePaymentMethods" :key="index">
                    <td><NuxtImg loading="lazy" :src="payment?.gateway?.icon" :alt="payment?.gateway?.title"></td>
                    <td>{{ payment?.gateway?.title }}</td>
                    <td>{{ payment?.type }}</td>
                    <td>{{ payment?.gateway?.description }}</td>
                    <td>{{ payment?.isDefault }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>

</template>

<script>
    import addPayment from '~/components/crud/create/commerce/add-payment.vue'
    

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
import gql from 'graphql-tag'
const route = useRoute();

const query = gql`
query NewQuery {
  customer {
    displayName
    id
    username
    role
    date
    availablePaymentMethods {
      id
      isDefault
      type
      gateway {
        description
        icon
        id
        title
      }
    }
  }
}
`

const {
        data
    } = useAsyncQuery(query, {
        id: route.params.id
    });

    useHead({
        title: 'My Agreements',
    });

    definePageMeta({
	  middleware: ['authenticated'],
	})
</script>