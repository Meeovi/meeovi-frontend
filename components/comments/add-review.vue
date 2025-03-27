<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Review
                </v-btn>
            </template>
            <v-card>
                <form @submit.prevent="createReview">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Review</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-select label="Is this a default address?"
                                        :items="['Default Billing', 'Default Shipping']">
                                    </v-select>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field v-model="firstname" id="firstName" label="First Name*" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field v-model="middlename" id="middleName" label="Middle Name*" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-text-field v-model="lastname" id="lastName" label="Last Name*" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="prefix" label="Review Prefix" id="addressName">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="street" label="Street" id="addressStreet">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="suffix" label="Review Suffix"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="city" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="postcode" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="company" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="telephone" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="fax" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="country_code" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="vat_id" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="region" label="Meta Keywords"></v-text-field>
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
                            Create Review
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
            includeFiles: true,
            enabled: false,
        }),
    }
</script>

<script setup>
    import {
        ref
    } from 'vue';
    import {
        useApolloClient
    } from '@vue/apollo-composable';
    import {
        useRoute,
        useRouter
    } from 'vue-router';
    import gql from 'graphql-tag';
    import CREATE_ADDRESS from '~/graphql/commerce/queries/address'

    const route = useRoute();
    const router = useRouter();

    const city = ref('');
    const company = ref('');
    const country_code = ref('');
    const default_billing = ref('');
    const default_shipping = ref('');
    const fax = ref('');
    const firstname = ref('');
    const lastname = ref('');
    const middlename = ref('');
    const postcode = ref('');
    const prefix = ref('');
    const street = ref('');
    const suffix = ref('');
    const telephone = ref('');
    const vat_id = ref('');
    const region = ref('');

    const {
        client: apolloClient
    } = useApolloClient();

    const createReview = async () => {
        try {
            const {
                data
            } = await apolloClient.mutate({
                mutation: CREATE_ADDRESS,
                variables: {
                    city: city.value,
                    company: company.value,
                    country_code: country_code.value,
                    default_billing: default_billing.value,
                    default_shipping: default_shipping.value,
                    fax: fax.value,
                    firstname: firstname.value,
                    lastname: lastname.value,
                    middlename: middlename.value,
                    postcode: postcode.value,
                    prefix: prefix.value,
                    street: street.value,
                    suffix: suffix.value,
                    telephone: telephone.value,
                    vat_id: vat_id.value,
                    region: region.value,
                },
            });
            console.log('Review created:', data.createReview.address);
        } catch (error) {
            console.error('Error creating address:', error);
        }
    };

    const createReviewAndRefresh = async () => {
        await createReview();
        router.go(0); // Refresh the current route
    };
</script>