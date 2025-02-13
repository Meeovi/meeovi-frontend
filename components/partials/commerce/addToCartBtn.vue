<template>
  <div>
    <v-row>
      <v-col>
        <v-text-field v-model="quantity" type="number" min="1" max="99" label="Quantity"
          :disabled="loading"></v-text-field>
      </v-col>

      <v-col>
        <v-btn color="warning" text="Add to Cart" :loading="loading" :disabled="loading"
          @click="handleAddToCart"></v-btn>
      </v-col>
    </v-row>
    <!-- Error message display -->
    <v-alert v-if="error" type="error" variant="tonal" class="mt-2">
      {{ error }}
    </v-alert>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    useCart
  } from '~/composables/commerce/cart/useCart'

  const props = defineProps({
    product: {
      type: Object,
      required: true,
      validator: (product) => {
        return product && product.sku // ensure product has required properties
      }
    }
  })

  const quantity = ref(1)
  const {
    loading,
    error,
    addToCart
  } = useCart()
  const emit = defineEmits(['item-added'])

  const handleAddToCart = async () => {
    try {
      await addToCart({
        sku: props.product.sku,
        qty: quantity.value
      })

      emit('item-added', {
        product: props.product,
        quantity: quantity.value
      })

      // Optionally reset quantity after successful add
      quantity.value = 1
    } catch (err) {
      // Error is handled by the composable
      console.error('Failed to add to cart:', err)
    }
  }
</script>