<!-- modify-rewards.vue -->
<template>
    <div class="rewards-dashboard">
        <v-row>
            <!-- Header -->
            <v-col cols="12">
                <v-toolbar color="primary">
                    <v-toolbar-title>Modify Rewards</v-toolbar-title>
                </v-toolbar>
            </v-col>

            <!-- Current Balance Card -->
            <v-col cols="12" md="6">
                <v-card class="mb-4">
                    <v-card-title>Current Balance</v-card-title>
                    <v-card-text>
                        <div class="text-h4 text-primary">
                            {{ currentBalance }} Points
                        </div>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Active Rewards Card -->
            <v-col cols="12" md="6">
                <v-card class="mb-4">
                    <v-card-title>Active Cart Rewards</v-card-title>
                    <v-card-text>
                        <v-list v-if="activeRewards.length">
                            <v-list-item v-for="reward in activeRewards" :key="reward.cartId">
                                <v-list-item-content>
                                    <v-list-item-title>Cart ID: {{ reward.cartId }}</v-list-item-title>
                                    <v-list-item-subtitle>Points: {{ reward.points }}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn color="error" small @click="removeReward(reward.cartId)"
                                        :loading="removingReward === reward.cartId">
                                        Remove
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                        <v-alert v-else type="info" text="No active rewards"></v-alert>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Modify Rewards Form -->
            <v-col cols="12">
                <v-card>
                    <v-card-title>Modify Rewards</v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" @submit.prevent="handleModify">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-select v-model="formData.cartId" :items="activeRewards" item-text="cartId"
                                        item-value="cartId" label="Select Cart" required
                                        :rules="[v => !!v || 'Cart is required']"></v-select>
                                </v-col>

                                <v-col cols="12" md="6">
                                    <v-text-field v-model="formData.points" label="New Points Amount" type="number"
                                        required :rules="[
                        v => !!v || 'Points are required',
                        v => v >= 0 || 'Points must be non-negative'
                      ]"></v-text-field>
                                </v-col>

                                <v-col cols="12">
                                    <v-textarea v-model="formData.reason" label="Modification Reason" rows="3" required
                                        :rules="[v => !!v || 'Reason is required']"></v-textarea>
                                </v-col>
                            </v-row>

                            <!-- Action Buttons -->
                            <v-row>
                                <v-col cols="12" class="text-right">
                                    <v-btn color="error" class="mr-4" @click="resetForm">
                                        Reset
                                    </v-btn>
                                    <v-btn color="primary" type="submit" :loading="loading" :disabled="!valid">
                                        Update Rewards
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>

            <!-- Modification History -->
            <v-col cols="12">
                <v-card>
                    <v-card-title>Modification History</v-card-title>
                    <v-card-text>
                        <v-data-table :headers="historyHeaders" :items="modificationHistory" :loading="loadingHistory"
                            class="elevation-1">
                            <template v-slot:item.points_change="{ item }">
                                <span :class="item.points_change > 0 ? 'success--text' : 'error--text'">
                                    {{ item.points_change > 0 ? '+' : '' }}{{ item.points_change }}
                                </span>
                            </template>
                            <template v-slot:item.modified_at="{ item }">
                                {{ formatDate(item.modified_at) }}
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
        removeRewardPoints,
        getRewardHistory
    } from '~/composables/commerce/marketing/useReward';

    // State
    const currentBalance = ref(0);
    const activeRewards = ref([]);
    const modificationHistory = ref([]);
    const loading = ref(false);
    const loadingHistory = ref(false);
    const removingReward = ref(null);
    const valid = ref(false);
    const form = ref(null);

    const formData = ref({
        cartId: '',
        points: '',
        reason: ''
    });

    const snackbar = ref({
        show: false,
        message: '',
        color: 'success'
    });

    // Table headers for history
    const historyHeaders = [{
            text: 'Date',
            value: 'modified_at'
        },
        {
            text: 'Cart ID',
            value: 'cart_id'
        },
        {
            text: 'Points Change',
            value: 'points_change'
        },
        {
            text: 'Reason',
            value: 'reason'
        },
        {
            text: 'Modified By',
            value: 'modified_by'
        }
    ];

    // Methods
    const loadInitialData = async () => {
        try {
            // Load balance
            const balance = await getRewardBalance();
            currentBalance.value = balance;

            // Load active rewards
            await loadActiveRewards();

            // Load modification history
            await loadHistory();
        } catch (error) {
            showError('Error loading initial data');
            console.error('Error loading initial data:', error);
        }
    };

    const loadActiveRewards = async () => {
        // Implementation depends on your API structure
        // This is a placeholder
        activeRewards.value = [];
    };

    const loadHistory = async () => {
        loadingHistory.value = true;
        try {
            const history = await getRewardHistory({
                pageSize: 10,
                currentPage: 1,
                filters: [{
                    field: 'type',
                    value: 'modification',
                    conditionType: 'eq'
                }]
            });
            modificationHistory.value = history.items || [];
        } catch (error) {
            showError('Error loading modification history');
            console.error('Error loading history:', error);
        } finally {
            loadingHistory.value = false;
        }
    };

    const handleModify = async () => {
        if (!valid.value) return;

        loading.value = true;
        try {
            // Remove existing rewards
            await removeRewardPoints(formData.value.cartId);

            // Add new rewards if points > 0
            if (formData.value.points > 0) {
                await useRewardPoints(formData.value.cartId);
            }

            // Refresh data
            await loadInitialData();

            showSuccess('Rewards modified successfully');
            resetForm();
        } catch (error) {
            showError('Error modifying rewards');
            console.error('Error modifying rewards:', error);
        } finally {
            loading.value = false;
        }
    };

    const removeReward = async (cartId) => {
        removingReward.value = cartId;
        try {
            await removeRewardPoints(cartId);
            await loadInitialData();
            showSuccess('Rewards removed successfully');
        } catch (error) {
            showError('Error removing rewards');
            console.error('Error removing rewards:', error);
        } finally {
            removingReward.value = null;
        }
    };

    const resetForm = () => {
        if (form.value) {
            form.value.reset();
        }
        formData.value = {
            cartId: '',
            points: '',
            reason: ''
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
        title: 'Modify Rewards',
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