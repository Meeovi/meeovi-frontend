
export const useCategory = () => {
    const config = useRuntimeConfig();
    const fetchCategory = async (limit = 10) => {
      const { data } = await useFetch(`${config.public.shopwareApi}/category`, {
        method: 'POST',
        body: { limit },
      });
      return data.value;
    };
  
    return {
      fetchCategory,
    };
  };
  