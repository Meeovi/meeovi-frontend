import { useCookie } from '#app';

export const useCart = () => {
  const config = useRuntimeConfig();
  const cartId = useState('cartId', () => null); // State for storing cart ID
  const cartCookie = useCookie('cart-id'); // Cookie for persisting cart ID

  /**
   * Initialize the cart by creating a guest cart via Magento REST API
   */
  const initializeCart = async () => {
    if (!cartCookie.value) {
      try {
        // Replace '${config.public.commerceUrl}' with your Magento base URL
        const url = `${config.public.commerceUrl}/rest/V1/guest-carts`;

        // Create an empty cart by calling the Magento REST API
        const newCartId = await $fetch(url, {
          method: 'POST',
        });

        cartId.value = newCartId; // Store the cart ID in state
        cartCookie.value = newCartId; // Save the cart ID in a cookie
      } catch (error) {
        console.error('Error initializing cart:', error);
      }
    } else {
      cartId.value = cartCookie.value; // Restore the cart ID from the cookie
    }
  };

  /**
   * Add a product to the cart
   * @param {Object} product - The product details to add to the cart
   */
  const addToCart = async (product) => {
    try {
      const url = `${config.public.commerceUrl}/rest/V1/guest-carts/${cartId.value}/items`;

      // Prepare the payload for adding a product to the cart
      const payload = {
        cartItem: {
          quote_id: cartId.value,
          sku: product.sku,
          qty: product.qty,
        },
      };

      // Send the request to add the product
      const response = await $fetch(url, {
        method: 'POST',
        body: payload,
      });

      console.log('Product added to cart:', response);
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  /**
   * Fetch cart details
   */
  const getCart = async () => {
    try {
      const url = `${config.public.commerceUrl}/rest/V1/guest-carts/${cartId.value}`;
      const response = await $fetch(url, {
        method: 'GET',
      });

      console.log('Cart details:', response);
      return response;
    } catch (error) {
      console.error('Error fetching cart details:', error);
    }
  };

  return {
    cartId,
    initializeCart,
    addToCart,
    getCart,
  };
};
