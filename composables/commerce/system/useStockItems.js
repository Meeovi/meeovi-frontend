import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useStockItems = () => {
    const { makeRequest } = useMagentoApi();
  
    const fetchStockItems = async () => await makeRequest("stockItems");
    const updateStockItem = async (sku, data) => await makeRequest(`stockItems/${sku}`, "PUT", data);
  
    return { fetchStockItems, updateStockItem };
  };
  