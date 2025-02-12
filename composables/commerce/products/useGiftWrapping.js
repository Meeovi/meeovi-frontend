import { useMagentoApi } from "~/composables/commerce/useMagentoApi";

export const useGiftWrapping = () => {
    const { makeRequest } = useMagentoApi();
  
    const fetchGiftWrappingOptions = async () => await makeRequest("giftWrapping");
    const createGiftWrappingOption = async (data) => await makeRequest("giftWrapping", "POST", data);
    const updateGiftWrappingOption = async (id, data) => await makeRequest(`giftWrapping/${id}`, "PUT", data);
    const deleteGiftWrappingOption = async (id) => await makeRequest(`giftWrapping/${id}`, "DELETE");
  
    return { fetchGiftWrappingOptions, createGiftWrappingOption, updateGiftWrappingOption, deleteGiftWrappingOption };
  };
  