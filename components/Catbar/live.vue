<template>
    <v-card>
        <v-tabs v-model="tab" bg-color="deep-purple-darken-4" center-active>
            <v-tab><v-avatar color="info" size="x-large"><span class="fas fa-plus"></span></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
            <v-tab><v-avatar color="info" size="x-large"><v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img></v-avatar></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            tab: null,
        }),
    }
</script>