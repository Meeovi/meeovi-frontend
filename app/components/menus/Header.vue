<template>
    <div>
        <v-app-bar id="topnav" density="compact">
            <template v-slot:prepend>
                <v-btn variant="flat" @click="$emit('toggleDrawer')">
                    <v-icon start icon="fas fa-bars"></v-icon> Menu
                </v-btn>
            </template>

            <logo />
            <v-spacer></v-spacer>

            <mobilesearch />

            <ClientOnly>
                <Search />
            </ClientOnly>

            <v-spacer></v-spacer>

            <div class="d-flex align-center flex-column flex-sm-row fill-height">
                <v-col cols="3">
                    <v-btn @click="toggleDark()" variant="text">
                        <v-icon>
                            {{ isDark ? 'fas fa-moon' : 'fas fa-sun' }}
                        </v-icon>
                    </v-btn>
                </v-col>
                <!--<v-col>
                    <LayoutNotifications />
                </v-col>-->

                <v-col>
                    <ecosystemmenu />
                </v-col>
                <v-col>
                    <accountMenu />
                </v-col>
            </div>
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
    import ecosystemmenu from './ecosystemmenu.vue'
    import Search from '../search/search.vue'
    //import LayoutNotifications from './Notifications.vue'
    import mobilesearch from './mobilesearch.vue'
    import accountMenu from './accountMenu.vue'

    defineProps({
        drawer: {
            type: Boolean,
            default: false
        }
    })

    defineEmits(['toggleDrawer'])

    let theme = null
    try {
        theme = useTheme()
    } catch {
        theme = null
    }

    const setThemeName = (value) => {
        if (!theme?.global?.name) return
        theme.global.name.value = value
    }

    // Local storage key
    const STORAGE_KEY = 'elite-theme'

    // isDark reflects the current theme name
    const isDark = computed(() => theme?.global?.name?.value === 'dark')

    // Determine initial mode
    onMounted(() => {
        if (!theme?.global?.name) return

        const stored = localStorage.getItem(STORAGE_KEY)

        if (stored) {
            setThemeName(stored)
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            setThemeName(prefersDark ? 'dark' : 'light')
        }
    })

    const toggleDark = () => {
        if (!theme?.global?.name) return
        setThemeName(isDark.value ? 'light' : 'dark')
    }

    // Save preference whenever theme name changes
    watch(
        () => theme?.global?.name?.value,
        (val) => {
            if (val) localStorage.setItem(STORAGE_KEY, val)
        }
    )
</script>