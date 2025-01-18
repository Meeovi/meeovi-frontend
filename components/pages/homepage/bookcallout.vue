<template>
  <div>
    <section result-bs-version="5.1" class="features1 cid-tAGUEKoXKD" id="features1-5y" :style="`background-color: ${departmentBook.color}; color: ${departmentBook?.colortext}`">

      <div class="container">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element ">
            <div class="img-wrap">
              <NuxtImg loading="lazy" :src="`${$directus.url}assets/${departmentBook?.image?.filename_disk}`" :alt="departmentBook?.name" />
            </div>
          </div>
          <div class="col-md-6 text-element">
            <div class="text-content">

              <h2 class="mbr-title pt-2 mbr-fonts-style align-center mbr-white display-2">{{ departmentBook?.name }}</h2>
              <div class="mbr-section-text">
                <h4 class="mbr-text pt-3 mbr-light mbr-fonts-style align-center mbr-white display-4" v-html="departmentBook?.description">
                  </h4>
                  <br>
                  <br>
              </div>
              <div class="mbr-section-btn pt-3 align-center"><NuxtLink class="btn btn-md btn-white display-4" :href="`/departments/${departmentBook?.id}`">Start Reading</NuxtLink></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: departmentBook
  } = await useAsyncData('departmentBook', () => {
    return $directus.request($readItem('departments', '29', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })
</script>