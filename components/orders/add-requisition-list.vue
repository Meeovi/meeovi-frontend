<!-- components/crud/create/add-requisition-list.vue -->
<template>
    <div>
      <!-- Loading Overlay -->
      <v-overlay v-model="isLoading" class="align-center justify-center">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
  
      <!-- Success/Error Notifications -->
      <v-snackbar
        v-model="notification.show"
        :color="notification.color"
        :timeout="3000"
        :location="notification.location"
      >
        {{ notification.message }}
        <template v-slot:actions>
          <v-btn color="white" variant="text" @click="notification.show = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
  
      <v-card>
        <v-card-title class="d-flex align-center">
          <h2>Requisition List Management</h2>
          <v-spacer></v-spacer>
          <!-- Documentation Help Button -->
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn
                icon
                v-bind="props"
                @click="showHelp"
                class="mr-2"
              >
                <v-icon>mdi-help-circle</v-icon>
              </v-btn>
            </template>
            <span>View Documentation</span>
          </v-tooltip>
          <v-btn 
            color="primary" 
            @click="openCreateDialog"
            :disabled="isLoading"
          >
            <v-icon start>mdi-plus</v-icon>
            Create New List
          </v-btn>
        </v-card-title>
  
        <!-- Validation Errors Display -->
        <v-alert
          v-if="validationErrors.length > 0"
          type="warning"
          class="ma-2"
          closable
        >
          <p>Please correct the following errors:</p>
          <ul>
            <li v-for="(error, index) in validationErrors" :key="index">
              {{ error }}
            </li>
          </ul>
        </v-alert>
  
        <v-data-table
          :headers="headers"
          :items="requisitionLists"
          :loading="isLoading"
          :items-per-page="10"
          :items-per-page-options="[5, 10, 25, 50]"
          class="elevation-1"
        >
          <template v-slot:item.created_at="{ item }">
            {{ formatDate(item.created_at) }}
          </template>
          <template v-slot:item.actions="{ item }">
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn 
                  icon 
                  v-bind="props"
                  @click="editList(item)"
                  :disabled="!canEdit(item)"
                >
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <span>Edit List</span>
            </v-tooltip>
            <v-tooltip location="bottom">
              <template v-slot:activator="{ props }">
                <v-btn 
                  icon 
                  v-bind="props"
                  @click="confirmDelete(item)"
                  :disabled="!canDelete(item)"
                  color="error"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Delete List</span>
            </v-tooltip>
          </template>
          <template v-slot:no-data>
            <v-alert type="info" class="ma-2">
              No requisition lists available
            </v-alert>
          </template>
        </v-data-table>
      </v-card>
  
      <!-- Create/Edit Dialog -->
      <v-dialog v-model="dialog" max-width="600px" persistent>
        <v-card>
          <v-card-title>
            {{ editMode ? 'Edit Requisition List' : 'Create Requisition List' }}
          </v-card-title>
          <v-card-text>
            <v-form ref="form" @submit.prevent="saveList">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="formData.name"
                      label="List Name"
                      :rules="[rules.required, rules.minLength(3)]"
                      :error-messages="getFieldError('name')"
                      @input="clearFieldError('name')"
                      counter
                      maxlength="50"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      v-model="formData.description"
                      label="Description"
                      :rules="[rules.maxLength(500)]"
                      :error-messages="getFieldError('description')"
                      @input="clearFieldError('description')"
                      counter
                      maxlength="500"
                      rows="3"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
              color="error" 
              @click="closeDialog"
              :disabled="isSaving"
            >
              Cancel
            </v-btn>
            <v-btn 
              color="success" 
              @click="saveList"
              :loading="isSaving"
              :disabled="!isFormValid || isSaving"
            >
              {{ editMode ? 'Update' : 'Create' }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <!-- Delete Confirmation Dialog -->
      <v-dialog v-model="deleteDialog" max-width="400px">
        <v-card>
          <v-card-title>Confirm Delete</v-card-title>
          <v-card-text>
            Are you sure you want to delete this requisition list?
            This action cannot be undone.
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="grey" @click="deleteDialog = false">Cancel</v-btn>
            <v-btn 
              color="error" 
              @click="deleteList"
              :loading="isDeleting"
            >
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  
      <!-- Help Dialog -->
      <v-dialog v-model="helpDialog" max-width="600px">
        <v-card>
          <v-card-title>
            Requisition List Help
            <v-spacer></v-spacer>
            <v-btn icon @click="helpDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-title>What is a Requisition List?</v-expansion-panel-title>
                <v-expansion-panel-text>
                  A requisition list is a reusable list of items that can be used to create purchase orders.
                  It helps streamline the purchasing process for frequently ordered items.
                </v-expansion-panel-text>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-title>Managing Lists</v-expansion-panel-title>
                <v-expansion-panel-text>
                  <ul>
                    <li>Create new lists using the 'Create New List' button</li>
                    <li>Edit existing lists by clicking the pencil icon</li>
                    <li>Delete lists using the trash icon</li>
                    <li>List names must be at least 3 characters long</li>
                    <li>Descriptions are optional but limited to 500 characters</li>
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
  import { ref, computed, onMounted } from 'vue';
  import { useRequisitionList } from '~/composables/commerce/reports/requisitionLists';
  
  // State Management
  const dialog = ref(false);
  const deleteDialog = ref(false);
  const helpDialog = ref(false);
  const editMode = ref(false);
  const isLoading = ref(false);
  const isSaving = ref(false);
  const isDeleting = ref(false);
  const requisitionLists = ref([]);
  const selectedList = ref(null);
  const validationErrors = ref([]);
  const fieldErrors = ref({});
  const form = ref(null);
  
  // Form Data
  const formData = ref({
    name: '',
    description: ''
  });
  
  // Notification System
  const notification = ref({
    show: false,
    message: '',
    color: 'success',
    location: 'top'
  });
  
  // Table Headers
  const headers = [
    { title: 'ID', key: 'id', sortable: true },
    { title: 'Name', key: 'name', sortable: true },
    { title: 'Description', key: 'description', sortable: true },
    { title: 'Created At', key: 'created_at', sortable: true },
    { title: 'Actions', key: 'actions', sortable: false }
  ];
  
  // Validation Rules
  const rules = {
    required: value => !!value || 'This field is required',
    minLength: min => value => !value || value.length >= min || `Minimum length is ${min} characters`,
    maxLength: max => value => !value || value.length <= max || `Maximum length is ${max} characters`
  };
  
  // Composable
  const {
    getRequisitionLists,
    createRequisitionList,
    updateRequisitionList,
    deleteRequisitionList
  } = useRequisitionList();
  
  // Computed Properties
  const isFormValid = computed(() => {
    return !!(formData.value.name && formData.value.name.length >= 3);
  });
  
  // Methods
  const showNotification = (message, color = 'success') => {
    notification.value = {
      show: true,
      message,
      color,
      location: 'top'
    };
  };
  
  const validateForm = () => {
    validationErrors.value = [];
    fieldErrors.value = {};
  
    if (!formData.value.name) {
      validationErrors.value.push('List name is required');
      fieldErrors.value.name = 'List name is required';
    } else if (formData.value.name.length < 3) {
      validationErrors.value.push('List name must be at least 3 characters');
      fieldErrors.value.name = 'Minimum 3 characters required';
    }
  
    if (formData.value.description?.length > 500) {
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
  
  const fetchLists = async () => {
    isLoading.value = true;
    try {
      requisitionLists.value = await getRequisitionLists();
      showNotification('Requisition lists loaded successfully');
    } catch (error) {
      console.error('Error fetching lists:', error);
      showNotification('Failed to load requisition lists', 'error');
    } finally {
      isLoading.value = false;
    }
  };
  
  const openCreateDialog = () => {
    editMode.value = false;
    formData.value = {
      name: '',
      description: ''
    };
    dialog.value = true;
  };
  
  const editList = (item) => {
    editMode.value = true;
    formData.value = { ...item };
    dialog.value = true;
  };
  
  const confirmDelete = (item) => {
    selectedList.value = item;
    deleteDialog.value = true;
  };
  
  const saveList = async () => {
    if (!validateForm()) {
      showNotification('Please correct the validation errors', 'error');
      return;
    }
  
    isSaving.value = true;
    try {
      if (editMode.value) {
        await updateRequisitionList(formData.value.id, formData.value);
        showNotification('Requisition list updated successfully');
      } else {
        await createRequisitionList(formData.value);
        showNotification('Requisition list created successfully');
      }
      await fetchLists();
      closeDialog();
    } catch (error) {
      console.error('Error saving list:', error);
      showNotification('Failed to save requisition list', 'error');
    } finally {
      isSaving.value = false;
    }
  };
  
  const deleteList = async () => {
    if (!selectedList.value) return;
  
    isDeleting.value = true;
    try {
      await deleteRequisitionList(selectedList.value.id);
      showNotification('Requisition list deleted successfully');
      await fetchLists();
      deleteDialog.value = false;
    } catch (error) {
      console.error('Error deleting list:', error);
      showNotification('Failed to delete requisition list', 'error');
    } finally {
      isDeleting.value = false;
      selectedList.value = null;
    }
  };
  
  const closeDialog = () => {
    dialog.value = false;
    editMode.value = false;
    formData.value = {
      name: '',
      description: ''
    };
    validationErrors.value = [];
    fieldErrors.value = {};
  };
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  const canEdit = (item) => {
    // Add any business logic for when a list can be edited
    return true;
  };
  
  const canDelete = (item) => {
    // Add any business logic for when a list can be deleted
    return true;
  };
  
  const showHelp = () => {
    helpDialog.value = true;
  };
  
  // Lifecycle Hooks
  onMounted(() => {
    fetchLists();
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
  
  /* Accessibility Styles */
  @media (prefers-reduced-motion: reduce) {
    .v-dialog-transition {
      transition: none !important;
    }
  }
  </style>
  