<template>
  <div class="departmentPage">
    <div v-if="category?.id === 48 && category?.handle === 'Deals'">
      <v-toolbar :style="`background-color: ${category?.color}; color: ${category?.colortext}`"
        :title="category?.name"></v-toolbar>
      <deals :category="category?.id" />
    </div>
    <v-card variant="text" v-else>
      <v-toolbar :style="`background-color: ${category?.color}; color: ${category?.colortext}`"
        :title="category?.name">
        <v-slide-group show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle }">
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle" v-bind="props"
                  append-icon="fas fa-caret-down" variant="text">
                  Categories
                </v-btn>
              </template>
              <v-list class="categoryMenu">
                <v-row>
                  <v-col cols="3" v-for="categories in category?.category_children" :key="categories?.id">
                    <v-list-item>
                      <NuxtLink :to="`/categorys/categories/${categories?.id}`">
                        {{ categories?.name }}</NuxtLink>
                    </v-list-item>
                  </v-col>
                </v-row>
              </v-list>
            </v-menu>
          </v-slide-group-item>

          <v-slide-group-item v-for="menu in category?.menus" :key="menu" v-slot="{ isSelected, toggle }">
            <v-btn :color="isSelected ? 'primary' : undefined" class="ma-2" @click="toggle"
              :href="`${menu?.url}`">
              {{ menu?.name }}
            </v-btn>
          </v-slide-group-item>
        </v-slide-group>
      </v-toolbar>

      <!--Department Banner Slider-->
      <div>
        <div v-if="category?.handle === 'Travel'">
          <travel :category="category?.id" />
        </div>
        <div v-else-if="category?.handle === 'Appstore'">
          <appstore :product="category?.id" />
        </div>
        <div v-else-if="category?.handle === 'Adult'">
          <adultstore :product="category?.id" />
        </div>
        <div v-else-if="category?.handle === 'Health'">
          <health :product="category?.id" />
        </div>
        <div v-else-if="category?.handle === 'Real Estate'">
          <realestate :product="category?.id" />
        </div>
        <div v-else-if="category?.handle === 'Pantry'">
          <pantry :product="category?.id" />
        </div>
        <div v-else>
          <NuxtImg class="categoryBanner" loading="lazy" :src="`${category?.image}`" :alt="category?.name" cover />
        </div>
      </div>
    </v-card>

    <v-row class="categoryRow">
      <!--Vibez Slider-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[0]?.name }} {{ category?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="shorts in category?.shorts"
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
          <div v-for="category in best?.products" :key="category">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
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

      <!--List of latest products in the category-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[2]?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="category in latest?.products" :key="category">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
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

      <!--List of products in the category-->
      <v-col cols="3" v-for="(product, index) in products" :key="index">
        <productCard :product="product" />
      </v-col>

      <!--List of events in this category-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[3]?.name }} {{ category?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <div v-for="event in eventProducts" :key="event">
            <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
              <productCard :product="event" :class="['ma-4', selectedClass]" @click="toggle" />
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

      <!--List of spaces in the category-->
      <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[4]?.name }} {{ category?.name }}</h4>
        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
          <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }" v-for="spaces in category?.spaces"
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
        <h4 style="left: 15px; position: relative;">{{ callouts?.menus?.[5]?.name }} {{ category?.name }}</h4>
        <relatedcreators />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  //import videobar from '~/components/menus/videobar.vue'
  import relatedcreators from '~/components/cms/related/relatedcreators.vue'
  import shorts from '~/components/cms/related/shorts.vue'
  import spaces from '~/components/cms/related/spaces.vue'
  import productCard from '~/components/commerce/product/productCard.vue'

  import travel from '~/components/appearance/travel.vue'
  import appstore from '~/components/appearance/appstore.vue'
  import adultstore from '~/components/appearance/adultstore.vue'
  import realestate from '~/components/appearance/realestate.vue'
  import health from '~/components/appearance/health.vue'
  import pantry from '~/components/appearance/pantry.vue'
  import deals from '~/components/appearance/deals.vue'
  import {
    useCategory, useCategoryProducts
  } from '@/composables/commerce/categories/useCategories';

  const route = useRoute()
  const model = ref(null)
  const {
      $directus,
      $readItem
    } = useNuxtApp()

  const { category, eventProducts, appProducts, loading, error } = useCategory(route.params.id);

  const { products } = useCategoryProducts(route.params.id);

  const {
      data: callouts
    } = await useAsyncData('callouts', () => {
      return $directus.request($readItem('callouts', '2'))
    })

  useHead({
    title: computed(() => category?.value?.name || 'Department Page')
  });
</script>