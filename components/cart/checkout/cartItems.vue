<template>
    <div>
        <v-overlay v-model="loading" class="align-center justify-center">
            <v-progress-circular indeterminate></v-progress-circular>
        </v-overlay>

        <v-alert v-if="error" type="error" closable class="mb-4">
            {{ error }}
        </v-alert>

        <h2 class="text-xl">Your Basket</h2>
        <span class="text-sm">{{ count }} items</span>

        <v-list v-if="cartItems.length">
            <v-list-item v-for="cartItem in cartItems" :key="cartItem.id" class="mb-4">
                <v-row align="center">
                    <!-- Product Image -->
                    <v-col cols="12" sm="3">
                        <NuxtImg v-if="item.type == 'product'" :src="cartItem.cover?.url" :alt="cartItem.label" height="176" width="176" class="rounded-lg" cover />
                    </v-col>

                    <!-- Product Details -->
                    <v-col cols="12" sm="9">
                        <div class="d-flex flex-column">
                            <v-list-item-title class="text-h6 mb-1">
                                {{ cartItem.label }}
                            </v-list-item-title>

                            <!--<div class="mb-2">
                                <div class="text-body-2">
                                    <span class="mr-1">Size:</span>
                                    <span class="font-weight-medium">{{ cartItem.size }}</span>
                                </div>
                                <div class="text-body-2">
                                    <span class="mr-1">Color:</span>
                                    <span class="font-weight-medium">{{ cartItem.color }}</span>
                                </div>
                            </div>-->

                            <div class="d-flex align-center justify-space-between flex-wrap">
                                <v-text-field v-model="cartItem.quantity" type="number" :min="1" :max="10" hide-details
                                    density="compact" class="quantity-input" style="max-width: 100px"
                                    @change="updateQuantity(cartItem)">
                                    <template v-slot:prepend>
                                        <v-btn density="compact" icon="mdi-minus" variant="text"
                                            @click="decreaseQuantity(cartItem)" :disabled="cartItem.quantity <= 1"></v-btn>
                                    </template>
                                    <template v-slot:append>
                                        <v-btn density="compact" icon="mdi-plus" variant="text"
                                            @click="increaseQuantity(cartItem)" :disabled="cartItem.quantity >= 10"></v-btn>
                                    </template>
                                </v-text-field>

                                <div class="d-flex align-center">
                                    <span class="text-h6 font-weight-bold">${{ (cartItem.price.totalPrice * cartItem.quantity).toFixed(2) }}</span>
                                    <v-btn class="ml-4" icon="mdi-delete" variant="text" color="error" @click="removeItem({ id: item.id })">Remove</v-btn>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-list-item>
        </v-list>

        <v-card v-else class="text-center pa-4">
            <v-card-text>Your cart is empty</v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { useCart } from '@shopware/composables';

const { count, refreshCart, cartItems, removeItem, totalPrice } = useCart();

onMounted(() => {
  refreshCart();
});

</script>