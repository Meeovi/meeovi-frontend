<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Update Address
                </v-btn>
            </template>
            <v-card>
                <form @submit.prevent="updateAddress">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Update new Address</span>
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

                    <v-alert v-if="showError" type="error" closable @click:close="showError = false">
                        {{ errorMessage }}
                    </v-alert>

                    <v-alert v-if="showSuccess" type="success" closable @click:close="showSuccess = false">
                        Address updated successfully!
                    </v-alert>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" variant="text" @click.prevent="deleteAddressAndRefresh"
                            :loading="isDeleting">
                            Delete Address
                        </v-btn>
                        <v-btn color="primary" variant="text" @click.prevent="updateAddressAndRefresh"
                            :loading="isUpdating">
                            Update Address
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
        useRoute,
        useRouter
    } from 'vue-router';
    import {
        updateAddressDetails,
        deleteCustomerAddress
    } from '~/composables/useAddress'; // Add this import

    const route = useRoute();
    const router = useRouter();
    const dialog = ref(false);

    // Add loading states
    const isUpdating = ref(false);
    const isDeleting = ref(false);
    const errorMessage = ref('');
    const showError = ref(false);
    const showSuccess = ref(false);

    // Keep existing refs
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

    // Add ref for address ID
    const addressId = ref('');

    // Function to update address
    const updateAddress = async () => {
        try {
            isUpdating.value = true;
            errorMessage.value = '';
            showError.value = false;

            const customerId = localStorage.getItem('customerId');
            if (!customerId) {
                throw new Error('User not authenticated');
            }

            // Construct address data object
            const addressData = {
                id: addressId.value,
                firstname: firstname.value,
                lastname: lastname.value,
                middlename: middlename.value,
                prefix: prefix.value,
                suffix: suffix.value,
                street: [street.value],
                city: city.value,
                country_id: country_code.value,
                region: {
                    region: region.value
                },
                postcode: postcode.value,
                telephone: telephone.value,
                company: company.value,
                fax: fax.value,
                vat_id: vat_id.value,
                default_billing: default_billing.value,
                default_shipping: default_shipping.value
            };

            const result = await updateAddressDetails(customerId, addressId.value, addressData);

            showSuccess.value = true;
            dialog.value = false;

        } catch (error) {
            console.error('Error updating address:', error);
            errorMessage.value = error.message;
            showError.value = true;
        } finally {
            isUpdating.value = false;
        }
    };

    // Function to delete address
    const deleteAddress = async () => {
        try {
            isDeleting.value = true;
            errorMessage.value = '';
            showError.value = false;

            const customerId = localStorage.getItem('customerId');
            if (!customerId) {
                throw new Error('User not authenticated');
            }

            if (!addressId.value) {
                throw new Error('Address ID is required');
            }

            // Show confirmation dialog
            if (!confirm('Are you sure you want to delete this address?')) {
                return;
            }

            await deleteCustomerAddress(customerId, addressId.value);

            showSuccess.value = true;
            dialog.value = false;

        } catch (error) {
            console.error('Error deleting address:', error);
            errorMessage.value = error.message;
            showError.value = true;
        } finally {
            isDeleting.value = false;
        }
    };

    // Function to load address details
    const loadAddressDetails = async (id) => {
        try {
            const customerId = localStorage.getItem('customerId');
            if (!customerId || !id) return;

            const address = await fetchAddressDetails(customerId, id);

            // Populate form fields with address data
            addressId.value = address.id;
            firstname.value = address.firstname;
            lastname.value = address.lastname;
            middlename.value = address.middlename;
            prefix.value = address.prefix;
            suffix.value = address.suffix;
            street.value = address.street[0];
            city.value = address.city;
            country_code.value = address.country_id;
            region.value = address.region.region;
            postcode.value = address.postcode;
            telephone.value = address.telephone;
            company.value = address.company;
            fax.value = address.fax;
            vat_id.value = address.vat_id;
            default_billing.value = address.default_billing;
            default_shipping.value = address.default_shipping;

        } catch (error) {
            console.error('Error loading address details:', error);
            errorMessage.value = error.message;
            showError.value = true;
        }
    };

    // Refresh functions
    const updateAddressAndRefresh = async () => {
        await updateAddress();
        if (!showError.value) {
            router.go(0);
        }
    };

    const deleteAddressAndRefresh = async () => {
        await deleteAddress();
        if (!showError.value) {
            router.push('/account/addresses');
        }
    };

    // Watch for dialog opening to load address details
    watch(() => dialog.value, (newValue) => {
        if (newValue && route.params.id) {
            loadAddressDetails(route.params.id);
        }
    });

    // Reset form function
    const resetForm = () => {
        addressId.value = '';
        firstname.value = '';
        lastname.value = '';
        middlename.value = '';
        prefix.value = '';
        suffix.value = '';
        street.value = '';
        city.value = '';
        country_code.value = '';
        region.value = '';
        postcode.value = '';
        telephone.value = '';
        company.value = '';
        fax.value = '';
        vat_id.value = '';
        default_billing.value = false;
        default_shipping.value = false;
        errorMessage.value = '';
        showError.value = false;
        showSuccess.value = false;
    };

    // Clean up when dialog closes
    watch(() => dialog.value, (newValue) => {
        if (!newValue) {
            resetForm();
        }
    });
</script>