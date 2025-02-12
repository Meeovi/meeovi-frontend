import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useTaxClasses = () => {
  const { makeRequest } = useMagentoApi();

  const fetchTaxClasses = async () => {
    return await makeRequest("taxClasses");
  };

  const createTaxClass = async (data) => {
    return await makeRequest("taxClasses", "POST", data);
  };

  const updateTaxClass = async (id, data) => {
    return await makeRequest(`taxClasses/${id}`, "PUT", data);
  };

  const deleteTaxClass = async (id) => {
    return await makeRequest(`taxClasses/${id}`, "DELETE");
  };

  return { fetchTaxClasses, createTaxClass, updateTaxClass, deleteTaxClass };
};
