// Fetch customer's billing address
const fetchBillingAddress = async (customerId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/default/V1/customers/${customerId}/billingAddress`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching billing address:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const billingAddress = await response.json();
      console.log('Billing address:', billingAddress);
      return billingAddress;
    } catch (error) {
      console.error('Error fetching billing address:', error);
      throw error;
    }
  };
  
  // Update customer's billing address
  const updateBillingAddress = async (customerId, addressData) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/default/V1/customers/${customerId}/billingAddress`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: addressData,
          defaultBilling: true
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error updating billing address:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const updatedBillingAddress = await response.json();
      console.log('Billing address updated:', updatedBillingAddress);
      return updatedBillingAddress;
    } catch (error) {
      console.error('Error updating billing address:', error);
      throw error;
    }
  };
  
  // Fetch customer's shipping address
  const fetchShippingAddress = async (customerId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/default/V1/customers/${customerId}/shippingAddress`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching shipping address:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const shippingAddress = await response.json();
      console.log('Shipping address:', shippingAddress);
      return shippingAddress;
    } catch (error) {
      console.error('Error fetching shipping address:', error);
      throw error;
    }
  };
  
  // Update customer's shipping address
  const updateShippingAddress = async (customerId, addressData) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/default/V1/customers/${customerId}/shippingAddress`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: addressData,
          defaultShipping: true
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error updating shipping address:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const updatedShippingAddress = await response.json();
      console.log('Shipping address updated:', updatedShippingAddress);
      return updatedShippingAddress;
    } catch (error) {
      console.error('Error updating shipping address:', error);
      throw error;
    }
  };
  
  // Create new address and set as billing/shipping or both
  const createCustomerAddress = async (customerId, addressData, type = 'both') => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const payload = {
        address: {
          ...addressData,
          default_billing: type === 'both' || type === 'billing',
          default_shipping: type === 'both' || type === 'shipping'
        }
      };
  
      const response = await fetch(`${config.public.commerceUrl}/rest/default/V1/customers/${customerId}/addresses`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error creating address:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const newAddress = await response.json();
      console.log('New address created:', newAddress);
      return newAddress;
    } catch (error) {
      console.error('Error creating address:', error);
      throw error;
    }
  };
  
  // Delete customer address
  const deleteCustomerAddress = async (customerId, addressId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/default/V1/customers/${customerId}/addresses/${addressId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error deleting address:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Address deleted:', result);
      return result;
    } catch (error) {
      console.error('Error deleting address:', error);
      throw error;
    }
  };
  
  // Export all functions
  export {
    updateAddressDetails,
    fetchAddressDetails,
    fetchBillingAddress,
    updateBillingAddress,
    fetchShippingAddress,
    updateShippingAddress,
    createCustomerAddress,
    deleteCustomerAddress
  };
  