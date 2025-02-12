import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useSalesRules = () => {
    const { makeRequest } = useMagentoApi();
  
    const fetchSalesRules = async () => await makeRequest("salesRules");
    const createSalesRule = async (data) => await makeRequest("salesRules", "POST", data);
    const updateSalesRule = async (id, data) => await makeRequest(`salesRules/${id}`, "PUT", data);
    const deleteSalesRule = async (id) => await makeRequest(`salesRules/${id}`, "DELETE");
  
    return { fetchSalesRules, createSalesRule, updateSalesRule, deleteSalesRule };
  };
  