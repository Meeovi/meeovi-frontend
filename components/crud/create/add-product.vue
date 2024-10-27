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
                            <v-select v-model="status" :items="['Enable', 'Disable']" label="Enable Product">
                            </v-select>
                        </v-col>
                        <v-col cols="6">
                            <v-select v-model="type" :items="['0-17']" label="Product Type*">
                            </v-select>
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
                            <v-select v-model="tax_class"
                                :items="['Taxable Goods', 'Refund Adjustments', 'Gift Options', 'Order Gift Wrapping', 'Item Gift Wrapping', 'Printed Gift Goods', 'Rewards Points']"
                                label="Tax Class">
                            </v-select>
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
                            <v-autocomplete v-model="catalog_visibility" :items="['public', 'private']" label="Visibility">
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
    import { useRuntimeConfig } from '#imports';
    import editor from '~/components/partials/editor.vue'

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
            const response = await $fetch(`${config.public.wordpressUrl}/wp-json/dokan/v1/products/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.public.wordpressToken}`
                },
                body: JSON.stringify({
                    name: name.value,
                    short_description: short_description.value,
                    description: description.value,
                    image: image.sourceUrl.value,
                    sku: sku.value,
                    height: height.value,
                    weight: weight.value,
                    tax_status: tax_status.value,
                    price: price.value,
                    tax_class: tax_class.value,
                    catalog_visibility: catalog_visibility.value,
                    categories: categories.name.value,
                    manufacture: manufacture.value,
                    country: country.value,
                    type: type.value,
                    brand: brand.value,
                    width: width.value,
                    format: format.value,
                    related_ids: related_ids.value,
                    status: 'publish',
                })
            })

            console.log(response);

            if (response.id) {
                successMessage.value = 'Product created successfully!'
                errorMessage.value = ''
            } else {
                throw new Error('Failed to create product')
            }
        } catch (error) {
            console.error('Error creating product:', error);
            if (error.response) {
                console.error('Error response:', error.response);
                if (error.response.status === 403) {
                    errorMessage.value = 'You do not have permission to create a product.'
                } else {
                    errorMessage.value = `Error: ${error.response.status} ${error.response.statusText}`
                }
            } else {
                errorMessage.value = error.message
            }
            successMessage.value = ''
        }
    }

    useHead({
        title: 'Create Product',
    })
</script>