<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel :title="faqs?.question" :text="faqs?.answer">
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
  const props = defineProps({
    faqs: {
      type: String,
      required: true,
    },
  });
</script>