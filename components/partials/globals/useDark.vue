<template>
    <v-btn @click="toggleDark()" variant="text">
        <v-icon>
            {{ isDark ? 'fas fa-moon' : 'fas fa-sun' }}
        </v-icon>
    </v-btn>
</template>

<script setup lang="ts">
    import {
        useDark,
        useToggle
    } from '@vueuse/core'
    import {
        useTheme
    } from 'vuetify'

    // Initialize Vuetify theme
    const theme = useTheme()

    // Initialize dark mode
    const isDark = useDark({
        onChanged(dark: boolean) {
            // Use the theme instance we created above
            theme.global.name.value = dark ? 'dark' : 'light'
        },
    })

    // Create toggle function
    const toggleDark = useToggle(isDark)

    // Optional: sync initial state
    onMounted(() => {
        theme.global.name.value = isDark.value ? 'dark' : 'light'
    })
</script>