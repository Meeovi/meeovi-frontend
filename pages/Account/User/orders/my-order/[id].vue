<template>
  <div class="contentPage">
    <profilebar />
    <section data-bs-version="5.1" class="features14 cid-u3U56NDZtd" id="features15-7o" data-sortbtn="btn-primary">
      <div class="container">
        <div class="row justify-content-center">
          <div class="card col-12 col-md-6 col-lg-3">
            <div class="card-wrapper">
              <span class="mbr-iconfont mobi-mbri-protect mobi-mbri m-auto"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Ordered On</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ new Date(data?.customer?.orders?.date_created).toLocaleDateString() }}
                </h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-3">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Order#</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ data?.customer?.orders?.number }}</h5>
              </div>
            </div>
          </div>
          <div class="card col-12 col-md-6 col-lg-3">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-features mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7">
                  <strong>View or Print Invoice</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4"></h5>
              </div>
            </div>
          </div>

          <div class="card col-12 col-md-6 col-lg-3">
            <div class="card-wrapper">
              <span class="mbr-iconfont m-auto mobi-mbri-website-theme-2 mobi-mbri"></span>
              <div class="card-box">
                <h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Status</strong></h4>
                <h5 class="card-text mbr-fonts-style display-4">{{ data?.customer?.orders?.status }}</h5>
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
              <div class="text-wrapper" v-for="(orders, index) in orders?.shipping_address" :key="index">
                <h6 class="card-title mbr-fonts-style mb-1 display-5">
                  <strong>Shipping Address</strong></h6>
                <p class="mbr-text mbr-fonts-style display-7">{{ orders?.firstname }}
                  {{ orders?.lastname }} / {{ orders?.company }}</p>
                <p class="mbr-text mbr-fonts-style display-7">{{ orders?.street }}
                  {{ orders?.city }} {{ orders?.state }}
                  {{ orders?.postcode }} {{ orders?.country }}</p>
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
                  <a href="mailto:info@site.com" class="text-primary">{{ data?.customer?.orders?.payment_method?.name }}
                    {{ data?.customer?.orders?.payment_methods?.type }}</a>
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
                <p class="mbr-text mbr-fonts-style display-7">{{ data?.customer?.orders?.total }}</p>
                <p class="mbr-text mbr-fonts-style display-7">Date Paid: {{ data?.customer?.orders?.date_paid }}</p>
                <p class="mbr-text mbr-fonts-style display-7">Date Completed: {{ data?.customer?.orders?.date_completed }}</p>
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
                <p class="mbr-text mbr-fonts-style display-7" v-for="items in data?.customer?.orders?.shipments?.items" :key="items">
                  Tracking #: {{ items.tracking?.number }}
                  <br> Shipping Carrier: {{ items.tracking?.carrier }}
                  <br> Shipping Total: {{items?.adjustment?.currency }} {{ items?.adjustment?.value }}
                  <br> Shipping Tax: {{ items.total_tax }}
                  <div v-for="items in data?.customer?.orders?.items" :key="items">
                  <br> Payment Method: {{ items?.payment_methods?.name }} ending in {{ items?.payment_methods?.type }}:
                  {{ items?.payment_methods?.type }}
                </div>
                  <br>
                  <br>
                  <div v-for="items in data?.customer?.orders?.items" :key="items">
                  Grand Total: {{items?.total?.base_grand_total?.currency}} {{items?.total?.base_grand_total?.value}}
                  </div>
                </p>
              </div>
            </div>
          </div>

          <h4>Products in Order</h4>
          <v-row>
            <v-col cols="12" v-for="(item, index) in data?.customer?.orders?.items" :key="index">
              <v-card>
                <v-row>
                  <v-col cols="3" v-for="items in orders?.shipments?.items" :key="items">
                <v-avatar :image="`${items?.image?.sourceUrl}`" rounded="0" size="180"></v-avatar>
              </v-col>
              <v-col cols="9">
                <v-card-title>{{ orders?.product_name }}</v-card-title>
                <v-card-subtitle>SKU: {{ orders?.product_sku }}</v-card-subtitle>
                <v-card-subtitle>Quantity: {{ orders?.quantity_ordered }}</v-card-subtitle>
                <v-card-subtitle v-for="items in orders?.items" :key="items">Total: {{orders?.total?.adjustment?.currency }} {{ orders?.total?.adjustment?.value }}</v-card-subtitle>
                <v-card-subtitle>Tracking #: {{orders?.tracking?.carrier }} {{ orders?.tracking?.title }} {{ orders?.tracking?.number }}</v-card-subtitle>
                <v-card-text v-for="items in orders?.items" :key="items">Payment Method: {{ orders?.payment_methods?.name }} {{ orders?.payment_methods?.type }}</v-card-text>
                <v-card-actions>
                  <v-btn color="orange" prepend-icon="fas fa-repeat" variant="outlined">Buy it again</v-btn>
                  <v-btn variant="outlined" :href="`/product/${orders?.id}`">View your item</v-btn>
                  <v-btn prepend-icon="fas fa-pencil" variant="outlined" :href="`/product/${orders?.id}`">Write a product review</v-btn>
                </v-card-actions>
              </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
import profilebar from '../../../../../components/menus/profilebar.vue'

  export default {
    components: { profilebar },
    data: () => ({

    }),
  }
</script>

