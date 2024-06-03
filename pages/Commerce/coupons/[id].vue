<template>
    <div>
        <profilebar />
        <section data-bs-version="5.1" class="features14 cid-u3U56NDZtd" id="features15-7o" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="card col-12 col-md-6 col-lg-4">
                        <div class="card-wrapper">
                            <span class="mbr-iconfont mobi-mbri-protect mobi-mbri m-auto"></span>
                            <div class="card-box">
                                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Use On</strong></h4>
                                <h5 class="card-text mbr-fonts-style display-4">{{ data?.coupon?.date}}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card col-12 col-md-6 col-lg-4">
                        <div class="card-wrapper">
                            <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
                            <div class="card-box">
                                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Coupon #</strong></h4>
                                <h5 class="card-text mbr-fonts-style display-4">{{ data?.coupon?.code}}</h5>
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
                                <p class="mbr-text mbr-fonts-style display-7" v-for="shipping in data?.coupon?.usedBy?.nodes" :key="shipping">
                                    <div>First Name: {{ shipping?.shipping?.firstName }}</div>
                                    <br>
                                    <div>Last Name: {{ shipping?.shipping?.lastName }}</div>
                                    <br>
                                    <div>Address: {{ shipping?.shipping?.address1 }}</div>
                                    <br>
                                    <div>Address 2: {{ shipping?.shipping?.address2 }}</div>
                                    <br>
                                    <div>City: {{ shipping?.shipping?.city }}</div>
                                    <br>
                                    <div>State: {{ shipping?.shipping?.state }}</div>
                                    <br>
                                    <div>Postcode: {{ shipping?.shipping?.postcode }}</div>
                                    <br>
                                    <div>Country: {{ shipping?.shipping?.country }}</div>
                                    <br>
                                    <div>Email: {{ shipping?.shipping?.email }}</div>
                                    <br>
                                </p>
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
                                <p class="mbr-text mbr-fonts-style display-7" v-for="payment in data?.coupon?.usedBy?.nodes" :key="payment">
                                    <a href="mailto:info@site.com" class="text-primary">{{ payment.availablePaymentMethods?.type }}</a>
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
                                <p class="mbr-text mbr-fonts-style display-7" v-for="orders in data?.coupon?.orders?.nodes" :key="orders">
                                    Item(s) Subtotal: {{ orders?.subtotal }}
                                    <br>Shipping &amp; Handling: {{ orders?.shippingTotal }}
                                    <br>Total before tax: {{ orders?.total }}
                                    <br>Estimated tax to be collected: {{ orders?.totalTax }}
                                    <br>Grand Total: {{ orders?.totalTax }}</p>
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
                                    <strong>Receipt</strong></h6>
                                <p class="mbr-text mbr-fonts-style display-7" v-for="receipt in data?.coupon?.usedBy?.nodes" :key="receipt">
                                    <div>Items shipped: {{ receipt?.date_created }}</div> 
                                    <br>Payment Method: <img :src="availablePaymentMethods?.gateway?.icon" :alt="availablePaymentMethods?.gateway?.title"> {{ availablePaymentMethods?.gateway?.title }}
                                    <div>Order Count: {{ receipt?.orderCount }}</div> 
                                    <br>
                                    <div>Total: {{ customers?.receipts?.totalSpent }}</div> 
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
import productCard from '../../../components/commerce/product/productCard.vue'
import profilebar from '../../../components/menus/profilebar.vue'

    export default {
        components: { productCard, profilebar},
        data: () => ({
            model: null,
            url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
const route = useRoute();
const query = gql`
query NewQuery ($id: ID!) {
  coupon(id: $id) {
    amount
    code
    date
    dateExpiry
    description
    discountType
    freeShipping
    id
    minimumAmount
    usageCount
    usageLimit
    usedBy {
      nodes {
        displayName
        email
        availablePaymentMethods {
          type
          gateway {
            icon
            title
          }
        }
        calculatedShipping
        date
        orderCount
        totalSpent
        shipping {
          address1
          address2
          city
          company
          country
          email
          firstName
          lastName
          phone
          postcode
          state
        }
        username
        orders {
          nodes {
            currency
            date
            datePaid
            discountTax
            discountTotal
            shippingTax
            shippingTotal
            status
            subtotal
            total
            totalTax
          }
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });
/*const {
    getItemById
  } = useDirectusItems()
  const route = useRoute();

  const coupon = await getItemById({
    collection: "coupons",
    id: route.params.id,
  }); */

    useHead({
        title: data?.coupon?.name,
    })  

	definePageMeta({
	  middleware: ['auth-logged-in'],
	})
</script>