<template>
    <div class="contentPage">
        <v-toolbar title="Meeovi Messages"></v-toolbar>
        <v-row>
            <v-col cols="4">
                <v-list lines="one">
                    <v-list-item v-for="n in 3" :key="n" :title="'Item ' + n"
                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
                        :prepend-avatar="`https://randomuser.me/api/portraits/women/8.jpg`"></v-list-item>
                </v-list>
            </v-col>

            <v-col cols="8">

            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    useHead({
        title: 'Meeovi Messages',
    })
</script>