<script setup>
const query = gql`
query {
  customer {
    orders {
      items {
        billing_address {
          city
          company
          country_code
          fax
          firstname
          lastname
          middlename
          postcode
          prefix
          region
          region_id
          street
          suffix
          telephone
          vat_id
        }
        carrier
        comments {
          message
          timestamp
        }
        order_date
        credit_memos {
          comments {
            message
            timestamp
          } 
          id
          items {
            discounts {
              amount {
                currency
                value
              }
              label
            }
            id
            order_item {
              discounts {
                amount {
                  currency
                  value
                } 
                label
              }
              entered_options {
                label
                value
              }
              gift_message {
                from
                message
                to
              }
              id
              product_name
              product_sale_price {
                currency
                value
              }
              product_sku
              product_type
              product_url_key
              quantity_canceled
              quantity_invoiced
              quantity_ordered
              quantity_refunded
              quantity_returned
              quantity_shipped
              selected_options {
                label
                value
              }
              status
            }
            product_name
            product_sale_price {
              currency
              value
            }
            product_sku
            quantity_refunded
          } 
          number
          total {
            adjustment {
              currency
              value
            }
            base_grand_total {
              currency
              value
            }
            discounts {
              amount {
                currency
                value
              }
              label
            }
            grand_total {
              currency
              value
            }
            shipping_handling {
              amount_excluding_tax {
                currency
                value
              }
              amount_including_tax {
                currency
                value
              }
              discounts {
                amount {
                  currency
                  value
                } 
              }
              taxes {
                amount {
                  currency
                  value
                } 
                rate
                title
              }
              total_amount {
                currency
                value
              }
            }
            subtotal {
              currency
              value
            }
            taxes {
              amount {
                currency
                value
              }
              rate
              title
            }
            total_shipping {
              currency
              value
            }
            total_tax {
              currency
              value
            }
          } 
        }
        gift_message {
          from
          message
          to
        }
        total {
          grand_total {
            currency
            value
          }
        }
        id
        invoices {
          comments {
            message
            timestamp
          } 
          id
          number
          total {
            base_grand_total {
              currency
              value
            }
            discounts {
              amount {
                currency
                value
              }
              label
            }
            grand_total {
              currency
              value
            }
            shipping_handling {
              amount_excluding_tax {
                currency
                value
              }
              amount_including_tax {
                currency
                value
              }
              discounts {
                amount {
                  currency
                  value
                } 
              }
              taxes {
                amount {
                  currency
                  value
                } 
                rate
                title
              }
              total_amount {
                currency
                value
              }
            }
            subtotal {
              currency
              value
            }
            taxes {
              amount {
                currency
                value
              }
              rate
              title
            }
            total_shipping {
              currency
              value
            }
            total_tax {
              currency
              value
            }
          } 
        }
        items {
          discounts {
            amount {
              currency
              value
            }
            label
          } 
          entered_options {
            label
            value
          } 
          gift_message {
            from
            message
            to
          } 
          id
          product_name
          product_sale_price {
            currency
            value
          } 
          product_sku
          product_type
          product_url_key
          quantity_canceled
          quantity_invoiced
          quantity_ordered
          quantity_refunded
          quantity_returned
          quantity_shipped
          selected_options {
            label
            value
          } 
          status
        }
        number
        order_date
        payment_methods {
          additional_data {
            name
            value
          } 
          name
          type
        }
        shipments {
          comments {
            message
            timestamp
          } 
          id
          items {
            id
            order_item {
              discounts {
                amount {
                  currency
                  value
                }
                label
              }
              entered_options {
                label
                value
              }
              gift_message {
                from
                message
                to
              }
              id
              product_name
              product_sale_price {
                currency
                value
              }
              product_sku
              product_type
              product_url_key
              quantity_canceled
              quantity_invoiced
              quantity_ordered
              quantity_refunded
              quantity_returned
              quantity_shipped
              selected_options {
                label
                value
              }
              status
            } 
            product_name
            product_sale_price {
              value
              currency
            }
            product_sku
            quantity_shipped
          }
          number
          tracking {
            carrier
            number
            title
          }
        }
        shipping_address {
          city
          company
          country_code
          fax
          firstname
          lastname
          middlename
          postcode
          prefix
          region
          region_id
          street
          suffix
          telephone
          vat_id
        }
        shipping_method
        status
        total {
          base_grand_total {
            currency
            value
          }
          discounts {
            amount {
              currency
              value
            }
            label
          }
          grand_total {
            currency
            value
          }
          shipping_handling {
            amount_excluding_tax {
              currency
              value
            }
            amount_including_tax {
              currency
              value
            }
            discounts {
              amount {
                currency
                value
              }
            }
            taxes {
              amount {
                currency
                value
              }
            }
            total_amount {
              currency
              value
            }
          }
          subtotal {
            currency
            value
          }
          taxes {
              amount {
                currency
                value
              }
            }
          total_shipping {
            currency
            value
          }
          total_tax {
            currency
            value
          }
        }
      }
      page_info {
        current_page
        page_size
        total_pages
      }
      total_count
    } 
  }
}
`
const {
        data
    } = useAsyncQuery(query);


  useHead({
    title: `Order Number ${route?.params?.id}`,
  })

  definePageMeta({
    //middleware: ['auth-logged-in'],
  })
</script>~/server/api/read/getOrders