// composables/useCart.js

export const useCart = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.medusaBackendUrl
  const cart = ref(null)
  const cartItems = ref([])
  const cartQuantity = ref(0)

  // Get current cart state
  const getCurrentCart = async () => {
    const cartId = localStorage.getItem("cart_id")
    if (!cartId) return null

    try {
      const response = await fetch(`${baseURL}/store/carts/${cartId}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
          "Content-Type": "application/json",
        },
      })
      const { cart: cartData } = await response.json()
      
      // Update reactive references
      cart.value = cartData
      cartItems.value = cartData.items || []
      cartQuantity.value = cartData.items.reduce((sum, item) => sum + item.quantity, 0)
      
      return cartData
    } catch (error) {
      console.error("Error fetching cart:", error)
      return null
    }
  }

  // Retrieve cart
  const retrieveCart = async () => {
    const cartId = localStorage.getItem("cart_id")
    fetch(`${baseURL}/store/carts/${cartId}`, {
        method: "GET",
        credentials: "include",
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
          "Content-Type": "application/json",
        },
      })
      .then((res) => res.json())
      .then(({
        cart
      }) => {
        return cart
      })
  }

  // Update cart
  const updateCart = async (cartId, data) => {
    fetch(`${baseURL}/store/carts/${cartId}`, {
        method: "POST",
        credentials: "include",
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then(({
        cart
      }) => {
        return cart
      })
  }

  // Set Cart's Customer
  const setCartCustomer = async (cartId, data) => {
    fetch(`${baseURL}/store/carts/${cartId}/customer`, {
        method: "POST",
        credentials: "include",
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((res) => res.json())
      .then(({
        cart
      }) => {
        return cart
      })
  }

  // Watch for cart changes
  watch(cart, () => {
    if (cart.value) {
      cartQuantity.value = cart.value.items.reduce((sum, item) => sum + item.quantity, 0)
    }
  })

  // Initialize cart on mount
  onMounted(() => {
    getCurrentCart()
  })

  return {
    cart,
    cartItems,
    cartQuantity,
    getCurrentCart,
    getCart,
    retrieveCart,
    updateCart,
    setCartCustomer
  }
}