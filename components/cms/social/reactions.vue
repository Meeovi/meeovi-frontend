<template>
    <div>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn class="reactionButton" color="primary" v-bind="props" icon="fas fa-thumbs-up" size="medium" title="Thumbs Up"></v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script setup>

</script>