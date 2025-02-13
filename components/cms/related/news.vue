<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <NuxtImg loading="lazy" class="align-end text-white" height="200" :src="news?.featured_image" :alt="news?.title" cover>
        <v-card-title>{{ news?.title}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pt-4">
        {{ new Date(news?.publish_time).toLocaleDateString() }}
      </v-card-subtitle>

      <v-card-text>
        <div>{{ news?.categories?.title }}</div>

        <div>{{ news?.short_content }}</div>
      </v-card-text>

      <v-card-actions>
        <share />

        <v-btn color="orange" text="Read More" :href="`/news/article/${news?.post_id}`"></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import share from '~/components/partials/globals/share.vue'

  const props = defineProps({
    news: {
      type: Object,
      required: true,
    },
  });
  const {
    news
  } = props;
</script>