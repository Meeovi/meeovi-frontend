<template>
    <div>
        <v-toolbar color="transparent" density="compact" :title="agreementsbar?.name"></v-toolbar>
        <v-table v-if="billingAgreements.length">
            <thead>
                <tr>
                    <th class="text-left" v-for="agreementsbar in agreementsbar?.menus" :key="agreementsbar">
                        {{ agreementsbar?.name }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="agreement in billingAgreements" :key="agreement.agreement_id">
                    <td>{{ agreement.agreement_id }}</td>
                    <td>{{ agreement.customer_id }}</td>
                    <td>{{ agreement.status }}</td>
                    <td>{{ formatDate(agreement.created_at) }}</td>
                </tr>
            </tbody>
        </v-table>
        <p v-else>No billing agreements found</p>
    </div>
</template>

<script setup>
    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })

    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const billingAgreements = ref([])
    const loading = ref(false)
    const error = ref(null)

    // Function to format date
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString()
    }

    // Fetch billing agreements
    const fetchBillingAgreements = async () => {
        try {
            loading.value = true
            const response = await fetch('/api/billing-agreements')
            billingAgreements.value = await response.json()
        } catch (err) {
            error.value = 'Failed to load billing agreements'
            console.error(err)
        } finally {
            loading.value = false
        }
    }

    // Fetch data when component mounts
    onMounted(() => {
        fetchBillingAgreements()
    })

    const {
        data: agreementsbar
    } = await useAsyncData('agreementsbar', () => {
        return $directus.request($readItem('navigation', '43', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>