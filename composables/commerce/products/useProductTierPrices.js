import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useProductTierPrices = () => {
  const { makeRequest } = useMagentoApi();

  const fetchTierPrices = async (sku) =>
    await makeRequest(`products/${sku}/tier-prices`);

  const addTierPrice = async (sku, data) =>
    await makeRequest(`products/${sku}/tier-prices`, "POST", data);

  const updateTierPrice = async (sku, data) =>
    await makeRequest(`products/${sku}/tier-prices`, "PUT", data);

  const deleteTierPrice = async (sku) =>
    await makeRequest(`products/${sku}/tier-prices`, "DELETE");

  return {
    fetchTierPrices,
    addTierPrice,
    updateTierPrice,
    deleteTierPrice,
  };
};
