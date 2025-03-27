import { useRuntimeConfig } from '#imports';

export const getCoupons = async () => {
  const config = useRuntimeConfig();
  try {
    const coupons = await $fetch(`${config.public.commerceUrl}/rest/default/V1/coupons/search`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return coupons;
  } catch (error) {
    console.error('Error fetching coupons:', error);
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized: Check your API token.');
    }
    return [];
  }
};

export const getCouponById = async (id) => {
  const config = useRuntimeConfig();
  try {
    const coupon = await $fetch(`${config.public.commerceUrl}/rest/default/V1/coupons/${id}`, {
      headers: {
        'Authorization': `Bearer ${config.public.commerceApiToken}`
      }
    });
    return coupon;
  } catch (error) {
    console.error(`Error fetching coupon with ID ${id}:`, error);
    return null;
  }
};