<template>
  <div>
    <section data-bs-version="5.1" class="features11 cid-skeBBk03KK mbr-parallax-background" id="features12-3"
      data-sortbtn="btn-primary" :style="`background-img: url(${$directus.url}assets/${departmentBook?.image?.filename_disk})`">

      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg">
            <div class="card-wrapper">
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-4 display-2">
                  <strong>{{ departmentBook?.name }}</strong>
                </h4>
                <p class="mbr-text mbr-fonts-style mb-4 display-7" v-html="departmentBook?.description"></p>
                <div class="mbr-section-btn mb-4"><a class="btn btn-secondary display-4"
                    :href="`/departments/${departmentBook?.id}`">Visit the Bookstore</a></div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 md-pb">
            <div class="image-wrapper">
              <NuxtImg loading="lazy" :src="`${$directus.url}assets/${departmentBook?.image?.filename_disk}`"
                :alt="departmentBook?.name" />
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