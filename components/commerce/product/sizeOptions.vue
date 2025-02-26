<template>
    <v-row>
        <v-col cols="12">
            <h6>Size</h6>
        </v-col>

        <v-col cols="12">
            <v-select v-if="products?.options?.title === 'Size'" :items="values?.value" label="Select Size" item-value="value" item-title="label"
                single-line variant="solo"></v-select>
        </v-col>
    </v-row>
</template>

<script>
  const props = defineProps({
    sizes: {
      type: String,
      required: true
    }
  })
</script>