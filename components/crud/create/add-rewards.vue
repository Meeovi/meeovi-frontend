<!-- add-rewards.vue -->
<template>
    <div class="rewards-dashboard">
        <v-row>
            <!-- Header -->
            <v-col cols="12">
                <v-toolbar color="primary">
                    <v-toolbar-title>Add New Reward Points</v-toolbar-title>
                </v-toolbar>
            </v-col>

            <!-- Current Balance Card -->
            <v-col cols="12" md="4">
                <v-card class="mb-4">
                    <v-card-title>Current Balance</v-card-title>
                    <v-card-text>
                        <div class="text-h4 text-primary">
                            {{ currentBalance }} Points
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Exchange Rates Card -->
            <v-col cols="12" md="8">
                <v-card class="mb-4">
                    <v-card-title>Exchange Rates</v-card-title>
                    <v-card-text>
                        <v-row v-if="rewardRates">
                            <v-col cols="6" v-for="(rate, index) in rewardRates" :key="index">
                                <div class="text-subtitle-1">
                                    {{ rate.points }} points = {{ rate.currency_amount }} {{ rate.currency_code }}
                                </div>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Add Rewards Form -->
            <v-col cols="12">
                <v-card>
                    <v-card-title>Add Rewards</v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" @submit.prevent="handleSubmit">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.cartId" label="Cart ID" required
                                        :rules="[v => !!v || 'Cart ID is required']"></v-text-field>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.points" label="Points to Add" type="number" required
                                        :rules="[
                        v => !!v || 'Points are required',
                        v => v > 0 || 'Points must be greater than 0'
                      ]"></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-textarea v-model="formData.comment" label="Comment (Optional)"
                                        rows="3"></v-textarea>
                                </v-col>
                            </v-row>

                            <!-- Action Buttons -->
                            <v-row>
                                <v-col cols="12" class="text-right">
                                    <v-btn color="error" class="mr-4" @click="resetForm">
                                        Reset
                                    </v-btn>
                                    <v-btn color="primary" type="submit" :loading="loading" :disabled="!valid">
                                        Add Rewards
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Recent History -->
            <v-col cols="12">
                <v-card>
                    <v-card-title>Recent Reward History</v-card-title>
                    <v-card-text>
                        <v-data-table :headers="historyHeaders" :items="rewardHistory" :loading="loadingHistory"
                            class="elevation-1">
                            <template v-slot:item.points_delta="{ item }">
                                <span :class="item.points_delta > 0 ? 'success--text' : 'error--text'">
                                    {{ item.points_delta > 0 ? '+' : '' }}{{ item.points_delta }}
                                </span>
                            </template>
                            <template v-slot:item.created_at="{ item }">
                                {{ formatDate(item.created_at) }}
                            </template>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- Snackbar for notifications -->
        <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="3000">
            {{ snackbar.message }}
            <template v-slot:action="{ attrs }">
                <v-btn text v-bind="attrs" @click="snackbar.show = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import {
        getRewardBalance,
        useRewardPoints,
        getRewardHistory,
        getRewardRates,
        calculateRewardPoints
    } from '~/composables/commerce/marketing/useReward';

    // State
    const currentBalance = ref(0);
    const rewardRates = ref(null);
    const rewardHistory = ref([]);
    const loading = ref(false);
    const loadingHistory = ref(false);
    const valid = ref(false);
    const form = ref(null);

    const formData = ref({
        cartId: '',
        points: '',
        comment: ''
    });

    const snackbar = ref({
        show: false,
        message: '',
        color: 'success'
    });

    // Table headers for history
    const historyHeaders = [{
            text: 'Date',
            value: 'created_at'
        },
        {
            text: 'Points Change',
            value: 'points_delta'
        },
        {
            text: 'Comment',
            value: 'comment'
        },
        {
            text: 'Status',
            value: 'status'
        }
    ];

    // Methods
    const loadInitialData = async () => {
        try {
            // Load balance
            const balance = await getRewardBalance();
            currentBalance.value = balance;

            // Load rates
            const rates = await getRewardRates();
            rewardRates.value = rates;

            // Load recent history
            await loadHistory();
        } catch (error) {
            showError('Error loading initial data');
            console.error('Error loading initial data:', error);
        }
    };

    const loadHistory = async () => {
        loadingHistory.value = true;
        try {
            const history = await getRewardHistory({
                pageSize: 10,
                currentPage: 1
            });
            rewardHistory.value = history.items || [];
        } catch (error) {
            showError('Error loading reward history');
            console.error('Error loading history:', error);
        } finally {
            loadingHistory.value = false;
        }
    };

    const handleSubmit = async () => {
        if (!valid.value) return;

        loading.value = true;
        try {
            // Calculate potential points first
            const potentialPoints = await calculateRewardPoints(formData.value.cartId);

            // Apply rewards
            await useRewardPoints(formData.value.cartId);

            // Refresh balance and history
            await loadInitialData();

            showSuccess('Rewards added successfully');
            resetForm();
        } catch (error) {
            showError('Error adding rewards');
            console.error('Error adding rewards:', error);
        } finally {
            loading.value = false;
        }
    };

    const resetForm = () => {
        if (form.value) {
            form.value.reset();
        }
        formData.value = {
            cartId: '',
            points: '',
            comment: ''
        };
    };

    const showSuccess = (message) => {
        snackbar.value = {
            show: true,
            message,
            color: 'success'
        };
    };

    const showError = (message) => {
        snackbar.value = {
            show: true,
            message,
            color: 'error'
        };
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Lifecycle
    onMounted(() => {
        loadInitialData();
    });

    // Meta
    definePageMeta({
        layout: 'dashboard'
    });

    useHead({
        title: 'Add Rewards',
    });
</script>

<style scoped>
    .rewards-dashboard {
        padding: 20px;
    }

    .v-data-table {
        background: transparent !important;
    }
</style>