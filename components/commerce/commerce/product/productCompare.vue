<template>
  <div>
    <section data-bs-version="5.1" class="pricing11 shopm5 cid-u40UScZrJd" id="apricing11-7v"
      data-sortbtn="btn-primary">
      <div class="container">

        <div class="row align-items-stretch justify-content-center">
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <div class="card-title-wrap">
                <h5 class="card-title mbr-fonts-style mb-0 display-4">
                  <strong>{{ data?.composerList?.items?.product?.manufacturer }}</strong>
                </h5>
                <h6 class="card-subtitle mbr-fonts-style mb-0 display-7">
                 {{ data?.composerList?.items?.product?.name }}
                </h6>
              </div>
              <div class="card-number-wrap">
                <p class="price-text mbr-fonts-style mb-0 display-2">
                  <strong>{{ data?.composerList?.items?.product?.price?.regularPrice?.amount?.currency }}</strong>
                </p>
                <p class="price-number-text mbr-fonts-style mb-0 display-1">
                  <strong>{{ data?.composerList?.items?.product?.price?.regularPrice?.amount?.value }}</strong>
                </p>
              </div>
              <p class="price-caption mbr-fonts-style mb-0 display-7">
                <strong>{{ data?.composerList?.items?.product?.stock_status }}</strong>
              </p>
              <p class="mbr-text mbr-fonts-style mb-0 display-7" v-html="data?.composerList?.items?.product?.short_description?.html"></p>

              <div class="card-list-wrap">
                <div class="card-list-item">
                  <div class="iconfont-wrapper">
                    <span class="mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                  </div>
                  <p class="list-text mbr-fonts-style mb-0 display-7">
                    <strong># of Ratings: {{ data?.composerList?.items?.product?.rating_summary }}</strong>
                  </p>
                </div>
                <div class="card-list-item">
                  <div class="iconfont-wrapper">
                    <span class="mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                  </div>
                  <p class="list-text mbr-fonts-style mb-0 display-7">
                    <strong>{{ data?.composerList?.items?.product?.special_price }}</strong>
                  </p>
                </div>
                <div class="card-list-item">
                  <div class="iconfont-wrapper">
                    <span class="mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                  </div>
                  <p class="list-text mbr-fonts-style mb-0 display-7">
                    <strong>{{ data?.composerList?.items?.product?.sale }}</strong>
                  </p>
                </div>
                <div class="card-list-item">
                  <div class="iconfont-wrapper">
                    <span class="mbr-iconfont mobi-mbri-plus mobi-mbri"></span>
                  </div>
                  <p class="list-text mbr-fonts-style mb-0 display-7">
                    <strong>{{ data?.composerList?.items?.product?.only_x_left_in_stock }}</strong>
                  </p>
                </div>

              </div>

              <div class="mbr-section-btn">
                <NuxtLink to="" class="btn btn-danger display-7" target="_blank">
                  Add to Cart
                </NuxtLink>
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
      return {}
    },
  }
</script>

<script setup>
  const props = defineProps({
    compare: {
      type: Object,
      required: true,
    },
  });
  const {
    compare
  } = props;
</script>