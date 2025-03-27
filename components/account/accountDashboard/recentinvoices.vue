<template>
    <div>
        <v-toolbar color="transparent" density="compact" :title="invoicesbar?.name"></v-toolbar>
        <v-table v-if="invoices.length">
            <thead>
                <tr>
                    <th class="text-left" v-for="invoicesbar in invoicesbar?.menus" :key="invoicesbar">
                        {{ invoicesbar?.name }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(invoice, index) in invoices" :key="index">
                    <td>{{ invoice.entity_id }}</td>
                    <td>{{ formatDate(invoice.created_at) }}</td>
                    <td>{{ invoice.order_id }}</td>
                    <td>{{ formatDate(invoice.created_at) }}</td>
                    <td>{{ invoice.state }}</td>
                    <td>{{ invoice.base_grand_total }}</td>
                </tr>
            </tbody>
        </v-table>
        <p v-else>No invoices found</p>
    </div>
</template>

<script setup>
    import {
        useUserStore
    } from '~/stores/user'
    import {
        getInvoices
    } from '~/composables/commerce/sales/getInvoices';

    const model = ref(null)
    const invoices = ref([]);

    onMounted(async () => {
        invoices.value = await getInvoices();
    });

    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })

    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: invoicesbar
    } = await useAsyncData('invoicesbar', () => {
        return $directus.request($readItem('navigation', '44', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>