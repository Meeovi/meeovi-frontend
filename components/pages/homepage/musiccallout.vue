<template>
  <div>
    <section data-bs-version="5.1" class="features16 cid-skeBGL5AVt" id="features17-5" data-sortbtn="btn-primary" :style="`background-img: url(${$directus.url}assets/${departmentMusic?.image?.filename_disk})`">


      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <div class="content-wrapper">
          <div class="row align-items-center">
            <div class="col-12 col-lg-6">
              <div class="image-wrapper">
                <NuxtImg loading="lazy" :src="`${$directus.url}assets/${departmentMusic?.image?.filename_disk}`" :alt="departmentMusic?.name" />
              </div>
            </div>
            <div class="col-12 col-lg">
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style display-5">
                  <strong>{{ departmentMusic?.name }}</strong>
                </h6>
                <p class="mbr-text mbr-fonts-style mb-4 display-4" v-html="departmentMusic?.description"></p>
                <div class="mbr-section-btn mt-3"><a class="btn btn-primary display-4" :href="`/departments/${departmentMusic?.id}`">
                    Learn more
                  </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
  const {
    $directus,
    $readItem
  } = useNuxtApp()

  const {
    data: departmentMusic
  } = await useAsyncData('departmentMusic', () => {
    return $directus.request($readItem('departments', '28', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })
</script>