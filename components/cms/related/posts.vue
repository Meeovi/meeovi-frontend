<template>
  <div>
    <v-card class="features03 healthm5 cid-us2b5LfABW" id="features03-a5" data-sortbtn="btn-primary" width="500px">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <a :href="`/social/feed/${activity?.post_id}`">
              <div class="items-wrapper" style="width: 1820px;">
                <div class="item features-without-image">
                  <div class="item-wrapper">
                    <img :src="activity?.featured_image" :alt="activity?.title">
                    <div class="card-box">
                      <p class="item-text mbr-fonts-style display-7" v-html="activity?.title"></p>
                      <p class="item-text mbr-fonts-style display-7" v-html="activity?.content"></p>
                      <div class="people-wrapper">
                        <div class="people-wrap">
                          <div class="image-wrap">
                            <img class="person" src="" :alt="activity?.author?.name">
                          </div>
                          <div class="rating-content">
                            <div class="rating-wrapper">
                              <div class="rating-wrap">
                                <p class="mbr-rating mbr-fonts-style display-4">
                                  Posted: {{ new Date(activity?.publish_time).toLocaleDateString() }}
                                </p>
                              </div>
                            </div>
                            <p class="item-name mbr-fonts-style display-4">
                              {{ activity?.author?.name }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
  </v-card>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import createListBtn from '~/components/partials/createListBtn.vue'

  const model = ref(null)
  const props = defineProps({
    activity: {
      type: Object,
      required: true,
    },
  });
  const {
    activity
  } = props;
</script>