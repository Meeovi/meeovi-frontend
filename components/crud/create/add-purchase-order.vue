<!-- components/crud/create/add-purchase-order.vue -->
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
            <v-card-title class="d-flex align-center">
                <h2>Purchase Orders</h2>
                <v-spacer></v-spacer>
                <!-- Documentation Help Button -->
                <v-tooltip location="bottom">
                    <template v-slot:activator="{ props }">
                        <v-btn icon v-bind="props" @click="showHelp" class="mr-2">
                            <v-icon>mdi-help-circle</v-icon>
                        </v-btn>
                    </template>
                    <span>View Documentation</span>
                </v-tooltip>
                <v-btn color="primary" @click="openCreateDialog" :disabled="isLoading">
                    <v-icon start>mdi-plus</v-icon>
                    Create Purchase Order
                </v-btn>
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

            <v-data-table :headers="headers" :items="purchaseOrders" :loading="isLoading" :items-per-page="10"
                :items-per-page-options="[5, 10, 25, 50]">
                <template v-slot:item.status="{ item }">
                    <v-chip :color="getStatusColor(item.status)">
                        {{ item.status }}
                    </v-chip>
                </template>
                <template v-slot:item.total="{ item }">
                    {{ formatCurrency(item.total) }}
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-btn icon @click="viewOrder(item)">
                        <v-icon>mdi-eye</v-icon>
                    </v-btn>
                    <v-btn icon @click="editOrder(item)" :disabled="!canEdit(item)">
                        <v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </template>
                <template v-slot:no-data>
                    <v-alert type="info" class="ma-2">
                        No purchase orders available
                    </v-alert>
                </template>
            </v-data-table>
        </v-card>

        <!-- Create/Edit Dialog -->
        <v-dialog v-model="dialog" max-width="800px">
            <v-card>
                <v-card-title>
                    {{ isEditing ? 'Edit Purchase Order' : 'Create Purchase Order' }}
                </v-card-title>
                <v-card-text>
                    <v-form ref="form" @submit.prevent="saveOrder">
                        <v-container>
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.orderNumber" label="Order Number"
                                        :rules="[rules.required]" :error-messages="getFieldError('orderNumber')"
                                        @input="clearFieldError('orderNumber')"></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-select v-model="formData.status" :items="orderStatuses" label="Status"
                                        :rules="[rules.required]" :error-messages="getFieldError('status')"
                                        @change="clearFieldError('status')"></v-select>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.total" label="Total Amount" type="number" prefix="$"
                                        :rules="[rules.required, rules.minValue(0)]"
                                        :error-messages="getFieldError('total')"
                                        @input="clearFieldError('total')"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="formData.notes" label="Notes" :rules="[rules.maxLength(500)]"
                                        :error-messages="getFieldError('notes')"
                                        @input="clearFieldError('notes')"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="error" @click="closeDialog">Cancel</v-btn>
                    <v-btn color="success" @click="saveOrder" :loading="isSaving" :disabled="!isFormValid || isSaving">
                        {{ isEditing ? 'Update' : 'Create' }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <!-- Help Dialog -->
        <v-dialog v-model="helpDialog" max-width="600px">
            <v-card>
                <v-card-title>
                    Purchase Orders Help
                    <v-spacer></v-spacer>
                    <v-btn icon @click="helpDialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-title>Getting Started</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <p>Purchase Orders allow you to track and manage orders from suppliers.</p>
                                <ul>
                                    <li>Create new orders using the 'Create Purchase Order' button</li>
                                    <li>View existing orders by clicking the eye icon</li>
                                    <li>Edit orders by clicking the pencil icon (when allowed)</li>
                                    <li>Track order status through color-coded indicators</li>
                                </ul>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                        <v-expansion-panel>
                            <v-expansion-panel-title>Order Statuses</v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <ul>
                                    <li><v-chip color="success" small>Approved</v-chip> - Order has been approved</li>
                                    <li><v-chip color="warning" small>Pending</v-chip> - Awaiting approval</li>
                                    <li><v-chip color="error" small>Rejected</v-chip> - Order has been rejected</li>
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
        usePurchaseOrder
    } from '~/composables/commerce/sales/purchaseOrderCarts';

    // State Management
    const isLoading = ref(false);
    const isSaving = ref(false);
    const dialog = ref(false);
    const helpDialog = ref(false);
    const isEditing = ref(false);
    const purchaseOrders = ref([]);
    const validationErrors = ref([]);
    const fieldErrors = ref({});
    const form = ref(null);

    // Form Data
    const formData = ref({
        orderNumber: '',
        status: '',
        total: 0,
        notes: ''
    });

    // Notification System
    const notification = ref({
        show: false,
        message: '',
        color: 'success'
    });

    // Constants
    const orderStatuses = ['Pending', 'Approved', 'Rejected'];
    const headers = [{
            title: 'Order Number',
            key: 'orderNumber',
            sortable: true
        },
        {
            title: 'Status',
            key: 'status',
            sortable: true
        },
        {
            title: 'Total',
            key: 'total',
            sortable: true
        },
        {
            title: 'Created Date',
            key: 'createdAt',
            sortable: true
        },
        {
            title: 'Actions',
            key: 'actions',
            sortable: false
        }
    ];

    // Validation Rules
    const rules = {
        required: value => !!value || 'This field is required',
        minValue: min => value => !value || value >= min || `Minimum value is ${min}`,
        maxLength: max => value => !value || value.length <= max || `Maximum length is ${max} characters`
    };

    // Composable
    const {
        getPurchaseOrders,
        createPurchaseOrder,
        updatePurchaseOrder
    } = usePurchaseOrder();

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

        if (!formData.value.orderNumber) {
            validationErrors.value.push('Order number is required');
            fieldErrors.value.orderNumber = 'Order number is required';
        }

        if (!formData.value.status) {
            validationErrors.value.push('Status is required');
            fieldErrors.value.status = 'Status is required';
        }

        if (formData.value.total < 0) {
            validationErrors.value.push('Total must be positive');
            fieldErrors.value.total = 'Total must be positive';
        }

        if (formData.value.notes?.length > 500) {
            validationErrors.value.push('Notes are too long');
            fieldErrors.value.notes = 'Maximum 500 characters allowed';
        }

        return validationErrors.value.length === 0;
    };

    const getFieldError = (field) => {
        return fieldErrors.value[field] || '';
    };

    const clearFieldError = (field) => {
        delete fieldErrors.value[field];
    };

    const fetchOrders = async () => {
        isLoading.value = true;
        try {
            purchaseOrders.value = await getPurchaseOrders();
            showNotification('Purchase orders loaded successfully');
        } catch (error) {
            console.error('Error fetching orders:', error);
            showNotification('Failed to load purchase orders', 'error');
        } finally {
            isLoading.value = false;
        }
    };

    const openCreateDialog = () => {
        isEditing.value = false;
        formData.value = {
            orderNumber: '',
            status: 'Pending',
            total: 0,
            notes: ''
        };
        dialog.value = true;
    };

    const editOrder = (order) => {
        isEditing.value = true;
        formData.value = {
            ...order
        };
        dialog.value = true;
    };

    const viewOrder = (order) => {
        // Implement view logic
    };

    const saveOrder = async () => {
        if (!validateForm()) {
            showNotification('Please correct the validation errors', 'error');
            return;
        }

        isSaving.value = true;
        try {
            if (isEditing.value) {
                await updatePurchaseOrder(formData.value.id, formData.value);
                showNotification('Purchase order updated successfully');
            } else {
                await createPurchaseOrder(formData.value);
                showNotification('Purchase order created successfully');
            }
            await fetchOrders();
            closeDialog();
        } catch (error) {
            console.error('Error saving order:', error);
            showNotification('Failed to save purchase order', 'error');
        } finally {
            isSaving.value = false;
        }
    };

    const closeDialog = () => {
        dialog.value = false;
        isEditing.value = false;
        formData.value = {
            orderNumber: '',
            status: '',
            total: 0,
            notes: ''
        };
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

    const canEdit = (order) => {
        return order.status.toLowerCase() !== 'rejected';
    };

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value);
    };

    const showHelp = () => {
        helpDialog.value = true;
    };

    // Lifecycle Hooks
    onMounted(() => {
        fetchOrders();
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