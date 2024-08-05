<template>
    <div>
        <form action="" method="post" @v-on:submit.prevent="addContent()">
                    <v-toolbar dark color="rgb(var(--v-theme-primary))!important">
                        <v-card-title>
                            <span class="text-h6">Create new Product</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12"><h5>Basic Information</h5></v-col>
                                <v-divider></v-divider>
                                <v-col cols="6">
                                    <v-select v-model="status" :items="['Enable', 'Disable']" label="Enable Product">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="attributes" :items="['0-17']" label="Attribute Set">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="types" :items="['0-17']" label="Product Type*">
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
                                    <v-select v-model="tax_class" :items="['Taxable Goods', 'Refund Adjustments', 'Gift Options', 'Order Gift Wrapping', 'Item Gift Wrapping', 'Printed Gift Goods', 'Rewards Points']" label="Tax Class">
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
                                    <v-autocomplete v-model="visibility"
                                        :items="['public', 'private']" label="Visibility"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <v-autocomplete v-model="categories"
                                        :items="['public']" label="Categories"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <v-autocomplete v-model="manufacture"
                                        :items="['public']" label="Manufacture"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <v-autocomplete v-model="country"
                                        :items="['public']" label="Country of Manufacture"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="categories" label="Categories">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="tags" :items="['0-17']" label="Tags">
                                    </v-select>
                                </v-col>

                                <v-col cols="12"><h5>Content</h5></v-col>
                                <v-divider></v-divider>

                                <v-col cols="12">
                                    <v-textarea v-model="short_description" label="Short Description*"></v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <h6>Description</h6>
                                    <editor />
                                </v-col>

                                <v-col cols="12"><h5>Images and Files</h5></v-col>
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

                                <v-col cols="12"><h5>Search Engine Optimization (SEO)</h5></v-col>
                                <v-divider></v-divider>

                                <v-col cols="6">
                                    <v-text-field v-model="meta_title" label="Meta Title"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="meta_keywords" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="url" v-model="meta_url" label="Meta URL*"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="meta_description" label="Meta Description*"></v-textarea>
                                </v-col>

                                <v-col cols="12"><h5>Related Products, Up-Sells, and Cross-Sells</h5></v-col>
                                <v-divider></v-divider>

                                <v-col cols="12">
                                    <v-select v-model="related_product" :items="['0-17']" label="Related Products">
                                    </v-select>
                                </v-col>

                                <v-col cols="12"><h5>Other Information</h5></v-col>
                                <v-divider></v-divider>

                                <v-col cols="6">
                                    <v-text-field v-model="websites" type="url" label="Website"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-select v-model="brand" :items="['0-17']" label="Brands">
                                    </v-select>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="part_number" type="number" label="Part Number"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="manufacturer_part_number" type="number" label="Manufacturer Part Number"></v-text-field>
                                </v-col>

                                <v-col cols="12"><h5>Downloadable Information</h5></v-col>
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
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
    </div>
</template>

<script setup>
    import editor from '../../partials/editor.vue'

    useHead({
        title: 'Upload Product',
    })
</script>