<template>
  <article class="w-full p-4 border rounded-md reviewBox">
    <p class="pb-2 font-medium" v-html="review?.content || 'No summary provided'"></p>
    <header class="flex flex-col items-start pb-4 md:flex-row md:justify-between">
      <div class="flex items-start">
        <span class="text-sm text-neutral-900">{{ review?.title || 'Anonymous' }}</span>
        <span class="flex items-center pr-2 text-xs text-neutral-500">
          <SfRating :value="review?.points" :max="5" size="xs" />
          {{ new Date(review?.createdAt).toLocaleDateString() }}
        </span>
      </div>
    </header>
    <div class="text-sm text-neutral-900" v-html="review?.comment || 'No review text available'"></div>
  </article>
</template>

<script lang="ts" setup>
  import {
    ref,
    computed
  } from 'vue';
  import {
    SfRating
  } from '@storefront-ui/vue';

  const props = defineProps({
    review: {
      type: Object,
      required: true,
    },
  });
</script>