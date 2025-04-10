<template>
  <div class="departmentPage">
    <div v-if="department?.id === 'Deals'">
      <v-toolbar :style="`background-color: ${department?.color}; color: ${department?.colortext}`"
        :title="department?.name"></v-toolbar>
      <deals :category="department?.id" />
    </div>

    <v-card variant="text" v-else>
      <v-toolbar :style="`background-color: ${department?.color}; color: ${department?.colortext}`"
        :title="department?.name">
        <v-slide-group show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle" v-bind="props"
                  append-icon="fas fa-caret-down" variant="text">
                  Categories
                </v-btn>
              </template>
              <v-list class="departmentMenu">
                <v-row>
                  <v-col cols="3" v-for="categories in department?.categories" :key="categories?.categories_id?.id">
                    <v-list-item>
                      <NuxtLink :to="`/departments/categories/${categories?.categories_id?.id}`">
                        {{ categories?.categories_id?.name }}</NuxtLink>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-list>
            </v-menu>
          </v-slide-group-item>

          <v-slide-group-item v-for="menu in department?.menus" :key="menu" v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle" :href="`${menu?.url}`">
              {{ menu?.name }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-toolbar>

      <!--Department Banner Slider-->
      <div>
        <div v-if="department?.slug === 'Travel'">
          <travel :category="department?.slug" />
        </div>
        <div v-else-if="department?.slug === 'Appstore'">
          <appstore :category="department?.slug" />
        </div>
        <div v-else-if="department?.slug === 'Adult'">
          <adultstore :category="department?.slug" />
        </div>
        <div v-else-if="department?.slug === 'Health'">
          <health :category="department?.slug" />
        </div>
        <div v-else-if="department?.slug === 'Real Estate'">
          <realestate :category="department?.slug" />
        </div>
        <div v-else-if="department?.slug === 'Pantry'">
          <pantry :category="department?.slug" />
        </div>
        <div v-else-if="department?.slug === 'Weather'">
          <weather :category="department?.slug" />
        </div>
        <div v-else-if="department?.slug === 'Time'">
          <timeComponent :category="department?.slug" />
        </div>

        <div v-else>
          <NuxtImg class="departmentBanner" loading="lazy"
            :src="`${$directus?.url}assets/${department?.image?.filename_disk}`" :alt="department?.name" cover />
        </div>
      </div>
    </v-card>

    <v-row class="departmentRow">
      <!--Vibez Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[0]?.name }} {{ department?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="shorts in department?.shorts"
            :key="shorts">
            <shorts :short="shorts?.shorts_id" :class="['ma-4', selectedClass]" @click="toggle" />
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
              </v-scale-transition>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

      <!--Best Seller Product Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[1]?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="department in best?.products" :key="department">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="products in department?.products_id" :key="products">
              <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-sheet>

      <!--List of latest products in the department-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[2]?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="department in latest?.products" :key="department">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
              v-for="products in department?.products_id" :key="products">
              <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-sheet>

      <!--List of products in the department-->
      <v-col cols="3" v-for="department in department?.products" :key="department.id">
        <div v-for="products in department?.products_id" :key="products.slug">
          <productCard :product="products" />
        </div>
      </v-col>

      <!--List of events in this department-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[3]?.name }} {{ department?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="department in department?.events" :key="department">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="products in department?.events_id"
              :key="products">
              <productCard :product="products" :class="['ma-4', selectedClass]" @click="toggle" />
              <div class="d-flex fill-height align-center justify-center">
                <v-scale-transition>
                  <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                </v-scale-transition>
              </div>
            </v-slide-group-item>
          </div>
        </v-slide-group>
      </v-sheet>
      <!---->

      <!--List of spaces in the department-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[4]?.name }} {{ department?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="spaces in department?.spaces"
            :key="spaces">
            <spaces :space="spaces?.spaces_id" :class="['ma-4', selectedClass]" @click="toggle" />
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
              </v-scale-transition>
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

      <v-col cols="12">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[5]?.name }} {{ department?.name }}</h4>
        <relatedcreators />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  //import videobar from '~/components/menus/videobar.vue'
  import relatedcreators from '~/components/contacts/relatedcreators.vue'
  import shorts from '~/components/vibez/shorts.vue'
  import spaces from '~/components/spaces/spaces.vue'
  import productCard from '~/components/product/productCard.vue'
  import travel from '~/components/categories/travel.vue'
  import appstore from '~/components/categories/appstore.vue'
  import adultstore from '~/components/categories/adultstore.vue'
  import realestate from '~/components/categories/realestate.vue'
  import health from '~/components/categories/health.vue'
  import pantry from '~/components/categories/pantry.vue'
  import deals from '~/components/categories/deals.vue'
  import timeComponent from '~/components/categories/time/time.vue'
  import weather from '~/components/categories/weather/weather.vue'

  const route = useRoute()
  const model = ref(null)
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: department
  } = await useAsyncData('department', () => {
    return $directus.request($readItem('departments', route.params.id, {
      fields: ['*',
        'categories.categories_id.*',
        'spaces.spaces_id.*',
        'events.events_id.*',
        'products.products_id.*',
        'products.products_id.image.*',
        'menus.*',
        'shorts.shorts_id.*',
        'image.*'
      ]
    }))
  })

  const {
    data: best
  } = await useAsyncData('best', () => {
    return $directus.request($readItem('departments', route.params.id, {
      fields: ['*', 
        'products.products_id.*',
        'collections.collections_id.*',
      ],
      limit: 10,
      filter: {
        collections: {
          collections_id: {
            name: {
              _eq: "Best Sellers"
            }
          }
        }
      }
    }))
  })

  const {
    data: latest
  } = await useAsyncData('latest', () => {
    return $directus.request($readItem('departments', route.params.id, {
      fields: ['*', {
        'products': ['products_id']
      }],
      limit: 10,
      filter: {
        products: {
          products_id: {
            status: {
              _eq: "published"
            }
          }
        }
      }
    }))
  })

  const {
    data: callouts
  } = await useAsyncData('callouts', () => {
    return $directus.request($readItem('callouts', '2'))
  })

  useHead({
    title: computed(() => department?.value?.name || 'Department Page')
  });
</script>