<template>
  <div>
    <section data-bs-version="5.1" class="header7 cid-u48D6IrI6w mbr-fullscreen" id="header7-88"
      data-sortbtn="btn-primary">
      <div class="text-right container">
        <div class="row justify-content-end">
          <div class="col-12 col-lg-5">
            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>{{ page?.name }}</strong></h1>

            <p class="mbr-text mbr-fonts-style display-7" v-html="page?.content"></p>
            <div class="mbr-section-btn mt-3"><a class="btn btn-primary display-4" href="">Refresh Page</a></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  const {
    getItemById
  } = useDirectusItems()

  const page = await getItemById({
    collection: "pages",
    id: 19
  });

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Offline Page'
  })
</script>