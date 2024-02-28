<template>
    <div>
        <v-toolbar title="Create A List"></v-toolbar>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <v-text-field label="List Name" required></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-combobox label="Type"
                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-combobox>
                    </v-col>
                    <v-col cols="6">
                        <v-file-input clearable label="List Image"></v-file-input>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="List Price" type="number"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea label="List Description"></v-textarea>
                    </v-col>
                    <v-col cols="12">
                        <v-card title="Choose a Product for your List">
                            <v-card-text>
                                <v-text-field density="compact" variant="solo" label="Search Meeovi for products"
                                    append-inner-icon="fas fa-search" single-line hide-details
                                    @click:append-inner="onClick"></v-text-field>
                                <v-spacer></v-spacer>
                                <div class="d-flex pa-4">
                                    <v-checkbox-btn v-model="includeFiles" class="pe-2" color="orange"></v-checkbox-btn>
                                    <!--<a :href="`/product/${products.id}`">
                                        <v-card class="ma-4" height="580" width="250" @click="toggle">
                                            <img class="align-end text-white" height="280"
                                                :src="`${products.featuredAsset.preview}`" :alt="products.name" cover />

                                            <v-card-title class="pt-4">
                                                {{ products.name }}
                                            </v-card-title>

                                            <v-card-text>
                                                <div>Sku: {{ products.variants.sku }}</div>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-card-title>$ {{ products.variants.price }}
                                                </v-card-title>
                                            </v-card-actions>
                                            <div class="d-flex fill-height align-center justify-center">
                                                <v-scale-transition>
                                                    <v-icon v-if="isSelected" color="white" size="48"
                                                        icon="mdi-close-circle-outline"></v-icon>
                                                </v-scale-transition>
                                            </div>
                                        </v-card>
                                    </a>-->
                                </div>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            includeFiles: true,
            enabled: false,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Create List',
    })
</script>