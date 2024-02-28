import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  categories {
    items {
      children {
        available_sort_by
        canonical_url
        children_count
        created_at
        custom_layout_update_file
        default_sort_by
        description
        display_mode
        filter_price_range
        id
        image
        include_in_menu
        is_anchor
        landing_page
        level
        meta_description
        meta_keywords
        meta_title
        name
        path
        path_in_store
        position
        product_count
        redirect_code
        relative_url
        type
        uid
        updated_at
        url_key
        url_path
        url_suffix
      }
      available_sort_by
      breadcrumbs {
        category_id
        category_level
        category_name
        category_uid
        category_url_key
        category_url_path
      }
      canonical_url
      children_count
      created_at
      custom_layout_update_file
      default_sort_by
      description
      display_mode
      filter_price_range
      id
      image
      include_in_menu
      is_anchor
      landing_page
      level
      meta_description
      meta_keywords
      meta_title
      name
      path
      path_in_store
      position
      product_count
      redirect_code
      relative_url
      type
      uid
      updated_at
      url_key
      url_path
      url_suffix
      products {
        items {
          color
          canonical_url
          attribute_set_id
          country_of_manufacture
          created_at
          description {
            html
          }
          format
          id
          image {
            url
          }
          is_featured
          manufacturer
          meta_description
          meta_keyword
          meta_title
          name
          only_x_left_in_stock
          price {
            regularPrice {
              amount {
                currency
                value
              }
            }
          }
          rating_summary
          review_count
          sale
          size
          sku
          short_description {
            html
          }
          special_from_date
          special_price
          stock_status
          thumbnail {
            url
          }
          tier_price
          uid
          updated_at
          url_key
        }
        total_count
      }
    }
    total_count
  }
}
`

export default { query }
