/**
 * Composable for managing pickup locations in Magento
 */

// Get all pickup locations
const getPickupLocations = async () => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/inventory/pickup-locations`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching pickup locations:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const locations = await response.json();
      console.log('Pickup locations:', locations);
      return locations;
    } catch (error) {
      console.error('Error fetching pickup locations:', error);
      throw error;
    }
  };
  
  // Search pickup locations with filters
  const searchPickupLocations = async (searchCriteria) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      // Convert search criteria to query parameters
      const queryParams = new URLSearchParams();
      
      if (searchCriteria.filters) {
        searchCriteria.filters.forEach((filter, index) => {
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][field]`, filter.field);
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][value]`, filter.value);
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][conditionType]`, filter.conditionType || 'eq');
        });
      }
  
      if (searchCriteria.sortOrders) {
        searchCriteria.sortOrders.forEach((sort, index) => {
          queryParams.append(`searchCriteria[sortOrders][${index}][field]`, sort.field);
          queryParams.append(`searchCriteria[sortOrders][${index}][direction]`, sort.direction);
        });
      }
  
      if (searchCriteria.pageSize) {
        queryParams.append('searchCriteria[pageSize]', searchCriteria.pageSize);
      }
  
      if (searchCriteria.currentPage) {
        queryParams.append('searchCriteria[currentPage]', searchCriteria.currentPage);
      }
  
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/inventory/pickup-locations-search?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error searching pickup locations:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const searchResults = await response.json();
      console.log('Pickup locations search results:', searchResults);
      return searchResults;
    } catch (error) {
      console.error('Error searching pickup locations:', error);
      throw error;
    }
  };
  
  // Get pickup location by ID
  const getPickupLocationById = async (locationId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/inventory/pickup-location/${locationId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching pickup location:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const location = await response.json();
      console.log('Pickup location:', location);
      return location;
    } catch (error) {
      console.error('Error fetching pickup location:', error);
      throw error;
    }
  };
  
  // Get pickup locations by distance
  const getPickupLocationsByDistance = async (address, radius = 50) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const searchCriteria = {
        filters: [
          {
            field: 'distance',
            value: radius,
            conditionType: 'lteq'
          }
        ],
        sortOrders: [
          {
            field: 'distance',
            direction: 'ASC'
          }
        ]
      };
  
      // Add address parameters
      const queryParams = new URLSearchParams({
        'searchRequest[area][radius]': radius,
        'searchRequest[area][searchTerm]': address.searchTerm || '',
        'searchRequest[area][latitude]': address.latitude || '',
        'searchRequest[area][longitude]': address.longitude || '',
        'searchRequest[area][city]': address.city || '',
        'searchRequest[area][region]': address.region || '',
        'searchRequest[area][regionId]': address.regionId || '',
        'searchRequest[area][countryId]': address.countryId || '',
        'searchRequest[area][postcode]': address.postcode || ''
      });
  
      // Add search criteria
      if (searchCriteria.filters) {
        searchCriteria.filters.forEach((filter, index) => {
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][field]`, filter.field);
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][value]`, filter.value);
          queryParams.append(`searchCriteria[filterGroups][0][filters][${index}][conditionType]`, filter.conditionType);
        });
      }
  
      if (searchCriteria.sortOrders) {
        searchCriteria.sortOrders.forEach((sort, index) => {
          queryParams.append(`searchCriteria[sortOrders][${index}][field]`, sort.field);
          queryParams.append(`searchCriteria[sortOrders][${index}][direction]`, sort.direction);
        });
      }
  
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/inventory/pickup-locations-search?${queryParams.toString()}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching pickup locations by distance:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const locations = await response.json();
      console.log('Pickup locations by distance:', locations);
      return locations;
    } catch (error) {
      console.error('Error fetching pickup locations by distance:', error);
      throw error;
    }
  };
  
  export {
    getPickupLocations,
    searchPickupLocations,
    getPickupLocationById,
    getPickupLocationsByDistance
  };
  