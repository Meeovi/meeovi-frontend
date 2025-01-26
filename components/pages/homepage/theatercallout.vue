<template>
  <div>
    <section data-bs-version="5.1" class="features15 cid-skeBHQcNjS" id="features16-6" data-sortbtn="btn-primary"
      :style="`background-img: url(${$directus.url}assets/${departmentTheater?.image?.filename_disk})`">

      <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(255, 255, 255);">
      </div>
      <div class="container">
        <div class="content-wrapper">
          <div class="row align-items-center">
            <div class="col-12 col-lg">
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style display-2">
                  <strong>{{ departmentTheater?.name }}</strong>
                </h6>
                <p class="mbr-text mbr-fonts-style mb-4 display-4" v-html="departmentTheater?.description"></p>
                <div class="mbr-section-btn mt-3"><a class="btn btn-warning display-4"
                    :href="`/departments/${departmentTheater?.id}`">Start Watching</a></div>
              </div>
            </div>
            <div class="col-12 col-lg-6">
              <div class="image-wrapper">
                <NuxtImg loading="lazy" :src="`${$directus.url}assets/${departmentTheater?.image?.filename_disk}`"
                  :alt="departmentTheater?.name" />
              </div>
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
    data: departmentTheater
  } = await useAsyncData('departmentTheater', () => {
    return $directus.request($readItem('departments', '30', {
      fields: ['*', {
        '*': ['*']
      }]
    }))
  })
</script>