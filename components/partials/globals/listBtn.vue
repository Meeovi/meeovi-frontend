<template>
    <div>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" color="white" text="Create a List" variant="text"></v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <addlist />
            </template>
        </v-dialog>
    </div>
</template>

<script setup>
    import addlist from '~/components/lists/add-list.vue'
</script>