<template>
  <div>
    <section data-bs-version="5.1" class="mbr-section form4 agencym4_form4 cid-u465KMdE2N" id="form4-7y"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="media-container-row" v-for="products in data?.products?.items" :key="products">
          <div class="col-md-5 col-lg-3 mb-5 img-block-wrap">
            <div class="image-block">
              <img :src="products?.image?.url" alt="">
              <p class="mbr-description mbr-fonts-style pt-2 align-center display-4">
                By: {{ products?.manufacturer }}</p>
            </div>
          </div>
          <div class="col-md-7 col-lg-5 mb-5 text-content">
            <h3 class="content-title mb-4 mbr-fonts-style display-5">Meeovi</h3>
            <p class="mb-4 content-subtitle mbr-fonts-style display-7">{{ products?.short_description_html }}</p>
            <div class="list-block mb-4">
              <div class="card-img pb-3">
                <span class="mbr-iconfont mobi-mbri-user-2 mobi-mbri"></span>
              </div>
              <h4 class="list-item-title mbr-fonts-style display-5">{{ products?.categories?.name }}</h4>
              <p class="list-item-text mbr-fonts-style display-7">{{ products?.price_range?.maximum_price?.regular_price?.currency }} {{ products?.price_range?.maximum_price?.regular_price?.value }}</p>
            </div>
          </div>
          <div class="col-md-8 col-lg-4 block-content mb-5">
            <div class="form-block">
              <div data-form-type="formoid">

                <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler"
                  data-form-title="Meeovi Form"><input type="hidden" name="email" data-form-email="true"
                    value="6SyiDWKNIRTCbrfuROUAeL22dzJXbUiar6ja1kjNUnTNIOq4vr+Topmy7wYtcHw+4ysVuyZP9HoAPdh7zRX4EbylCr7eLyaeRrAwg24VHrR78qeO47FWmbiSfR1xtqE/.IlX8sPi1QaO1g3vjrYtNZ1C9YqbhapyyoCXTyHUWC2RuIE2/0pc3nbyO9NQxvz+DZN9JUQrtjGXf4gwfuP0uCqytF8cQK/veA7dsPVwUQfmWQSzgnPern3RWWxHCD53k">
                  <div class="row">
                    <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for
                      filling out the form!</div>
                    <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                    </div>
                  </div>
                  <div class="dragArea row">
                    <div class="col-md-12">
                      <h4 class="mbr-fonts-style mbr-section-subtitle mbr-fonts-style mb-4 mbr-light display-5">Enter new Password Below</h4>
                    </div>
                    <div data-for="password" class="col-md-12  form-group mb-3">
                      <input type="password" name="password" placeholder="Password*" data-form-field="Password"
                        class="form-control input display-7" required="required" id="password-form4-7y">
                    </div>
                    <div data-for="password" class="col-md-12  form-group mb-3">
                      <input type="password" name="password" placeholder="Enter Password Again*" data-form-field="Password" class="form-control input display-7" required="required" id="password-form4-7y">
                    </div>
                    <div class="col-md-12 input-group-btn mt-2">
                      <button type="submit" class="btn btn-primary btn-form btn-bgr display-4">RESET PASSWORD</button>
                    </div>
                  </div>
                </form>
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
const query = gql`
query MyQuery {
  products(filter: {price: {to: "999"}}, pageSize: 1) {
    items {
      uid
      name
      categories {
        name
      }
      price_range {
        maximum_price {
          regular_price {
            currency
            value
          }
        }
      }
      image {
        url
      }
      rating_summary
      manufacturer
      short_description {
        html
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)

  definePageMeta({
    layout: false,
  });

  useHead({
    title: 'Reset Password'
  })
</script>