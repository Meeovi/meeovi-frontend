<template>
  <div class="items-start xs:flex">
    <div class="flex flex-col items-stretch xs:items-center xs:inline-flex">
      <div class="flex border border-neutral-300 rounded-md">
        <SfButton variant="tertiary" :disabled="count <= min" square class="rounded-r-none p-3" :aria-controls="inputId"
          aria-label="Decrease value" @click="dec()">
          <SfIconRemove />
        </SfButton>
        <input :id="inputId" v-model="count" type="number"
          class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          :min="min" :max="max" @input="handleOnChange" />
        <SfButton variant="tertiary" :disabled="count >= max" square class="rounded-l-none p-3" :aria-controls="inputId"
          aria-label="Increase value" @click="inc()">
          <SfIconAdd />
        </SfButton>
      </div>
      <p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
        <strong class="text-neutral-900">{{ max }}</strong> in stock
      </p>
    </div>
    <SfButton size="sm" class="w-full xs:ml-4">
      <template #prefix>
        <SfIconShoppingCart size="sm" />
      </template>
      Add to cart
    </SfButton>
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    computed,
    watch
  } from 'vue'
  import {
    useMutation
  } from '@vue/apollo-composable'
  import {
    SfButton,
    SfIconAdd,
    SfIconRemove,
    SfIconShoppingCart,
  } from '@storefront-ui/vue'
  import {
    clamp
  } from '@storefront-ui/shared';
  import {
    useCounter
  } from '@vueuse/core';

  const inputId = useId();
  const min = ref(1);
  const max = ref(999);
  const {
    count,
    inc,
    dec,
    set
  } = useCounter(1, {
    min: min.value,
    max: max.value
  });

  function handleOnChange(event: Event) {
    const currentValue = (event.target as HTMLInputElement)?.value;
    const nextValue = parseFloat(currentValue);
    set(clamp(nextValue, min.value, max.value));
  }
</script>

<style scoped>
  .add-to-cart-button {
    min-width: 160px;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>