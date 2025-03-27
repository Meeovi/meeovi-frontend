import gql from 'graphql-tag';

const reviews = gql`
query {
  customer {
    reviews {
      items {
        average_rating
        created_at
        nickname
        product {
          canonical_url
          country_of_manufacture
          gift_message_available
          meta_description
          meta_keyword
          meta_title
          name
          new_from_date
          new_to_date
          only_x_left_in_stock
          options_container
          rating_summary
          review_count
          sku
          special_price
          special_to_date
          stock_status
          swatch_image
          uid
          url_key
          url_suffix
        }
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
}`

export default { reviews }