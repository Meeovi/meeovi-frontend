<template>
    <v-row>
        <v-col>
            <v-card color="#1F7087">
                <div class="d-flex flex-no-wrap justify-space-between">
                    <div>
                        <v-card-title class="text-h5">
                            {{ radio?.name }}
                        </v-card-title>

                        <v-card-subtitle>{{ radio?.description }}</v-card-subtitle>

                        <v-card-actions>
                            <v-btn class="ms-2" size="small" text="LISTEN" variant="outlined" :href="`/departments/categories/station/${radio?.id}`"></v-btn>
                        </v-card-actions>
                    </div>

                    <v-avatar class="ma-3" rounded="0" size="125">
                        <nuxt-img :src="`${$directus.url}assets/${radio?.image?.filename_disk}`" />
                    </v-avatar>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
    const props = defineProps({
        radio: {
            type: Object,
            required: true,
        },
    });
    const {
        radio
    } = props;
</script>