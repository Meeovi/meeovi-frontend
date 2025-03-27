import gql from 'graphql-tag';

const outlets = gql`
query {
  categories(filters: {name: {match: "Outlets"}}) {
    items {
      available_sort_by
      canonical_url
      children {
        image
        name
        uid
      }
      custom_layout_update_file
      default_sort_by
      description
      display_mode
      filter_price_range
      uid
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
      products {
        items {
          uid
          name
          description {
            html
          }
          rating_summary
          image {
            url
          }
          price_range {
            minimum_price {
              regular_price {
                currency
                value
              }
            }
          }
        }
      }
      relative_url
      type
      url_key
      url_path
      url_suffix
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}
`

export default outlets;