import gql from 'graphql-tag'

export const query = gql`
query productsQuery {
  products(filter: {name: {match: ""}}) {
    items {
      color
      categories {
        id
        name
      }
      created_at
      country_of_manufacture
      description {
        html
      }
      crosssell_products {
        image {
          url
        }
        format
        description {
          html
        }
        name
        price {
          regularPrice {
            amount {
              value
              currency
            }
          }
        }
        rating_summary
        sale
        sku
        special_price
        uid
        url_key
      }
      format
      manufacturer
      name
      only_x_left_in_stock
      price {
        regularPrice {
          amount {
            value
            currency
          }
        }
      }
      rating_summary
      sale
      sku
      size
      special_price
      stock_status
      uid
      url_key
      activity
      attribute_set_id
      canonical_url
      category_gear
      climate
      collar
      eco_collection
      erin_recommends
      features_bags
      gender
      gift_message_available
      id
      is_featured
      material
      media_gallery {
        disabled
        label
        position
        url
        ... on ProductImage {
          disabled
          label
          position
          url
        }
        ... on ProductVideo {
          disabled
          label
          position
          url
          video_content {
            media_type
            video_description
            video_metadata
            video_provider
            video_title
            video_url
          }
        }
      }
      meta_description
      meta_keyword
      meta_title
      new
      new_from_date
      new_to_date
      options_container
      pattern
      performance_fabric
      product_links {
        link_type
        linked_product_sku
        linked_product_type
        position
        sku
      }
      review_count
      related_products {
        image {
          url
        }
        description {
          html
        }
        format
        name
        manufacturer
        price {
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
        sku
        special_price
      }
      sleeve
      special_to_date
      strap_bags
      style_bags
      style_bottom
      style_general
      swatch_image
      type_id
      url_path
      upsell_products {
        image {
          url
        }
        format
        name
        manufacturer
        price {
          regularPrice {
            amount {
              currency
              value
            }
          }
        }
        sku
        rating_summary
        special_price
        uid
      }
      updated_at
      thumbnail {
        url
      }
      url_suffix
    }
    total_count
  }
}
`

export default { query }