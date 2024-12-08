<template>
    <div>
        <v-card color="#1F7087" :href="`/departments/categories/chart/${chart?.id}`">
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title class="text-h5">
                        {{ chart?.name }}
                    </v-card-title>

                    <v-card-subtitle>{{ chart?.description }}</v-card-subtitle>

                    <v-card-actions>
                        <v-btn class="ms-2" size="small" text="VISIT" variant="outlined"></v-btn>
                    </v-card-actions>
                </div>

                <v-avatar class="ma-3" rounded="0" size="125">
                    <v-img :src="`${$directus.url}assets/${chart?.image?.filename_disk}`"></v-img>
                </v-avatar>
            </div>
        </v-card>
    </div>
</template>

<script setup>
    const props = defineProps({
        chart: {
            type: Object,
            required: true,
        },
    });
    const {
        chart
    } = props;
</script>