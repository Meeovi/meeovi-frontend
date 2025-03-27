const createCustomerGroup = async (groupData) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/customerGroups`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error creating customer group:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const newGroupData = await response.json();
      console.log('Customer group created:', newGroupData);
      return newGroupData;
    } catch (error) {
      console.error('Error creating customer group:', error);
      throw error;
    }
  };
  
  const fetchCustomerGroups = async () => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/customerGroups/search`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error fetching customer groups:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const groupsData = await response.json();
      console.log('Customer groups:', groupsData);
      return groupsData;
    } catch (error) {
      console.error('Error fetching customer groups:', error);
      throw error;
    }
  };
  
  const updateCustomerGroup = async (groupId, groupData) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/customerGroups/${groupId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupData),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error updating customer group:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const updatedGroupData = await response.json();
      console.log('Customer group updated:', updatedGroupData);
      return updatedGroupData;
    } catch (error) {
      console.error('Error updating customer group:', error);
      throw error;
    }
  };
  
  const deleteCustomerGroup = async (groupId) => {
    try {
      const token = localStorage.getItem('customerToken');
      const config = useRuntimeConfig();
      
      const response = await fetch(`${config.public.commerceUrl}/rest/V1/customerGroups/${groupId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error deleting customer group:', errorText);
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Customer group deleted:', result);
      return result;
    } catch (error) {
      console.error('Error deleting customer group:', error);
      throw error;
    }
  };
  
  export { 
    createCustomerGroup, 
    fetchCustomerGroups, 
    updateCustomerGroup, 
    deleteCustomerGroup 
  };
  