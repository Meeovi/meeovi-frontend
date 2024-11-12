<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create Address
                </v-btn>
            </template>
            <v-card>
                <form @submit.prevent="createAddress">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Address</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="6">
                                    <v-checkbox v-model="default_shipping" label="Default Shipping?"></v-checkbox>
                                </v-col>
                                <v-col cols="6">
                                    <v-checkbox v-model="default_billing" label="Default Billing?"></v-checkbox>
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
                                    <v-text-field v-model="prefix" label="Address Prefix" id="addressName">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="street" label="Street" id="addressStreet">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="suffix" label="Address Suffix"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="city" label="City"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="postcode" label="Postcode"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="company" label="Company"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="telephone" label="Phone Number"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="fax" label="Fax"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="country_code" label="Country Code"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="vat_id" label="Vat ID"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="region" label="Region"></v-text-field>
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
                        <v-btn color="blue-darken-1" variant="text" @click="createAddressAndRefresh">
                            Create Address
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

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
    import CREATE_ADDRESS from '~/graphql/commerce/queries/address'

    const route = useRoute();
    const router = useRouter();
    const dialog = ref(false);

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

    const createAddress = async () => {
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
            console.log('Address created:', data.createAddress.address);
        } catch (error) {
            console.error('Error creating address:', error);
        }
    };

    const createAddressAndRefresh = async () => {
        await createAddress();
        router.go(0); // Refresh the current route
    };
</script>