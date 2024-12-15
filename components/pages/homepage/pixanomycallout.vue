<template>
  <div>
    <section data-bs-version="5.1" class="pricing6 shopm5 cid-tZPDtxeZjg" id="apricing6-69" data-sortbtn="btn-primary">
    
    
    <div class="container-fluid">
        <div class="row align-items-stretch items-row justify-content-center">

            <div class="col-12 col-md-12 col-lg-6" v-for="stores in meeovistores" :key="stores">
                <div class="mbr-section-head">
                    <h4 class="mbr-section-title mbr-fonts-style mb-0 display-7">
                        <strong>{{ stores.name }}</strong>
                    </h4>
                    <h5 class="mbr-section-subtitle mbr-fonts-style mb-0 display-2">
                        <strong>{{ stores.name }}</strong>
                    </h5>
                    <h5 class="main-text mbr-fonts-style mb-0 display-7" v-html="stores.content"></h5>
                    <div class="mbr-section-btn item-footer">
                        <NuxtLink :to="`/Stores/${stores.name}`" class="btn btn-danger item-btn display-7" target="_blank">
                            <span class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>
                            Shop Now
                        </NuxtLink>
                    </div>
                </div>
            </div>


            <div class="item features-image col-12 col-md-6 col-lg-3">
                <div class="item-wrapper">
                    <div class="item-img">
                        <NuxtImg loading="lazy" src="assets/images/011.jpg" alt="">
                        <div class="mbr-section-btn">
                            <NuxtLink to="" class="btn btn-danger item-btn display-7" target="_blank">
                                Read More
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style mb-0 display-7">
                             <strong>Designer Chair</strong>
                        </h5>
                        <p class="item-subtitle mbr-fonts-style mb-0 display-7">
                            Interior Design
                        </p>
                        <p class="mbr-text mbr-fonts-style mb-0 display-7">
                            <strong>from $ 135</strong>
                        </p>
                    </div>
                </div>
            </div>

            <div class="item features-image col-12 col-md-6 col-lg-3">
                <div class="item-wrapper">
                    <div class="item-img">
                        <NuxtImg loading="lazy" src="assets/images/022.jpg" alt="">
                        <div class="mbr-section-btn">
                            <NuxtLink to="" class="btn btn-danger item-btn display-7" target="_blank">
                                Read More
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style mb-0 display-7">
                            <strong>
                                Bedside Table
                            </strong>
                        </h5>
                        <p class="item-subtitle mbr-fonts-style mb-0 display-7">
                            Interior Design
                        </p>
                        <p class="mbr-text mbr-fonts-style mb-0 display-7">
                            <strong>from $ 89</strong>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  </div>
</template>

<script>
  const productModel = ref(null)
  export default {
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
    setup() {
      return {
        data,
        error,
        loading,
        productModel,
      }
    },
  }
</script>

<script setup>

</script>