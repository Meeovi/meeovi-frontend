<template>
  <v-row>
    <v-col cols="12">
      <h6>Quantity</h6>
    </v-col>

    <v-col cols="12">
      <div class="d-flex align-center mb-4">
        <div class="d-flex align-center">
          <SfButton square variant="secondary" :disabled="count <= min" @click="dec()" size="sm">
            <SfIconRemove />
          </SfButton>
          <input :id="inputId" type="number" :min="min" :max="max" class="mx-2 w-16 text-center" :value="count"
            @change="handleOnChange" :disabled="!isValidProduct" />
          <SfButton square variant="secondary" :disabled="count >= max" @click="inc()" size="sm">
            <SfIconAdd />
          </SfButton>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
  import {
    SfButton,
    SfIconRemove,
    SfIconAdd,
    useId,
  } from '@storefront-ui/vue';

  // Counter setup
  const inputId = useId()
  const min = ref(1)
  const max = ref(999)
  const count = ref(1)
  // Counter methods
  function handleOnChange(event) {
    const currentValue = event.target.value
    const nextValue = parseFloat(currentValue)

    if (isNaN(nextValue)) {
      count.value = min.value
    } else {
      count.value = Math.min(Math.max(nextValue, min.value), max.value)
    }
  }

  const props = defineProps({
    productQty: {
      type: String,
      required: true,
    },
  });
</script>