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
                <h5 class="card-text mbr-fonts-style display-4">{{ data?.order?.date }}</h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-4">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Order#</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ data?.order?.orderNumber }}</h5>
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
                <p class="mbr-text mbr-fonts-style display-7">{{ data?.order?.shipping?.address1 }} {{ data?.order?.shipping?.address2 }} {{ data?.order?.shipping?.city }} {{ data?.order?.shipping?.state }} {{ data?.order?.shipping?.postcode }} {{ data?.order?.shipping?.country }}</p>
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
                  <a href="mailto:info@site.com" class="text-primary">{{ data?.order?.paymentMethod }} {{ data?.order?.paymentMethodTitle }}</a>
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
                <p class="mbr-text mbr-fonts-style display-7">{{ data?.order?.total }}</p>
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
                <p class="mbr-text mbr-fonts-style display-7">
                  Tracking #: {{ data?.order?.shipments?.tracking?.number }} 
                  <br> Shipping Carrier: {{ data?.order?.shippingLines?.node?.shippingMethod?.title }}
                  <br> Payment Method: {{ data?.order?.paymentMethod }} ending in {{ data?.order?.paymentMethodTitle }}: {{ data?.order?.total }}
                  <br>
                  <br>Grand Total: {{ data?.order?.total }}</p>
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
const route = useRoute();
const query = gql`
query NewQuery ($id: ID!) {
  order(id: $id) {
    date
    dateCompleted
    datePaid
    discountTotal
    orderNumber
    needsPayment
    needsShippingAddress
    paymentMethod
    paymentMethodTitle
    pricesIncludeTax
    shipping {
      address1
      address2
      city
      company
      country
      postcode
      state
    }
    shippingTotal
    status
    subtotal
    total
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });

  definePageMeta({
	  middleware: ['auth-logged-in'],
	})
</script>