<template>
  <div class="contentPage">
    <section data-bs-version="5.1" class="features13 cid-u4cgSRzpb5" id="features14-8g" data-sortbtn="btn-primary">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3 class="mbr-section-title align-center mb-4 mbr-fonts-style display-2"><strong>Meeovi
                Applications</strong></h3>
          </div>
          <div class="card col-12 col-md-4 col-lg-2 p-3">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <span class="mbr-iconfont mobi-mbri-image-gallery mobi-mbri"></span>
                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                  <strong>Optimized Images</strong></h4>
              </div>
            </div>
          </div>
          <div class="card p-3 col-12 col-md-4 col-lg-2">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <span class="mbr-iconfont mobi-mbri-sites mobi-mbri"></span>
                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                  <strong>Offline Mode</strong></h4>
              </div>
            </div>
          </div>
          <div class="card p-3 col-12 col-md-4 col-lg-2">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <span class="mbr-iconfont mobi-mbri-lock mobi-mbri"></span>
                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                  <strong>Secure</strong></h4>
              </div>
            </div>
          </div>
          <div class="card p-3 col-12 col-md-4 col-lg-2">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <span class="mbr-iconfont mobi-mbri-features mobi-mbri"></span>
                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                  <strong>Shopping Everywhere</strong></h4>
              </div>
            </div>
          </div>
          <div class="card p-3 col-12 col-md-4 col-lg-2">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <span class="mbr-iconfont mobi-mbri-cust-feedback mobi-mbri"></span>
                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                  <strong>Push Notifications</strong></h4>
              </div>
            </div>
          </div>
          <div class="card p-3 col-12 col-md-4 col-lg-2">
            <div class="card-wrapper">
              <div class="card-box align-center">
                <span class="mbr-iconfont mobi-mbri-devices mobi-mbri"></span>
                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                  <strong>Mobile-friendly</strong></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-bs-version="5.1" class="features4 cid-u4cgsuF3KI" id="features5-8f" data-sortbtn="btn-primary">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6" v-for="app in applications" :key="app">
            <div class="card-wrapper">
              <div class="row">
                <div class="col-12 col-md-7">
                  <div class="text-wrapper">
                    <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">
                      {{ app?.os }}</h6>
                    <h5 class="card-title mbr-fonts-style display-5">
                      <strong>{{ app?.name }}</strong></h5>
                    <p class="mbr-text mbr-fonts-style mb-5 display-4">{{ app?.description }}</p>
                    <div class="mbr-section-btn"><a :href="app?.url" class="btn btn-warning display-4">Get the App</a></div>
                  </div>
                </div>
                <div class="col-12 col-md-5">
                  <div class="img-wrapper">
                    <img :src="`${url}assets/${app?.image?.url}`" :alt="app?.name">
                  </div>
                </div>
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
        data() {
            return {
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
const {
        getItems
    } = useDirectusItems()

    const applications = await getItems({
        collection: "applications"
    });

  definePageMeta({
    layout: 'nolive',
  });

  useHead({
    title: 'Applications'
  })
</script>