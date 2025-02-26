<template>
    <v-form class="pa-4" @submit.prevent="handleSubmit(setBillingAddress)">
      <!-- Loading Overlay -->
      <v-overlay
        :model-value="loading"
        class="align-center justify-center"
      >
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
  
      <!-- Error Alert -->
      <v-alert
        v-if="error"
        type="error"
        closable
        class="mb-4"
        @click:close="error = null"
      >
        {{ error }}
      </v-alert>
  
      <h2 class="text-h4 font-weight-bold mb-4">Billing Address</h2>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="billingAddress.firstname"
            :error-messages="errors.firstname"
            label="First Name"
            name="firstName"
            autocomplete="given-name"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="billingAddress.lastname"
            :error-messages="errors.lastname"
            label="Last Name"
            name="lastName"
            autocomplete="family-name"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="billingAddress.telephone"
            :error-messages="errors.telephone"
            label="Phone"
            name="phone"
            type="tel"
            autocomplete="tel"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="billingAddress.country_code"
            :error-messages="errors.country_code"
            label="Country"
            name="country"
            :items="countries"
            item-title="full_name_locale"
            item-value="id"
            autocomplete="country-name"
            required
            variant="outlined"
            @update:model-value="updateRegions"
          ></v-select>
        </v-col>
        <v-col cols="12" md="8">
          <v-text-field
            v-model="billingAddress.street[0]"
            :error-messages="errors['street.0']"
            label="Street"
            name="street"
            autocomplete="address-line1"
            required
            variant="outlined"
            hint="Street address or P.O. Box"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="billingAddress.street[1]"
            label="Apt#, Suite, etc"
            name="aptNo"
            variant="outlined"
            hint="Optional"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="billingAddress.city"
            :error-messages="errors.city"
            label="City"
            name="city"
            autocomplete="address-level2"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            v-model="billingAddress.region"
            :error-messages="errors.region"
            label="State"
            name="state"
            :items="regions"
            item-title="name"
            item-value="code"
            autocomplete="address-level1"
            required
            variant="outlined"
          ></v-select>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="billingAddress.postcode"
            :error-messages="errors.postcode"
            label="ZIP Code"
            name="zipCode"
            placeholder="eg. 12345"
            autocomplete="postal-code"
            required
            variant="outlined"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-checkbox
            v-model="useAsShippingAddress"
            label="Use as shipping address"
            name="useAsShippingAddress"
          ></v-checkbox>
        </v-col>
        <v-col cols="12" class="d-flex justify-end gap-4">
          <v-btn
            variant="outlined"
            type="reset"
            color="primary"
            @click="handleReset"
          >
            Clear all
          </v-btn>
          <v-btn
            color="primary"
            type="submit"
            :loading="loading"
            :disabled="loading"
          >
            Save
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </template>
  
  <script lang="ts" setup>
  import { ref, reactive, onMounted, onErrorCaptured } from 'vue';
  import { useMutation, useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag';
  import { useForm } from 'vee-validate';
  import * as yup from 'yup';
  import { useNotification } from '~/composables/useNotifications';
  import { useCheckoutStore } from '~/stores/checkout';
  import type { Country, Region, BillingAddress, BillingAddressInput } from '~/types/address';
  
  const emit = defineEmits<{
    (e: 'address-saved', address: BillingAddress): void
    (e: 'address-error', error: Error): void
    (e: 'form-reset'): void
  }>();
  
  const { showNotification } = useNotification();
  const checkoutStore = useCheckoutStore();
  
  const loading = ref(false);
  const error = ref<string | null>(null);
  const useAsShippingAddress = ref(false);
  
  // GraphQL Queries and Mutations
  const GET_COUNTRIES = gql`
    query GetCountries {
      countries {
        id
        full_name_locale
        available_regions {
          id
          code
          name
        }
      }
    }
  `;
  
  const SET_BILLING_ADDRESS = gql`
    mutation SetBillingAddress(
      $cartId: String!
      $billingAddress: BillingAddressInput!
    ) {
      setBillingAddressOnCart(
        input: {
          cart_id: $cartId
          billing_address: $billingAddress
        }
      ) {
        cart {
          billing_address {
            firstname
            lastname
            street
            city
            region {
              code
            }
            postcode
            telephone
            country {
              code
            }
          }
        }
      }
    }
  `;
  
  // Form Validation Schema
  const validationSchema = yup.object({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    telephone: yup.string()
      .required('Phone number is required')
      .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number format'),
    street: yup.array().of(yup.string()).min(1).required('Street is required'),
    city: yup.string().required('City is required'),
    region: yup.string().required('State/Region is required'),
    postcode: yup.string()
      .required('ZIP code is required')
      .matches(/^\d{5}(-\d{4})?$/, 'Invalid ZIP code format'),
    country_code: yup.string().required('Country is required'),
  });
  
  const { handleSubmit, errors, resetForm } = useForm({
    validationSchema,
  });
  
  // Reactive State
  const { result: countriesResult } = useQuery(GET_COUNTRIES);
  const countries = ref<Country[]>([]);
  const regions = ref<Region[]>([]);
  
  const billingAddress = reactive<BillingAddress>({
    firstname: '',
    lastname: '',
    street: ['', ''],
    city: '',
    region: '',
    postcode: '',
    telephone: '',
    country_code: '',
  });
  
  const { mutate: setBillingAddressMutation } = useMutation(SET_BILLING_ADDRESS);
  
  // Methods
  const updateRegions = (countryCode: string) => {
    const country = countries.value.find(c => c.id === countryCode);
    regions.value = country?.available_regions || [];
  };
  
  const handleReset = () => {
    resetForm();
    Object.assign(billingAddress, {
      firstname: '',
      lastname: '',
      street: ['', ''],
      city: '',
      region: '',
      postcode: '',
      telephone: '',
      country_code: '',
    });
    useAsShippingAddress.value = false;
    emit('form-reset');
  };
  
  const setBillingAddress = async () => {
    try {
      loading.value = true;
      error.value = null;
  
      const result = await setBillingAddressMutation({
        variables: {
          cartId: checkoutStore.cartId,
          billingAddress: {
            address: {
              firstname: billingAddress.firstname,
              lastname: billingAddress.lastname,
              street: billingAddress.street,
              city: billingAddress.city,
              region: billingAddress.region,
              postcode: billingAddress.postcode,
              telephone: billingAddress.telephone,
              country_code: billingAddress.country_code,
              save_in_address_book: false
            },
            use_for_shipping: useAsShippingAddress.value
          }
        }
      });
  
      if (result.data) {
        showNotification({
          type: 'success',
          message: 'Billing address has been successfully updated',
        });
        emit('address-saved', result.data.setBillingAddressOnCart.cart.billing_address);
        checkoutStore.setBillingAddress(result.data.setBillingAddressOnCart.cart.billing_address);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update billing address';
      error.value = errorMessage;
      showNotification({
        type: 'error',
        message: errorMessage,
      });
      emit('address-error', err instanceof Error ? err : new Error(errorMessage));
    } finally {
      loading.value = false;
    }
  };
  
  // Lifecycle Hooks
  onMounted(async () => {
    if (countriesResult.value) {
      countries.value = countriesResult.value.countries;
    }
  });
  
  onErrorCaptured((err) => {
    error.value = err instanceof Error ? err.message : 'An unexpected error occurred';
    return false;
  });
  </script>
  
  <style scoped>
  .gap-4 {
    gap: 1rem;
  }
  </style>
  