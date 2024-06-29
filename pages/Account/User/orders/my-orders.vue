<template>
  <div class="contentPage">
    <profilebar />
    <v-row>
      <div v-for="(orders, index) in data?.customer?.orders" :key="index">
      <v-col cols="12" v-for="(orders, index) in orders?.items" :key="index">
        <v-card variant="text" :href="`/account/user/orders/my-order/${orders?.id}`">
          <v-toolbar>
            <v-row class="orderRow">
              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Order Placed</v-list-item-title>
                  <v-list-item-subtitle>{{ new Date(orders?.date_created).toLocaleDateString() }}</v-list-item-subtitle>
                  <v-list-item-subtitle>Order Status: {{ orders?.status }}</v-list-item-subtitle>
                  <v-list-item-subtitle>Shipping Method: {{ orders?.shipping_method }}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Total</v-list-item-title>
                  <v-list-item-subtitle>{{orders?.total?.base_grand_total?.currency}} {{orders?.total?.base_grand_total?.value}}</v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Ship To</v-list-item-title>
                  <v-list-item-subtitle v-for="(orders, index) in orders?.shipping_address" :key="index">{{orders?.firstname}} {{orders?.lastname}}
                    {{orders?.city}} {{orders?.postcode}} {{orders?.country_code}} {{orders?.telephone}}
                  </v-list-item-subtitle>
                </v-list>
              </v-col>

              <v-col>
                <v-list lines="two" class="orderToolbar">
                  <v-list-item-title>Order # {{orders?.number}}</v-list-item-title>
                  <v-list-item-subtitle><a :href="`/account/user/orders/my-orders/${orders?.id}`">View order details</a>
                    | <a href="">View Invoice</a></v-list-item-subtitle>
                </v-list>
              </v-col>
            </v-row>
          </v-toolbar>

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

          <v-card-actions>
            <v-btn>Archive Order</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </div>
    </v-row>
  </div>
</template>

<script>
  import profilebar from '../../../components/menus/profilebar.vue'

  export default {
    components: {
      profilebar
    },
    data: () => ({
      tab: null,
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
    title: 'My Orders',
  })

  definePageMeta({
    //middleware: ['auth-logged-in'],
  })
</script>