import { ref, computed } from 'vue';

export const useProductOptions = () => {
  const selectedOptions = ref({});
  const availableOptions = ref([]);

  const setOption = (attributeCode, value) => {
    selectedOptions.value[attributeCode] = value;
  };

  const isOptionSelected = (attributeCode) => !!selectedOptions.value[attributeCode];

  return {
    availableOptions,
    selectedOptions,
    setOption,
    isOptionSelected,
  };
};
