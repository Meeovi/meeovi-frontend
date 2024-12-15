<template>
    <div>
        <!--<profilebar />-->
        <v-toolbar color="transparent" density="compact" title="My Products">
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
                <tr v-for="(payment, index) in result?.customer?.availablePaymentMethods" :key="index">
                    <td><NuxtImg loading="lazy" :src="payment?.gateway?.icon" :alt="payment?.gateway?.title" /></td>
                    <td>{{ payment?.gateway?.title }}</td>
                    <td>{{ payment?.type }}</td>
                    <td>{{ payment?.gateway?.description }}</td>
                    <td>{{ payment?.isDefault }}</td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script setup>
    import addPayment from '~/components/crud/create/add-payment.vue'
    import profilebar from '~/components/menus/profilebar.vue'
    import payments from '~/graphql/commerce/queries/payments'
    import {
    useQuery
  } from '@vue/apollo-composable'
const route = useRoute();

const {
        result
    } = useQuery(payments, {
        id: route.params.id
    });

    useHead({
        title: 'My Products',
    });

    definePageMeta({
      middleware: ['authenticated'],
	})
</script>