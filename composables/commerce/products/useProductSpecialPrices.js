import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useProductSpecialPrices = () => {
  const { makeRequest } = useMagentoApi();

  const fetchSpecialPrices = async () =>
    await makeRequest("products/special-price");

  const createSpecialPrice = async (data) =>
    await makeRequest("products/special-price", "POST", data);

  const updateSpecialPrice = async (data) =>
    await makeRequest("products/special-price", "PUT", data);

  const deleteSpecialPrice = async (sku) =>
    await makeRequest(`products/special-price/${sku}`, "DELETE");

  return {
    fetchSpecialPrices,
    createSpecialPrice,
    updateSpecialPrice,
    deleteSpecialPrice,
  };
};
