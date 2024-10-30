<template>
    <div>
        <v-card class="mx-auto" max-width="400" height="450">
            <v-img class="align-end text-white" height="200" :src="`${space?.image?.filename_disk}`" :alt="space?.name" cover></v-img>

            <v-card-title>{{ space?.name }}</v-card-title>
            <v-card-subtitle class="pt-4">
                Created: {{ new Date(space?.date_created).toLocaleDateString() }}
            </v-card-subtitle>

            <v-card-text>
                <div>Last Activity: {{ new Date(space?.date_updated).toLocaleDateString() }}</div>

                <div># of Members: {{space?.totalMemberCount}}</div>

                <div>Status: {{space?.status}}</div>

                <div v-html="space?.description"></div>
            </v-card-text>

            <v-card-actions>
                <v-btn color="orange" text="Explore" :href="`/social/group/${space?.id}`"></v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const model = ref(null)
    const props = defineProps({
        space: {
            type: Object,
            required: true,
        },
    });
    const {
        space
    } = props;
</script>