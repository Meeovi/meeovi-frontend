<template>
    <div class="accountDashboard">
        <v-toolbar color="">
            <v-toolbar-title></v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script setup>

definePageMeta({
      layout: "nolive",
      middleware: ['authenticated'],
    });

useHead({
    title: ''
})
</script>