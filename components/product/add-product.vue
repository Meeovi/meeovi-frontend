<template>
    <div>
        <form>
            <v-toolbar dark color="rgb(var(--v-theme-primary))!important">
                <v-card-title>
                    <span class="text-h6">Create new Product</span>
                </v-card-title>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h5>Basic Information</h5>
                        </v-col>
                        <v-divider></v-divider>
                        <v-col cols="6">
                            <v-select v-model="status" :items="['Enable', 'Disable']" label="Status*"></v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-select v-model="type" :items="['simple', 'configurable', 'virtual', 'downloadable']"
                                label="Product Type*"></v-select>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="name" label="Product Name*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="sku" type="number" label="SKU*" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field v-model="price" type="number" label="Price*" required></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-select v-model="tax_class" :items="[
    { text: 'None', value: 0 },
    { text: 'Taxable Goods', value: 2 },
    { text: 'Shipping', value: 4 }
]" label="Tax Class"></v-select>

                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="quantity_per_source" type="number" label="Quantity"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="weight" type="number" label="Weight"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="height" type="number" label="Height"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-autocomplete v-model="catalog_visibility" :items="['public', 'private']"
                                label="Visibility">
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="6">
                            <v-autocomplete v-model="categories" :items="['public']" label="Categories">
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="6">
                            <v-autocomplete v-model="manufacture" :items="['public']" label="Manufacture">
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="6">
                            <v-autocomplete v-model="country" :items="['public']" label="Country of Manufacture">
                            </v-autocomplete>
                        </v-col>
                        <v-col cols="6">
                            <v-select v-model="tax_status" :items="['0-17']" label="Tags">
                            </v-select>
                        </v-col>

                        <v-col cols="12">
                            <h5>Content</h5>
                        </v-col>
                        <v-divider></v-divider>

                        <v-col cols="12">
                            <v-textarea v-model="short_description" label="Short Description*"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <h6>Description</h6>
                            <editor />
                        </v-col>

                        <v-col cols="12">
                            <h5>Images and Files</h5>
                        </v-col>
                        <v-divider></v-divider>

                        <v-col cols="12">
                            <v-file-input label="Product Image*" multiple required></v-file-input>
                        </v-col>
                        <v-col cols="12">
                            <v-file-input label="Product Thumbnails" multiple></v-file-input>
                        </v-col>
                        <v-col cols="12">
                            <v-file-input label="Product Files" multiple></v-file-input>
                        </v-col>

                        <v-col cols="12">
                            <h5>Related Products, Up-Sells, and Cross-Sells</h5>
                        </v-col>
                        <v-divider></v-divider>

                        <v-col cols="12">
                            <v-select v-model="related_ids" :items="['0-17']" label="Related Products">
                            </v-select>
                        </v-col>

                        <v-col cols="12">
                            <h5>Other Information</h5>
                        </v-col>
                        <v-divider></v-divider>

                        <v-col cols="6">
                            <v-text-field v-model="width" type="number" label="Part Number"></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field v-model="manufacturer_part_number" type="number"
                                label="Manufacturer Part Number"></v-text-field>
                        </v-col>

                        <v-col cols="12">
                            <h5>Downloadable Information</h5>
                        </v-col>
                        <v-divider></v-divider>

                        <v-col cols="6">
                            <v-select v-model="format" :items="['Downloadable', 'Not Downloadable']" label="format">
                            </v-select>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                    Close
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="dialog = false" @submit.prevent="createProduct">
                    Create Product
                </v-btn>
            </v-card-actions>
        </form>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import {
        useRuntimeConfig
    } from '#imports';
    import editor from '~/components/partials/globals/editor.vue'

    const config = useRuntimeConfig();
    const name = ref('');
    const status = ref('');
    const short_description = ref('');
    const description = ref('');
    const type = ref('');
    const sku = ref('');
    const image = ref('');
    const height = ref('');
    const weight = ref('');
    const tax_status = ref('');
    const price = ref('');
    const tax_class = ref('');
    const catalog_visibility = ref('');
    const related_ids = ref('');
    const categories = ref('');
    const manufacture = ref('');
    const country = ref('');
    const brand = ref('');
    const width = ref('');
    const format = ref('');
    const errorMessage = ref('');
    const successMessage = ref('');

    const createProduct = async () => {
        try {
            const CREATE_PRODUCT = `
            mutation createProduct(
                $name: String!
                $sku: String!
                $price: Float!
                $status: Int!
                $type: String!
                $weight: Float
                $description: String
                $short_description: String
                $tax_class_id: Int
            ) {
                createSimpleProduct(
                    input: {
                        name: $name
                        sku: $sku
                        price: $price
                        status: $status
                        weight: $weight
                        type_id: $type
                        description: { html: $description }
                        short_description: { html: $short_description }
                        tax_class_id: $tax_class_id
                        attribute_set_id: 4
                    }
                ) {
                    product {
                        id
                        name
                        sku
                        price {
                            regularPrice {
                                amount {
                                    value
                                }
                            }
                        }
                    }
                }
            }
        `;

            const variables = {
                name: name.value,
                sku: sku.value,
                price: parseFloat(price.value),
                status: status.value === 'Enable' ? 1 : 2,
                type: "simple",
                weight: parseFloat(weight.value),
                description: description.value,
                short_description: short_description.value,
                tax_class_id: parseInt(tax_class.value)
            };

            const response = await fetch(`${config.public.commerceUrl}/graphql`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.public.commerceApiToken}`
                },
                body: JSON.stringify({
                    query: CREATE_PRODUCT,
                    variables
                })
            });

            const result = await response.json();
            if (result.errors) {
                throw new Error(result.errors[0].message);
            }

            successMessage.value = 'Product created successfully';
        } catch (error) {
            errorMessage.value = error.message;
        }
    };

    useHead({
        title: 'Create Product',
    })
</script>