
const updateCustomerDetails = async (customerData) => {
  try {
    const token = localStorage.getItem('customerToken');
    const config = useRuntimeConfig();
    
    const response = await fetch(`${config.public.commerceUrl}/rest/V1/customers/me`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ customer: customerData }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error updating customer details:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const updatedCustomerData = await response.json();
    console.log('Customer details updated:', updatedCustomerData);
    return updatedCustomerData;
  } catch (error) {
    console.error('Error updating customer details:', error);
    throw error;
  }
};

const fetchCustomerDetails = async () => {
  try {
    const token = localStorage.getItem('customerToken');
    const config = useRuntimeConfig();
    
    const response = await fetch(`${config.public.commerceUrl}/rest/V1/customers/me`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error fetching customer details:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const customerData = await response.json();
    console.log('Customer details:', customerData);
    return customerData;
  } catch (error) {
    console.error('Error fetching customer details:', error);
    throw error;
  }
};

export { fetchCustomerDetails, updateCustomerDetails };