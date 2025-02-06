// composables/useDirectory.js
export const useDirectory = () => {
    const loading = ref(false);
    const error = ref(null);
  
    // Get countries
    const getCountries = async () => {
      try {
        loading.value = true;
        error.value = null;
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/directory/countries`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) throw new Error('Failed to fetch countries');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    // Get country by ID
    const getCountryById = async (countryId) => {
      try {
        loading.value = true;
        error.value = null;
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/directory/countries/${countryId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) throw new Error('Failed to fetch country');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    // Get currency information
    const getCurrencyInfo = async () => {
      try {
        loading.value = true;
        error.value = null;
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/directory/currency`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) throw new Error('Failed to fetch currency information');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    return {
      loading,
      error,
      getCountries,
      getCountryById,
      getCurrencyInfo
    };
  };
  