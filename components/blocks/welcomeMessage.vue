<template>
    <div>
        <v-alert v-model="alert" border="start" close-label="Close Note" color="deep-purple-accent-4"
            title="Closable Note" variant="tonal" closable>

        </v-alert>

        <div v-if="!alert" class="text-center">
            <v-btn @click="alert = true">
                Reset
            </v-btn>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const alert = ref(true);
</script>