import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useSharedCatalog = () => {
    const { makeRequest } = useMagentoApi();
  
    const fetchSharedCatalog = async () => await makeRequest("sharedCatalog");
    const updateSharedCatalog = async (id, data) => await makeRequest(`sharedCatalog/${id}`, "PUT", data);
  
    return { fetchSharedCatalog, updateSharedCatalog };
  };
  