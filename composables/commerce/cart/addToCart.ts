import { ref, watch, onMounted } from 'vue'

interface LineItem {
  id: string
  variant_id: string
  quantity: number
  unit_price: number
  title?: string
  variant?: {
    id: string
    title: string
    prices?: Array<{
      amount: number
    }>
  }
}

interface Cart {
  id: string
  items: LineItem[]
  total?: number
}

export const addCart = () => {
  const config = useRuntimeConfig()
  const cart = ref<Cart | null>(null)
  const cartItems = ref<LineItem[]>([])
  const cartQuantity = ref<number>(0)
  const isLoading = ref<boolean>(false)
  const error = ref<any>(null)

  const createCart = async () => {
    try {
      const response = await fetch(`${config.public.medusaBackendUrl}/store/carts`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
        }
      });
      const { cart } = await response.json();
      localStorage.setItem("cart_id", cart.id);
      return cart.id;
    } catch (error) {
      console.error("Error creating cart:", error);
      return null;
    }
  };

  const addToCart = async (variant_id: string, quantity: number = 1) => {
    let cartId = localStorage.getItem("cart_id");

    if (!cartId) {
      cartId = await createCart();
      if (!cartId) return;
    }

    try {
      const response = await fetch(`${config.public.medusaBackendUrl}/store/carts/${cartId}/line-items`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
        },
        body: JSON.stringify({
          variant_id,
          quantity,
        }),
      });
      
      const { cart } = await response.json();
      console.log(cart);
      return cart;
    } catch (error) {
      console.error("Error adding to cart:", error);
    }

    await getCurrentCart() // Refresh cart data after adding item
  };

  // Update an item in the cart
  const updateQuantity = async (itemId: string, quantity: number) => {
    const cartId = localStorage.getItem("cart_id")

    if (!cartId) {
      return
    }

    fetch(`${config.public.medusaBackendUrl}/store/carts/${cartId}/line-items/${
      itemId
    }`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
        },
        body: JSON.stringify({
          quantity,
        }),
      })
      .then((res) => res.json())
      .then(({
        cart
      }) => {
        // use cart
        console.log(cart)
      })

      await getCurrentCart() // Refresh cart data after updating
  }

  // remove an item from the cart
  const removeItem = async (itemId: string) => {
    const cartId = localStorage.getItem("cart_id")

    if (!cartId) {
      return
    }

    fetch(`${config.public.medusaBackendUrl}/store/carts/${cartId}/line-items/${
      itemId
    }`, {
        credentials: "include",
        headers: {
          "x-publishable-api-key": config.public.medusaPublishableKey || "temp",
        },
        method: "DELETE",
      })
      .then((res) => res.json())
      .then(({
        parent: cart
      }) => {
        // use cart
        console.log(cart)
      })

      await getCurrentCart() // Refresh cart data after removing item
  }

  // Add getCurrentCart method
  const getCurrentCart = async () => {
    isLoading.value = true
    error.value = null
    const cartId = localStorage.getItem("cart_id")
    if (!cartId) return null

    try {
      const response = await fetch(`${config.public.medusaBackendUrl}/store/carts/${cartId}`, {
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
      cartQuantity.value = cartData.items.reduce((sum: any, item: { quantity: any }) => sum + item.quantity, 0)
      
      return cartData
    } catch (err) {
      error.value = err
      console.error("Error fetching cart:", err)
    } finally {
      isLoading.value = false
    }
  }

  // Add helper methods
  const getSubtotal = () => {
    return cartItems.value.reduce((sum, item: LineItem) => {
      return sum + (item.unit_price * item.quantity)
    }, 0)
  }

  const getItemQuantity = (variantId: string) => {
    const item = cartItems.value.find((item: LineItem) => item.variant_id === variantId)
    return item ? item.quantity : 0
  }

  const hasItem = (variantId: string) => {
    return cartItems.value.some((item: LineItem) => item.variant_id === variantId)
  }

  // Add watchers and lifecycle hooks
  onMounted(() => {
    getCurrentCart()
  })

  watch(cart, () => {
    if (cart.value) {
      cartQuantity.value = cart.value.items.reduce((sum, item: LineItem) => sum + item.quantity, 0)
    }
  })

  // Return all methods and reactive refs
  return {
    cart,
    cartItems,
    cartQuantity,
    addToCart,
    updateQuantity,
    removeItem,
    getCurrentCart,
    getItemQuantity,
    hasItem,
    getSubtotal,
    isLoading,
    error
  }
}