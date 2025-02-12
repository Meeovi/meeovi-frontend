import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useProductTypes = () => {
  const { makeRequest } = useMagentoApi();

  const fetchProductTypes = async () => await makeRequest("products/types");

  return {
    fetchProductTypes,
  };
};
