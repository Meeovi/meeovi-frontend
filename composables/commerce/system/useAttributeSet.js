import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useAttributeSets = () => {
  const { makeRequest } = useMagentoApi();

  const fetchAttributeSets = async () => await makeRequest("products/attribute-sets");

  const fetchAttributeSetById = async (setId) =>
    await makeRequest(`products/attribute-sets/${setId}`);

  const createAttributeSet = async (data) =>
    await makeRequest("products/attribute-sets", "POST", data);

  const updateAttributeSet = async (setId, data) =>
    await makeRequest(`products/attribute-sets/${setId}`, "PUT", data);

  const deleteAttributeSet = async (setId) =>
    await makeRequest(`products/attribute-sets/${setId}`, "DELETE");

  return {
    fetchAttributeSets,
    fetchAttributeSetById,
    createAttributeSet,
    updateAttributeSet,
    deleteAttributeSet,
  };
};
