import gql from 'graphql-tag';

const products = gql`
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
      status
      order_date
      payment_methods {
        additional_data {
          name
          value
        }
        name
        type
      }
      shipping_method
      invoices {
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
          quantity_invoiced
        }
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
      carrier
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
      comments {
        message
        timestamp
      } 
      id
        gift_message {
          from
          message
          to
        } 
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
      }
    }
  }
}`

export default products;