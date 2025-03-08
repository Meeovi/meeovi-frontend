<template>
    <div>
        <!---->
        <v-toolbar color="transparent" density="compact" title="My Addresses">
            <addAddress />
        </v-toolbar>
        <v-card>
            <v-tabs v-model="tab" bg-color="transparent">
                <v-tab value="one">{{ addressbar?.name }}</v-tab>
                <!--<v-tab value="two">Shipping Address</v-tab>-->
                <!--<v-tab value="three">Shipping Address</v-tab>-->
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-table fixed-header>
                            <thead>
                                <tr>
                                    <th class="text-left" v-for="addressbar in addressbar?.menus" :key="addressbar">
                                        {{ addressbar?.name }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(address, index) in address" :key="index">
                                    <td v-html="address?.type"></td>
                                    <td>{{ address?.firstName }} {{ address?.lastName }}</td>
                                    <td>{{ address?.company }}</td>
                                    <td>{{ address?.address }} {{ address?.address2 }}</td>
                                    <td>{{ address?.postalcode }}</td>
                                    <td v-for="city in address?.cities?.cities_id" :key="city">{{ city?.name }}</td>
                                    <td v-for="country in address?.countries?.countries_id" :key="country">
                                        {{ country?.name }}</td>
                                    <td v-for="region in address?.region?.region_id" :key="region">
                                        {{ region?.region?.name }}</td>
                                    <td>{{ address?.email }}</td>
                                    <td>{{ address?.telephone }}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
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
    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })

    const tab = ref(null);
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: address
    } = await useAsyncData('address', () => {
        return $directus.request($readItems('address', {
            filter: {
                user: {
                    _eq: `${userDisplayName.value}`
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: addressbar
    } = await useAsyncData('addressbar', () => {
        return $directus.request($readItem('navigation', '38', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    useHead({
        title: 'Addresses',
    });
</script>