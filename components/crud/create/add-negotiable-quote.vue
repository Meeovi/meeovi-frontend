<!-- components/crud/create/add-negotiable-quote.vue -->
<template>
  <div>
    <!-- Loading Overlay -->
    <v-overlay v-model="isLoading" class="align-center justify-center">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <!-- Success/Error Notifications -->
    <v-snackbar v-model="notification.show" :color="notification.color" :timeout="3000">
      {{ notification.message }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="notification.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-card>
      <v-card-title>
        <h2>Negotiable Quotes</h2>
        <!-- Documentation Help Button -->
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" @click="showHelp" class="ml-2">
              <v-icon>mdi-help-circle</v-icon>
            </v-btn>
          </template>
          <span>View Documentation</span>
        </v-tooltip>
      </v-card-title>

      <!-- Validation Errors Display -->
      <v-alert v-if="validationErrors.length > 0" type="warning" class="ma-2" closable>
        <p>Please correct the following errors:</p>
        <ul>
          <li v-for="(error, index) in validationErrors" :key="index">
            {{ error }}
          </li>
        </ul>
      </v-alert>

      <v-data-table :headers="headers" :items="quotes" :loading="loading">
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)">
            {{ item.status }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn icon @click="viewQuote(item)">
            <v-icon>mdi-eye</v-icon>
          </v-btn>
          <v-btn icon @click="updateQuote(item)" :disabled="!canUpdate(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>
        <template v-slot:no-data>
          <v-alert type="info" class="ma-2">
            No quotes available
          </v-alert>
        </template>
      </v-data-table>
    </v-card>

    <!-- Quote Details Dialog -->
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          {{ editing ? 'Edit Quote' : 'Quote Details' }}
        </v-card-title>
        <v-card-text>
          <v-container v-if="selectedQuote">
            <v-form ref="form" @submit.prevent="saveQuote">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field v-model="selectedQuote.name" label="Quote Name" :readonly="!editing"
                    :rules="[rules.required, rules.minLength(3)]" :error-messages="getFieldError('name')"
                    @input="clearFieldError('name')"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field v-model="selectedQuote.total" label="Total Amount" type="number" :readonly="!editing"
                    :rules="[rules.required, rules.minValue(0)]" :error-messages="getFieldError('total')"
                    @input="clearFieldError('total')"></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea v-model="selectedQuote.description" label="Description" :readonly="!editing"
                    :rules="[rules.maxLength(500)]" :error-messages="getFieldError('description')"
                    @input="clearFieldError('description')"></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="closeDialog">Close</v-btn>
          <v-btn color="success" @click="saveQuote" v-if="editing" :loading="saving" :disabled="!isFormValid || saving">
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Help Dialog -->
    <v-dialog v-model="helpDialog" max-width="600px">
      <v-card>
        <v-card-title>
          Negotiable Quotes Help
          <v-spacer></v-spacer>
          <v-btn icon @click="helpDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-title>Overview</v-expansion-panel-title>
              <v-expansion-panel-text>
                Negotiable quotes allow customers to negotiate prices for bulk orders or special requirements.
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-title>Managing Quotes</v-expansion-panel-title>
              <v-expansion-panel-text>
                <ul>
                  <li>View quote details by clicking the eye icon</li>
                  <li>Edit quotes by clicking the pencil icon</li>
                  <li>Status colors indicate: Green (Approved), Yellow (Pending), Red (Rejected)</li>
                </ul>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
  import {
    ref,
    computed,
    onMounted
  } from 'vue';
  import {
    useNegotiableCart
  } from '~/composables/useNegotiableCart';

  // State Management
  const dialog = ref(false);
  const helpDialog = ref(false);
  const editing = ref(false);
  const loading = ref(false);
  const saving = ref(false);
  const quotes = ref([]);
  const selectedQuote = ref(null);
  const form = ref(null);
  const validationErrors = ref([]);
  const fieldErrors = ref({});

  // Notification System
  const notification = ref({
    show: false,
    message: '',
    color: 'success'
  });

  // Validation Rules
  const rules = {
    required: value => !!value || 'This field is required',
    minLength: min => value => !value || value.length >= min || `Minimum length is ${min} characters`,
    maxLength: max => value => !value || value.length <= max || `Maximum length is ${max} characters`,
    minValue: min => value => !value || value >= min || `Minimum value is ${min}`,
    email: value => !value || /.+@.+\..+/.test(value) || 'Invalid email address'
  };

  const headers = [{
      title: 'Quote ID',
      key: 'id'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Status',
      key: 'status'
    },
    {
      title: 'Created At',
      key: 'created_at'
    },
    {
      title: 'Actions',
      key: 'actions'
    }
  ];

  // Composable
  const {
    getNegotiableQuotes,
    updateNegotiableQuote
  } = useNegotiableCart();

  // Computed Properties
  const isFormValid = computed(() => {
    return validationErrors.value.length === 0;
  });

  // Methods
  const showNotification = (message, color = 'success') => {
    notification.value = {
      show: true,
      message,
      color
    };
  };

  const validateForm = () => {
    validationErrors.value = [];
    fieldErrors.value = {};

    // Validate required fields
    if (!selectedQuote.value.name) {
      validationErrors.value.push('Name is required');
      fieldErrors.value.name = 'Name is required';
    }

    if (selectedQuote.value.total < 0) {
      validationErrors.value.push('Total amount must be positive');
      fieldErrors.value.total = 'Total amount must be positive';
    }

    if (selectedQuote.value.description?.length > 500) {
      validationErrors.value.push('Description is too long');
      fieldErrors.value.description = 'Maximum 500 characters allowed';
    }

    return validationErrors.value.length === 0;
  };

  const getFieldError = (field) => {
    return fieldErrors.value[field] || '';
  };

  const clearFieldError = (field) => {
    delete fieldErrors.value[field];
  };

  const fetchQuotes = async () => {
    loading.value = true;
    try {
      quotes.value = await getNegotiableQuotes();
      showNotification('Quotes loaded successfully');
    } catch (error) {
      console.error('Error fetching quotes:', error);
      showNotification('Failed to load quotes', 'error');
    } finally {
      loading.value = false;
    }
  };

  const viewQuote = (quote) => {
    selectedQuote.value = {
      ...quote
    };
    editing.value = false;
    dialog.value = true;
  };

  const updateQuote = (quote) => {
    selectedQuote.value = {
      ...quote
    };
    editing.value = true;
    dialog.value = true;
  };

  const saveQuote = async () => {
    if (!validateForm()) {
      showNotification('Please correct the validation errors', 'error');
      return;
    }

    saving.value = true;
    try {
      await updateNegotiableQuote(selectedQuote.value.id, selectedQuote.value);
      await fetchQuotes();
      showNotification('Quote updated successfully');
      dialog.value = false;
    } catch (error) {
      console.error('Error updating quote:', error);
      showNotification('Failed to update quote', 'error');
    } finally {
      saving.value = false;
    }
  };

  const closeDialog = () => {
    dialog.value = false;
    editing.value = false;
    selectedQuote.value = null;
    validationErrors.value = [];
    fieldErrors.value = {};
  };

  const getStatusColor = (status) => {
    const colors = {
      approved: 'success',
      pending: 'warning',
      rejected: 'error'
    };
    return colors[status.toLowerCase()] || 'grey';
  };

  const canUpdate = (quote) => {
    return quote.status.toLowerCase() !== 'rejected';
  };

  const showHelp = () => {
    helpDialog.value = true;
  };

  // Lifecycle Hooks
  onMounted(() => {
    fetchQuotes();
  });
</script>

<style scoped>
  .v-data-table {
    width: 100%;
  }

  .help-text {
    font-size: 0.875rem;
    color: rgba(0, 0, 0, 0.6);
  }

  .error-text {
    color: var(--v-error-base);
    font-size: 0.875rem;
    margin-top: 4px;
  }
</style>