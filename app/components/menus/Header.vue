<template>
    <div>
        <v-app-bar id="topnav">
            <template v-slot:prepend>
                <v-btn class="mainMenu" variant="flat" color="transparent" @click="$emit('toggleDrawer')">
                    <v-icon start icon="fas fa-bars"></v-icon> Menu
                </v-btn>
            </template>
            <v-row>
                <v-col cols="2">
                    <div class="d-flex align-center flex-column flex-sm-row fill-height leftTopNav">
                        <logo />
                    </div>
                </v-col>

                <v-col cols="8">
                    <ClientOnly>
                        <Search />
                    </ClientOnly>
                </v-col>

                <v-col cols="2">
                    <div class="d-flex align-center flex-column flex-sm-row fill-height rightTopNav">
                        <v-col class="notificationsHeader">
                            <LayoutNotifications />
                        </v-col>

                        <v-col class="ecosystemMenuIcon">
                            <ecosystemmenu />
                        </v-col>

                        <v-col class="myaccounttopmenu">
                            <myaccounttopmenu />
                        </v-col>

                        <v-col class="shoppingCart">
                            <cart />
                        </v-col>
                    </div>
                </v-col>
            </v-row>
        </v-app-bar>
    </div>
</template>

<script setup>
    import {
        onMounted,
        watch,
        computed
    } from 'vue'
    import {
        useTheme
    } from 'vuetify'
    import logo from '../blocks/logo.vue'
    import LayoutNotifications from './topmenu/LayoutNotifications.vue'
    import ecosystemmenu from './topmenu/ecosystemmenu.vue'
    import Search from '#search/app/components/searchBar.vue'
    import cart from '#commerce/app/components/menus/cart.vue'
    //import LayoutNotifications from './Notifications.vue'
    import mobilesearch from '#search/app/components/menus/mobilesearch.vue'
    import myaccounttopmenu from './topmenu/myaccounttopmenu.vue'

    defineProps({
        drawer: {
            type: Boolean,
            default: false
        }
    })

    defineEmits(['toggleDrawer'])

    const drawer = ref(null);

    const theme = useTheme()
    const themeName = computed(() => theme.global.name.value)
    const isDark = computed(() => theme.global.current.value.dark)
    const setTheme = (name) => {
        theme.change(name)
    }

    // Local storage key
    const STORAGE_KEY = 'elite-theme'

    // Determine initial mode
    onMounted(() => {
        const stored = localStorage.getItem(STORAGE_KEY)

        if (stored === 'light' || stored === 'dark') {
            // Use saved preference
            setTheme(stored)
        } else {
            // No preference — follow system
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setTheme(prefersDark ? 'dark' : 'light')
        }
    })

    // Toggle between themes
    const toggleDark = () => {
        setTheme(theme.global.current.value.dark ? 'light' : 'dark')
    }

    // Save preference whenever theme changes
    watch(
        () => theme.global.name.value,
        (val) => {
            localStorage.setItem(STORAGE_KEY, val)
        }
    )
</script>