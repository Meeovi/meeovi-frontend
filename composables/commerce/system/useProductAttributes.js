import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useProductAttributes = () => {
  const { makeRequest } = useMagentoApi();

  const fetchAttributes = async () => await makeRequest("products/attributes");

  const fetchAttributeByCode = async (attributeCode) =>
    await makeRequest(`products/attributes/${attributeCode}`);

  const createAttribute = async (data) =>
    await makeRequest("products/attributes", "POST", data);

  const updateAttribute = async (attributeCode, data) =>
    await makeRequest(`products/attributes/${attributeCode}`, "PUT", data);

  const deleteAttribute = async (attributeCode) =>
    await makeRequest(`products/attributes/${attributeCode}`, "DELETE");

  return {
    fetchAttributes,
    fetchAttributeByCode,
    createAttribute,
    updateAttribute,
    deleteAttribute,
  };
};
