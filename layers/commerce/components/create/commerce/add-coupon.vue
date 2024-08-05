<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Add Coupon
                </v-btn>
            </template>
            <v-card>
                <form>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Coupon</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="name" id="couponName" label="Coupon Name*" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="minimum_amount" id="couponMinAmount"
                                        label="Coupon Minimum Amount"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="maximum_amount" id="couponMaxAmount"
                                        label="Coupon Maximum Amount"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="amount" label="Coupon Amount" id="couponType"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="datetime" v-model="date_expires" label="Coupon Date Expires"
                                        id="couponDateExpires"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field type="number" v-model="usage_limit" label="Coupon Usage Limit"
                                        id="couponUsageLimit"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-combobox v-model="individual_use" label="Individual Use"
                                        :items="['True', 'False']"></v-combobox>
                                </v-col>
                                <v-col cols="6">
                                    <v-combobox v-model="free_shipping" label="Free Shipping"
                                        :items="['True', 'False']"></v-combobox>
                                </v-col>
                                <v-col cols="6">
                                    <v-combobox v-model="exclude_sale_items" label="Exclude Sale Items"
                                        :items="['True', 'False']"></v-combobox>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="description" label="Description" id="couponDescription">
                                    </v-textarea>
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
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false" @submit.prevent="createCoupon">
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        },
    }
</script>

<script setup>
    import {
        ref
    } from 'vue'

    // Access environment variables
    const apiUrl = process.env.API_URL || 'https://meeovi.meeovicms.com'
    const wordpressToken = process.env.WORDPRESS_TOKEN ||
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL21lZW92aS5tZWVvdmljbXMuY29tIiwiaWF0IjoxNzE4MjkxMTg0LCJuYmYiOjE3MTgyOTExODQsImV4cCI6MTcxODg5NTk4NCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.pER2LWpuRBgMUqqvD6pcZfb185nULQV_dq-ml67AFZc'

    const name = ref('');
    const status = ref('');
    const code = ref('');
    const description = ref('');
    const amount = ref('');
    const minimum_amount = ref('');
    const maximum_amount = ref('');
    const discount_type = ref('');
    const date_expires = ref('');
    const usage_count = ref('');
    const usage_limit = ref('');
    const exclude_sale_items = ref('');
    const free_shipping = ref('');
    const errorMessage = ref('');
    const successMessage = ref('');

    const createCoupon = async () => {
        try {
            const response = await $fetch(`${config.public.wordpressUrl}/wp-json/dokan/v1/coupons/?code=REST`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.public.wordpressToken}`
                },
                body: JSON.stringify({
                    name: name.value,
                    code: code.value,
                    description: description.value,
                    maximum_amount: maximum_amount.sourceUrl.value,
                    minimum_amount: minimum_amount.value,
                    discount_type: discount_type.value,
                    date_expires: date_expires.value,
                    usage_count: usage_count.value,
                    usage_limit: usage_limit.value,
                    exclude_sale_items: exclude_sale_items.value,
                    free_shipping: free_shipping.value,
                    status: 'publish',
                })
            })

            console.log(response);

            if (response.id) {
                successMessage.value = 'Coupon created successfully!'
                errorMessage.value = ''
            } else {
                throw new Error('Failed to create coupon')
            }
        } catch (error) {
            console.error('Error creating coupon:', error);
            if (error.response) {
                console.error('Error response:', error.response);
                if (error.response.status === 403) {
                    errorMessage.value = 'You do not have permission to create a coupon.'
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
        title: 'Create Coupon',
    })
</script>