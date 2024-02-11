<template>
  <div>
    <section data-bs-version="5.1" class="features14 cid-u3U56NDZtd" id="features15-7o" data-sortbtn="btn-primary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont mobi-mbri-protect mobi-mbri m-auto"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Ordered On</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ customerOrders?.order_date }}</h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Order#</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ customerOrders?.order_number }}</h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-features mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7">
                  <strong>View or Print Invoice</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4"></h5>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <section data-bs-version="5.1" class="contacts2 cid-u3U5tKf7Hq" id="contacts2-7p" data-sortbtn="btn-primary">
      <div class="container">

        <div class="row justify-content-center mt-4">
          <div class="card col-12 col-md-6">
            <div class="card-wrapper">
              <div class="image-wrapper">
                <span class="mbr-iconfont mobi-mbri-home mobi-mbri"></span>
              </div>
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Shipping Address</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">{{ customerOrders?.shipping_address?.street }} {{ customerOrders?.shipping_address?.postcode }} {{ customerOrders?.shipping_address?.city }} {{ customerOrders?.shipping_address?.country_code }} {{ customerOrders?.shipping_address?.region }}</p>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6">
            <div class="card-wrapper">
              <div class="image-wrapper">
                <span class="mbr-iconfont mobi-mbri-cash mobi-mbri"></span>
              </div>
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Payment Method</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">
                  <a href="mailto:info@site.com" class="text-primary">{{ customerOrders?.payment_methods?.type }} {{ customerOrders?.payment_methods?.name }}</a>
                </p>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6">
            <div class="card-wrapper">
              <div class="image-wrapper">
                <span class="mbr-iconfont mobi-mbri-contact-form mobi-mbri"></span>
              </div>
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Order Summary</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">{{ customerOrders?.grand_total }}</p>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6">
            <div class="card-wrapper">
              <div class="image-wrapper">
                <span class="mbr-iconfont mobi-mbri-bulleted-list mobi-mbri"></span>
              </div>
              <div class="text-wrapper">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Transactions</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">Tracking #: {{ customerOrders?.shipments?.tracking?.number }} - Shipping Carrier: {{ customerOrders?.shipments?.tracking?.carrier }} - {{ customerOrders?.payment_methods?.name }} ending in {{ customerOrders?.payment_methods?.number }}: {{ customerOrders?.grand_total }}
                  <br>
                  <br>Total: {{ customerOrders?.grand_total }}</p>
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
        data: () => ({
            customerOrders: " ",
            shipments: null,
            shipping_method: "",
            shipping_address: "",
            grand_total: null,
            order_date: null,
            order_number: null,
            payment_methods: null,
        }),
    }
</script>

<script setup>
const query = gql`
query MyQuery {
  customerOrders {
    items {
      id
      grand_total
      created_at
      items {
        id
        product_name
        product_sku
        product_type
        status
      }
      number
      order_date
      order_number
      status
      shipping_address {
        city
        country_code
        postcode
        region
        street
      }
      payment_methods {
        name
        type
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)
</script>