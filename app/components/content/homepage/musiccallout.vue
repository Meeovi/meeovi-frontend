<template>
  <div>
    <section data-bs-version="5.1" class="features16 cid-skeBGL5AVt" id="features17-5" data-sortbtn="btn-primary"
      :style="`background-img: url(${getAssetUrl(departmentMusic?.image)})`">

      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <div class="content-wrapper">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6 md-pb">
              <v-sheet class="mx-auto" style="background-color: transparent; box-shadow: none;">
                <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                  <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }"
                    v-for="products in departmentMusic?.products" :key="products">
                    <productCard :product="products?.products_id" :class="['ma-4', selectedClass]" @click="toggle" />
                    <div class="d-flex fill-height align-center justify-center">
                      <v-scale-transition>
                        <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                      </v-scale-transition>
                    </div>
                  </v-slide-group-item>
                </v-slide-group>
              </v-sheet>
            </div>
            <div class="col-12 col-lg">
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style display-5">
                  <strong>{{ departmentMusic?.name }}</strong>
                </h6>
                <p class="mbr-text mbr-fonts-style mb-4 display-4" v-dompurify-html="departmentMusic?.description"></p>
                <div class="mbr-section-btn mt-3"><a class="btn btn-primary display-4"
                  :href="toDepartmentPath(departmentMusic?.slug)">
                    Listen to the Music
                  </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { useRoutePath } from '#shared/app/composables/routing/useRoutePath'
  import ProductCard from '#commerce/app/components/catalog/product/productCard.vue'
  import { useDirectusUrl } from '#imports'
  
  const model = ref(null)
  const directusUrl = useDirectusUrl()
  const { joinRoutePath } = useRoutePath()
  const toDepartmentPath = (slug) => joinRoutePath('/departments', slug)
  const getAssetUrl = (file) => {
    const fileId = file?.id || file?.directus_files_id?.id || file?.filename_disk || file
    if (!fileId || !directusUrl) return ''
    return `${directusUrl.replace(/\/$/, '')}/assets/${fileId}`
  }

  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: departmentMusic
  } = await useAsyncData('departmentMusic', async () => {
    try {
      return await $directus.request($readItem('departments', '28', {
        fields: [
          '*',
          'products.products_id.*',
          'products.products_id.image.*',
          'image.*'
        ],
      }))
    } catch {
      return null
    }
  })
</script>