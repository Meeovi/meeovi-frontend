import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useTaxRates = () => {
    const { makeRequest } = useMagentoApi();
  
    const fetchTaxRates = async () => await makeRequest("taxRates");
    const createTaxRate = async (data) => await makeRequest("taxRates", "POST", data);
    const updateTaxRate = async (id, data) => await makeRequest(`taxRates/${id}`, "PUT", data);
    const deleteTaxRate = async (id) => await makeRequest(`taxRates/${id}`, "DELETE");
  
    return { fetchTaxRates, createTaxRate, updateTaxRate, deleteTaxRate };
  };
  