<template>
  <div>
    <section data-bs-version="5.1" class="pricing8 shopm5 cid-tZPDxCnUYR" id="apricing8-6a" data-sortbtn="btn-primary">
    
    
    <div class="container-fluid">
        <div class="row align-items-stretch items-row justify-content-center">

            <div class="item features-image item-long col-12 col-md-12 col-lg-8">
                <div class="item-wrapper">
                    <div class="mbr-section-head">
                        <h4 class="mbr-section-title mbr-fonts-style mb-0 display-7">
                            {{ category.name }}
                        </h4>
                        <h5 class="mbr-section-subtitle mbr-fonts-style mb-0 display-2">
                            <strong>{{ category.custom_attributes[0]?.value }}</strong>
                        </h5>
                        
                        <div class="mbr-section-btn item-footer">
                            <NuxtLink :to="`/departments/${category.id}`" class="btn btn-black-outline item-btn display-7" target="_blank">
                                <span class="mobi-mbri mobi-mbri-arrow-next mbr-iconfont mbr-iconfont-btn"></span>
                                Read More
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="item-img">
                        <NuxtImg loading="lazy" :src="`${category?.custom_attributes[1]?.value}`" :alt="category?.name">
                    </div>
                </div>
            </div>

            <div class="item features-image col-12 col-md-12 col-lg-4">
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
  import {
        getCategoryById
    } from '@/composables/commerce/categories/getCategories.js';

    // Pass the specific category name you want to fetch
    const category = ref([]); 

    onMounted(async () => {
        category.value = await getCategoryById(67);
    });
</script>