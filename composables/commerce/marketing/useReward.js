/**
 * Composable for managing customer rewards in Magento
 */

// Get customer's reward points balance
const getRewardBalance = async () => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/reward/mine/balance`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching reward balance:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const balance = await response.json();
      console.log('Reward balance:', balance);
      return balance;
    } catch (error) {
      console.error('Error fetching reward balance:', error);
      throw error;
    }
  };
  
  // Use reward points
  const useRewardPoints = async (cartId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/default/V1/reward/mine/use-reward`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartId: cartId
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error using reward points:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Reward points applied:', result);
      return result;
    } catch (error) {
      console.error('Error using reward points:', error);
      throw error;
    }
  };
  
  // Remove reward points from cart
  const removeRewardPoints = async (cartId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/reward/mine/remove-reward`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartId: cartId
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error removing reward points:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Reward points removed:', result);
      return result;
    } catch (error) {
      console.error('Error removing reward points:', error);
      throw error;
    }
  };
  
  // Get reward points history
  const getRewardHistory = async (searchCriteria = {}) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      // Convert search criteria to query parameters
      const queryParams = new URLSearchParams();
      
      if (searchCriteria.filters) {
        searchCriteria.filters.forEach((filter, index) => {
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][field]`, filter.field);
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][value]`, filter.value);
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][conditionType]`, filter.conditionType);
        });
      }
  
      if (searchCriteria.pageSize) {
        queryParams.append('searchCriteria[pageSize]', searchCriteria.pageSize);
      }
  
      if (searchCriteria.currentPage) {
        queryParams.append('searchCriteria[currentPage]', searchCriteria.currentPage);
      }
  
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/reward/mine/history?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching reward history:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const history = await response.json();
      console.log('Reward history:', history);
      return history;
    } catch (error) {
      console.error('Error fetching reward history:', error);
      throw error;
    }
  };
  
  // Get reward points exchange rates
  const getRewardRates = async () => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/reward/mine/rates`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching reward rates:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const rates = await response.json();
      console.log('Reward rates:', rates);
      return rates;
    } catch (error) {
      console.error('Error fetching reward rates:', error);
      throw error;
    }
  };
  
  // Calculate reward points for cart
  const calculateRewardPoints = async (cartId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/reward/mine/calculate-reward-points`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartId: cartId
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error calculating reward points:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const points = await response.json();
      console.log('Calculated reward points:', points);
      return points;
    } catch (error) {
      console.error('Error calculating reward points:', error);
      throw error;
    }
  };
  
  export {
    getRewardBalance,
    useRewardPoints,
    removeRewardPoints,
    getRewardHistory,
    getRewardRates,
    calculateRewardPoints
  };
  