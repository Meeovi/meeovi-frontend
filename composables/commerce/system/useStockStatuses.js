import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useStockStatuses = () => {
    const { makeRequest } = useMagentoApi();
  
    const fetchStockStatuses = async () => await makeRequest("stockStatuses");
    const updateStockStatus = async (id, data) => await makeRequest(`stockStatuses/${id}`, "PUT", data);
  
    return { fetchStockStatuses, updateStockStatus };
  };
  