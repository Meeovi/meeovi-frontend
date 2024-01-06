<template>
  <div>
    <section data-bs-version="5.1" class="features12 cid-txNt5tuPrc" id="features12-4y" data-sortbtn="btn-primary">
      <div class="container-fluid">
        <h2 class="mbr-section-title align-left mbr-fonts-style display-2">
          Latest Radio Stations</h2>
        <div class="underline align-left pb-3">
          <div class="line"></div>
        </div>

        <div class="row justify-content-center align-items-start pt-5">
          <div class="card px-3 py-4 col-12 col-md-6 col-lg-4">
            <div class="card-wrapper flip-card">
              <div class="card-img">
                <img src="assets/images/01.jpg" alt="">
                <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-7">
                  Outerwear
                </div>
              </div>
              <div class="card-box">
                <p class="mbr-card-text mbr-fonts-style align-center display-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="mbr-section-btn align-center">
                  <a href="#" class="btn btn-secondary display-4">
                    VIEW ALL
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="card px-3 py-4 col-12 col-md-6 col-lg-4">
            <div class="card-wrapper flip-card">
              <div class="card-img">
                <img src="assets/images/02.jpg" alt="">
                <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-7">
                  Shirts
                </div>
              </div>
              <div class="card-box">
                <p class="mbr-card-text mbr-fonts-style align-center display-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="mbr-section-btn align-center">
                  <a href="#" class="btn btn-secondary display-4">
                    VIEW ALL
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="card px-3 py-4 col-12 col-md-6 col-lg-4">
            <div class="card-wrapper flip-card">
              <div class="card-img">
                <img src="assets/images/03.jpg" alt="">
                <div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-7">
                  Sweatshirts
                </div>
              </div>
              <div class="card-box">
                <p class="mbr-card-text mbr-fonts-style align-center display-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div class="mbr-section-btn align-center">
                  <a href="#" class="btn btn-secondary display-4">
                    VIEW ALL
                  </a>
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
  import productCard from '../Pages/commerce/productCard.vue'

  export default {
    components: {
      productCard
    },
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
  /*import query from '../../apollo/Custom/Queries/bestsellers'

  const {
    data
  } = await useAsyncQuery(query)*/

  const {
    getItems
  } = useDirectusItems()

  const products = await getItems({
    collection: "products",
    limit: 6
  });
</script>