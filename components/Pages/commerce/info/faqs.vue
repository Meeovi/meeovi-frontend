<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel v-for="i in 3" :key="i" title="Item"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>

</script>