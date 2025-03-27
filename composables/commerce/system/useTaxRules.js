import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useTaxRules = () => {
    const { makeRequest } = useMagentoApi();
  
    const fetchTaxRules = async () => await makeRequest("taxRules");
    const createTaxRule = async (data) => await makeRequest("taxRules", "POST", data);
    const updateTaxRule = async (id, data) => await makeRequest(`taxRules/${id}`, "PUT", data);
    const deleteTaxRule = async (id) => await makeRequest(`taxRules/${id}`, "DELETE");
  
    return { fetchTaxRules, createTaxRule, updateTaxRule, deleteTaxRule };
  };
  