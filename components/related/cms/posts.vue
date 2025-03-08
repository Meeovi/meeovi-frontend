<template>
  <div>
    <v-card class="features03 healthm5 cid-us2b5LfABW" id="features03-a5" data-sortbtn="btn-primary" width="500px" elevation="0">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <NuxtLink :to="post?.id ? `/social/feed/${post.id}` : '#'">
              <div class="items-wrapper" style="width: 1820px;">
                <div class="item features-without-image">
                  <div class="item-wrapper">
                    <NuxtImg loading="lazy" :src="`${$directus.url}assets/${post?.image?.filename_disk}`" :alt="post?.title || 'No Title'" />
                    <div class="card-box">
                      <p class="item-text mbr-fonts-style display-7">{{ post?.title }}</p>
                      <p class="item-text mbr-fonts-style display-7">{{ post?.content }}</p>
                      <div class="people-wrapper">
                        <div class="people-wrap">
                          <div class="image-wrap">
                            <NuxtImg loading="lazy" class="person" src="" :alt="post?.username || 'Anonymous'" />
                          </div>
                          <div class="rating-content">
                            <p class="mbr-rating mbr-fonts-style display-4">
                              Posted:
                              {{ post?.date_created ? new Date(post?.date_created).toLocaleDateString() : 'Unknown date' }}
                            </p>
                            <p class="item-name mbr-fonts-style display-4">
                              {{ post?.username || 'Unknown User' }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import createListBtn from '~/components/partials/globals/createListBtn.vue'

const model = ref(null)
const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const { post } = props;
</script>