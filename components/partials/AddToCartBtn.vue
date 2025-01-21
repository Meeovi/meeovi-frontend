<template>
  <div class="flex items-center gap-4">
    <div class="flex items-center">
      <SfButton square variant="secondary" :disabled="quantity <= min || loading"
        @click="handleQuantityChange('decrease')">
        <SfIconRemove />
      </SfButton>
      <input :id="inputId" type="number" :min="min" :max="max" class="appearance-none mx-2 w-8 text-center"
        :value="quantity" @change="handleInputChange" :disabled="loading" />
      <SfButton square variant="secondary" :disabled="quantity >= max || loading"
        @click="handleQuantityChange('increase')">
        <SfIconAdd />
      </SfButton>
    </div>

    <SfButton :disabled="loading || !isValidProduct" @click="handleAddToCart" class="add-to-cart-button">
      <SfIconShoppingCartCheckout class="mr-2" />
      {{ buttonText }}
    </SfButton>
  </div>
</template>

<script setup>
  import {
    ref,
    computed,
    watch
  } from 'vue'
  import {
    useMutation
  } from '@vue/apollo-composable'
  import {
    SfButton,
    SfIconAdd,
    SfIconRemove,
    SfIconShoppingCartCheckout
  } from '@storefront-ui/vue'
  import {
    ADD_PRODUCT_TO_CART
  } from '~/graphql/commerce/mutations/cart/addProductToCart'
  import {
    useNotification
  } from '~/composables/useNotification'

  const props = defineProps({
    product: {
      type: Object,
      required: true,
      validator: (prop) => {
        return prop.id && prop.sku && prop.name && prop.price
      }
    },
    cartId: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    loading: {
      type: Boolean,
      default: false
    }
  })

  // Constants
  const min = 1
  const max = 99
  const inputId = `quantity-${props.product.sku}`

  // State
  const quantity = ref(props.quantity || 1)
  const {
    notify
  } = useNotification()

  // Cart mutation
  const {
    mutate: addToCart,
    loading: addingToCart
  } = useMutation(ADD_PRODUCT_TO_CART)

  // Computed
  const isValidProduct = computed(() => {
    return props.product?.sku && props.product?.price && props.cartId
  })

  const buttonText = computed(() => {
    if (addingToCart.value) return 'Adding...'
    if (!isValidProduct.value) return 'Unavailable'
    return 'Add to Cart'
  })

  // Methods
  const handleQuantityChange = (action) => {
    if (action === 'increase' && quantity.value < max) {
      quantity.value++
    } else if (action === 'decrease' && quantity.value > min) {
      quantity.value--
    }
  }

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value)

    if (isNaN(value)) {
      quantity.value = min
    } else if (value > max) {
      quantity.value = max
    } else if (value < min) {
      quantity.value = min
    } else {
      quantity.value = value
    }
  }

  const handleAddToCart = async () => {
    if (!isValidProduct.value) return

    try {
      const {
        data
      } = await addToCart({
        input: {
          cart_id: props.cartId,
          cart_items: [{
            data: {
              quantity: quantity.value,
              sku: props.product.sku
            }
          }]
        }
      })

      if (data?.addProductsToCart?.cart) {
        notify({
          type: 'success',
          message: `Added ${quantity.value} ${props.product.name} to cart`
        })
      } else {
        throw new Error('Failed to add product to cart')
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
      notify({
        type: 'error',
        message: 'Failed to add item to cart'
      })
    }
  }

  // Watch for quantity changes to emit updates
  watch(quantity, (newValue) => {
    emit('update:quantity', newValue)
  })

  const emit = defineEmits(['update:quantity'])
</script>

<style scoped>
  .add-to-cart-button {
    min-width: 160px;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>