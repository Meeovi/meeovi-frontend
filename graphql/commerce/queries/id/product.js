import gql from 'graphql-tag';

const product = gql `
query($sku: String!){
  products(filter: { sku: {eq: $sku}}) {
    items {
      uid
      name
      rating_summary
      url_key
      created_at
      updated_at
      stock_status
      review_count
      only_x_left_in_stock
      description {
        html
      }
      image {
        url
      }
      sku
      price_range {
        minimum_price {
          regular_price {
            currency
            value
          }
        }
      }
      categories {
        name
      }
      crosssell_products {
         uid
            name
            rating_summary
            url_key
            created_at
            updated_at
            stock_status
            review_count
            only_x_left_in_stock
            description {
              html
            }
            image {
              url
            }
            sku
            price_range {
              minimum_price {
                regular_price {
                  currency
                  value
                }
              }
            }
            categories {
              name
            }
      }
      related_products {
            uid
            name
            rating_summary
            url_key
            created_at
            updated_at
            stock_status
            review_count
            only_x_left_in_stock
            description {
              html
            }
            image {
              url
            }
            sku
            price_range {
              minimum_price {
                regular_price {
                  currency
                  value
                }
              }
            }
            categories {
              name
            }
          }
      reviews {
        items {
          average_rating
          created_at
          nickname
          ratings_breakdown {
            name
            value
          }
          summary
          text
        }
        page_info {
          current_page
          page_size
          total_pages
        }
      } 
    }
  }
 }
`

export {
  product
};