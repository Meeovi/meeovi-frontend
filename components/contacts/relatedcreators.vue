<template>
    <div>
        <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
            <h4>Related Creators</h4>
            <v-slide-group v-model="model" class="pa-4" center-active>
                <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
                    <creators />
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import creators from '~/components/contacts/creators.vue'
import followButton from "../partials/cms/followButton.vue"

const model = ref(null)

  const props = defineProps({
    customers: {
      type: Object,
      required: true,
    },
  });
  const {
    customers
  } = props;
</script>