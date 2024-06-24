<template>
  <div>
    <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
      <h4>Related Spaces</h4>
      <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
        <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
          <div class="card-wrapper" :class="['ma-4', selectedClass]" @click="toggle">
            <div class="row">
              <div class="col-12 col-md-7">
                <div class="text-wrapper">
                  <h5 class="card-title mbr-fonts-style display-5">
                    <strong>{{ spaces?.name }}</strong></h5>
                  <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">Created:
                    {{ new Date(spaces?.dateCreated).toLocaleDateString() }}</h6>
                  <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">Last Activity:
                    {{ new Date(spaces?.lastActivity).toLocaleDateString() }}</h6>
                  <p class="mbr-text mbr-fonts-style mb-5 display-4"># of Members:
                    {{spaces?.totalMemberCount}}</p>
                  <p class="mbr-text mbr-fonts-style mb-5 display-4">Status:
                    {{spaces?.status}}</p>
                  <p class="mbr-text mbr-fonts-style mb-5 display-4" v-html="spaces?.description"></p>
                  <div class="mbr-section-btn"><a :href="`/social/group/${spaces?.id}`"
                      class="btn btn-warning display-4">Learn more</a></div>
                </div>
              </div>
              <div class="col-12 col-md-5">
                <div class="img-wrapper">
                  <img :src="`${spaces?.attachmentCover?.full}`" :alt="spaces?.name" cover />
                </div>
              </div>
            </div>
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
              </v-scale-transition>
            </div>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>

</template>

<script>
  import productCard from '../commerce/product/productCard.vue'

  export default {
    components: {
      productCard
    },
    data: () => ({
      model: null,
      //url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
  const props = defineProps({
    spaces: {
      type: Object,
      required: true,
    },
  });
  const {
    spaces
  } = props;
</script>