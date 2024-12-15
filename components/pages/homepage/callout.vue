<template>
  <div>
    <section data-bs-version="5.1" class="mbr-gallery cid-tAGTtsX7dT" once="shops" id="shop2-5w">
      <div>
        <div class="mbr-shop">
          <!-- Shop Gallery -->
          <div class="row mbr-shop__row col-md-12">
            <div class="wrapper-shop-items col-md-12">
              <div class="mbr-gallery-row">
                <div>
                  <div class="shop-items">
                    <div class="mbr-gallery-item" data-tags="Awesome" data-seller="true" data-slide-to="0"
                      data-bs-slide-to="0" data-price="39" data-oldprice="78" v-for="(products, index) in data?.products?.items" :key="index">
                      <div class="item_overlay" data-toggle="modal" data-bs-toggle="modal"></div>
                      <div class="galleryItem" data-toggle="modal" data-bs-toggle="modal">
                        <div class="style_overlay"></div>
                        <div class="img_wraper"><NuxtImg loading="lazy" :src="products.image.url" /></div><span
                          class="onsale mbr-fonts-style display-7" data-onsale="true">-50%</span>
                        <div class="sidebar_wraper">
                          <h4 class="item-title mbr-fonts-style mbr-text display-5">{{ products.name }}
                          </h4>
                          <div class="price-block"><span
                              class="shop-item-price mbr-fonts-style display-5">{{products.regularPrice.amount.currency}} {{ products.regularPrice.amount.value }}</span><span
                              class="oldprice mbr-fonts-style display-7">$ {{ products.special_price }}</span></div>
                          <div class="card-description">Category: {{ products.categories.name }}<br><br>
                            <ul>
                              <li>Manufacturer: {{ products.manufacturer }}</li>
                              <li>Product Code: <strong>{{ products.sku }}</strong></li>
                              <li>Featured: {{ products.is_featured }}</li>
                              <li>Size: {{ products.size }}</li>
                            </ul> <br>{{ products.description }}<br><br>
                          </div>
                          <div class="mbr-section-btn" buttons="0" style="display: none;"><NuxtLink
                              class="btn btn-black display-7" href="#">Buy now</NuxtLink></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div><!-- Lightbox -->
          <div class="shopItemsModal_wraper" style="z-index: 2500;">
            <div class="shopItemsModalBg"></div>
            <div class="shopItemsModal row">
              <div class="col-md-6 image-modal"></div>
              <div class="col-md-6 text-modal"></div>
              <div class="closeModal">
                <div class="close-modal-wrapper"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>

</script>