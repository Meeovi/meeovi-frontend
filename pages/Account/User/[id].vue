<template>
    <div>
        <!--<profilebar />-->
        <section data-bs-version="5.1" class="people3 cid-u1nMLE9Ke9 mbr-fullscreen mbr-parallax-background"
            id="apeople3-6r">

            <div class="mbr-overlay" style="opacity: 0; background-color: rgb(255, 255, 255);">
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <div class="content-container">
                            <div class="img-wrap">
                                <div class="item-img">
                                    <img :src="`${url}assets/${data?.customer?.image?.filename_disk}`">
                                </div>
                            </div>
                            <div class="text-wrap align-left">
                                <h4 class="mbr-text-name mbr-fonts-style display-5">
                                    <strong>{{ data?.customer?.firstname }}</strong>
                                </h4>
                                <h4 class="mbr-text mbr-fonts-style display-7" style="">
                                    <v-list style="background: transparent; color: white;">
                                        <v-list-item title="Member Since">{{ data?.customer?.created_at }}</v-list-item>
                                    </v-list>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <v-card variant="text">
            <v-tabs v-model="tab" bg-color="transparent">
                <v-tab value="one">Posts</v-tab>
                <v-tab value="two">Followers</v-tab>
                <v-tab value="three">Products</v-tab>
                <v-tab value="four">Comments</v-tab>
                <v-tab value="five">Media</v-tab>
                <v-tab value="six">Likes</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <posts />
                    </v-window-item>

                    <v-window-item value="two">
                        <followers />
                    </v-window-item>

                    <v-window-item value="three">
                        <products />
                    </v-window-item>

                    <v-window-item value="four">
                        <replies />
                    </v-window-item>

                    <v-window-item value="five">
                        <media />
                    </v-window-item>

                    <v-window-item value="six">
                        <likes />
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import profilebar from '../../../components/menus/profilebar.vue'
    import posts from '../../../components/pages/profile/posts.vue'
    import followersfollowing from '../../../components/pages/profile/followersfollowing.vue'
    import products from '../../../components/pages/profile/products.vue'
    import replies from '../../../components/pages/profile/replies.vue'
    import media from '../../../components/pages/profile/media.vue'
    import likes from '../../../components/pages/profile/likes.vue'

    export default {
        components: {
            profilebar,
            posts,
            followersfollowing,
            products,
            replies,
            media,
            likes,
        },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
//const route = useRoute();
import gql from 'graphql-tag'

const query = gql`
query {
  customer {
    addresses {
      city
      company
      country_code
      default_billing
      default_shipping
      fax
      prefix
      firstname
      middlename
      lastname
      postcode
      region {
        region
      }
      street
      suffix
      telephone
      vat_id
    }
    date_of_birth
    created_at
    default_billing
    default_shipping
    prefix
    firstname
    middlename
    lastname
    suffix
    email
    gender
    taxvat
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

/*  const {
    getItemById
  } = useDirectusItems()
  const route = useRoute();

  const customer = await getItemById({
    collection: "customers",
    id: route.params.id,
  });*/

    useHead({
        title: data?.customer?.firstname,
    })

	definePageMeta({
	  //middleware: ['auth-logged-in'],
	})    
</script>