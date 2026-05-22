<template>
    <v-menu offset="20" location="bottom left">
        <template v-slot:activator="{ props }">
            <v-btn icon size="medium" variant="text" v-bind="props">
                <template v-if="isLoggedIn">
                    <UserAvatar :src="userAvatar" :name="userName" :email="userEmail" :size="32" />
                </template>
                <v-icon v-else icon="fas fa-user-circle"></v-icon>
            </v-btn>
        </template>

        <v-card class="account-menu-container">
            <NuxtLink :to="`/u/${user?.id}`" class="text-decoration-none">
                <v-list-item :title="userName" :subtitle="userEmail" class="mb-3">
                    <template #prepend>
                        <UserAvatar :src="userAvatar" :name="userName" :email="userEmail" :size="40" />
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
        onMounted,
    } from 'vue'
    import UserAvatar from '#social/app/components/user/UserAvatar.vue'

    const gateway = useGateway()
    const content = gateway.content

    const auth = useAuth()
    const session = auth.session
    const user = auth.user

    onMounted(async () => {
        if (!session.value) {
            await auth.fetchSession()
        }
    })

    const isLoggedIn = computed(() => auth.loggedIn.value)
    const userName = computed(() => user.value?.name || 'Guest')
    const userEmail = computed(() => user.value?.email || 'Not logged in')
    const userAvatar = computed(() => user.value?.image || user.value?.avatar || '')

    const {
        data: navAccount
    } = useAsyncData('navAccount', () => {
        if (!content || typeof content.readItem !== 'function') {
            return {
                menus: [],
            }
        }

        return content.readItem('navigation', '2').catch(() => ({
            menus: [],
        }))
    }, {
        server: false,
        default: () => ({ menus: [] }),
    })

    async function handleLogout() {
        await auth.signOut()
        await navigateTo('/login')
    }
</script>