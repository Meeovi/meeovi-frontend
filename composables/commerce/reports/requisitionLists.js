// composables/useRequisitionList.js
export const useRequisitionList = () => {
    const loading = ref(false);
    const error = ref(null);
  
    // Get list of requisition lists
    const getRequisitionLists = async () => {
      try {
        loading.value = true;
        error.value = null;
        const token = localStorage.getItem('customerToken');
        
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/requisition_lists`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) throw new Error('Failed to fetch requisition lists');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    // Create new requisition list
    const createRequisitionList = async (listData) => {
      try {
        loading.value = true;
        error.value = null;
        const token = localStorage.getItem('customerToken');
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/requisition_lists`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(listData)
        });
  
        if (!response.ok) throw new Error('Failed to create requisition list');
        return await response.json();
      } catch (err) {
        error.value = err.message;
        throw err;
      } finally {
        loading.value = false;
      }
    };
  
    // Delete requisition list
    const deleteRequisitionList = async (listId) => {
      try {
        loading.value = true;
        error.value = null;
        const token = localStorage.getItem('customerToken');
  
        const response = await fetch(`${config.public.commerceUrl}/rest/V1/requisition_lists/${listId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
  
        if (!response.ok) throw new Error('Failed to delete requisition list');
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
      getRequisitionLists,
      createRequisitionList,
      deleteRequisitionList
    };
  };
  