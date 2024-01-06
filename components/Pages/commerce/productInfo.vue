<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Features</v-tab>
      <v-tab value="two">Specifications</v-tab>
      <v-tab value="three">Reviews</v-tab>
      <v-tab value="four">FAQS</v-tab>
      <v-tab value="five">Delivery & Returns</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <features />
        </v-window-item>

        <v-window-item value="two">
          <specifications />
        </v-window-item>

        <v-window-item value="three">
          <comments />
        </v-window-item>

        <v-window-item value="four">
          <faqs />
        </v-window-item>

        <v-window-item value="five">
          <deliveryReturns />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script>
import features from '../commerce/info/features.vue'
import specifications from '../commerce/info/specifications.vue'
import faqs from '../commerce/info/faqs.vue'
import deliveryReturns from '../commerce/info/deliveryReturns.vue'
import comments from '../../user/comments.vue'

  export default {
    components: { features, specifications, faqs, deliveryReturns, comments },
    data: () => ({
      tab: null,
    }),
  }
</script>