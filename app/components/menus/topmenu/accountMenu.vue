<template>
    <v-menu offset="20" location="bottom left">
        <template v-slot:activator="{ props }">
            <v-btn icon size="medium" variant="text" v-bind="props">
                <template v-if="session">
                    <v-avatar :src="session.user.avatar" :name="session.user.username" :email="session.user.email" :size="32" />
                </template>
                <v-icon v-else icon="fas fa-user-circle"></v-icon>
            </v-btn>
        </template>

        <v-card class="account-menu-container">
            <NuxtLink :to="`/u/${user?.id}`" class="text-decoration-none">
                <v-list-item :title="session.user.username" :subtitle="session.user.email" class="mb-3">
                    <template #prepend>
                        <v-avatar :src="session.user.avatar" :name="session.user.username" :email="session.user.email" :size="40" />
                    </template>
                </v-list-item>
            </NuxtLink>

            <v-divider></v-divider>

            <template v-if="isLoggedIn">
                <v-list v-for="item in navAccount?.menus" :key="item?.id ?? item?.name">
                    <v-list-item :title="item?.name" :value="item?.name" :prepend-icon="item?.icon" :href="item?.url">
                    </v-list-item>
                </v-list>

                <v-divider class="my-2"></v-divider>

                <v-card-actions>
                    <v-btn block color="error" variant="outlined" prepend-icon="fas fa-sign-out-alt"
                        @click="handleLogout">
                        Log Out
                    </v-btn>
                </v-card-actions>
            </template>

            <v-card-actions v-else class="d-flex ga-2">
                <v-btn block color="primary" variant="flat" to="/login">
                    Login
                </v-btn>
                <v-btn block color="secondary" variant="outlined" to="/register">
                    Register
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<script setup>
    import {
        computed,
    } from 'vue'
    import UserAvatar from '#social/app/components/user/UserAvatar.vue'

    const { data: session } = await useAuth().getSession()
    const auth = useAuth()

    const {
        $directus,
        $readItem,
    } = useNuxtApp()

    const {
        data: navAccount
    } = await useAsyncData('navAccount', async () => {
        const resp = await $directus.request($readItem('navigation', '2', {
            fields: ['*', {
                menus: ['*'],
            }],
        }))
        return resp?.data || resp || { menus: [] }
    })

    async function handleLogout() {
        await auth.signOut()
        await navigateTo('/login')
    }
</script>