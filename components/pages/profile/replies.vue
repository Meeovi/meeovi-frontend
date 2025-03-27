<template>
    <div>
        <section data-bs-version="5.1" class="people1 cid-u1nHNN1e0D" id="people1-6m">
        <div class="container">

          <div class="user-card" v-if="comments && comments.length">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <v-avatar size="120">
                  <NuxtImg loading="lazy" :src="`${comments?.media?.filename_disk}`" :alt="comments?.name" />
                </v-avatar>
                <div class="user_name mbr-fonts-style display-7">
                  <strong>{{ comments?.name}}</strong>
                </div>
                <p class="commentPublishedDate">{{ comments?.created_at }}</p>
              </div>

              <div class="col-12 col-md-6 col-lg-9">
                <div class="description">
                  <div class="user_text">
                    <p class="mbr-fonts-style small display-4">
                      Type: {{ comments?.type }}
                    </p>
                    <p class="mbr-fonts-style small display-4">
                      {{ comments?.response }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-else style="text-align: center;">{{ replies?.menus?.[0]?.description || 'No replies available' }}</div>
        </div>
      </section>
    </div>
</template>

<script setup>
import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || 'User'
    })

    const tab = ref(null);
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: comments
    } = await useAsyncData('comments', () => {
        return $directus.request($readItems('comments', {
          filter: {
                user: {
                    _eq: `${userDisplayName.value}`
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: replies
    } = await useAsyncData('replies', () => {
        return $directus.request($readItem('callouts', '1'))
    })

    useHead({
        title: 'Replies'
    })
</script>