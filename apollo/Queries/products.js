import gql from 'graphql-tag'

export const query = gql`
query {
  products 
 {
    id
    sku
    name
    tax_class
    stock_status
    weight
    created_at
    created_at_func {
      year
      month
      week
      day
      weekday
      hour
      minute
      second
    }
    height
    content
    part_number
    format
    format_func {
      count
    }
    file {
      id
      storage
      filename_disk
      filename_download
      title
      type
      folder
      uploaded_by
      uploaded_on
      uploaded_on_func
      modified_by
      modified_on
      modified_on_func
      charset
      filesize
      width
      height
      duration
      embed
      description
      location
      tags
      tags_func
      metadata
      metadata_func
    }
    image {
      id
      storage
      filename_disk
      filename_download
      title
      type
      folder
      uploaded_by
      uploaded_on
      uploaded_on_func
      modified_by
      modified_on
      modified_on_func
      charset
      filesize
      width
      height
      duration
      embed
      description
      location
      tags
      tags_func
      metadata
      metadata_func
    }
    type
    visibility
    price
    size
    size_func {
      count
    }
    rating
    like
    stock
    attributes {
      id
      attributes_id
      products_id
    }
    attributes_func {
      count
    }
    shops {
      id
      shops_id
      products_id
    }
    shops_func {
      count
    }
    product_types {
      id
      product_types_id
      products_id
    }
    product_types_func {
      count
    }
    customers {
      id
      customers_id
      products_id
    }
    customers_func {
      count
    }
    websites {
      id
      products_id
      websites_id
    }
    websites_func {
      count
    }
    cross_products {
      id
      products_id
      related_products_id
    }
    cross_products_func {
      count
    }
    musicchart {
      id
      musicchart_id
      products_id
    }
    musicchart_func {
      count
    }
    agreements {
      id
      agreements_id
      products_id
    }
    agreements_func {
      count
    }
    faqsa {
      id
      products_id
    }
    faqsa_func {
      count
    }
    meeovistores {
      id
      meeovistores_id
      products_id
    }
    meeovistores_func {
      count
    }
    brands {
      id
      brands_id
      products_id
    }
    brands_func {
      count
    }
    newsfeed {
      id
      newsfeed_id
      products_id
    }
    newsfeed_func {
      count
    }
    lists {
      id
      lists_id
      products_id
    }
    lists_func {
      count
    }
    orders {
      id
      orders_id
      products_id
    }
    orders_func {
      count
    }
    subscriptions {
      id
      subscriptions_id
      products_id
    }
    subscriptions_func {
      count
    }
    shorts {
      id
      shorts_id
      products_id
    }
    shorts_func {
      count
    }
    categories {
      id
      products_id
      categories_id
    }
    categories_func {
      count
    }
    departments {
      id
      products_id
      departments_id
    }
    departments_func {
      count
    }
    coupons {
      id
      coupons_id
      products_id
    }
    coupons_func {
      count
    }
    Space {
      id
      Space_id
      products_id
    }
    Space_func {
      count
    }
    returns {
      id
      returns_id
      products_id
    }
    returns_func {
      count
    }
    comments {
      id
      comments_id
      products_id
    }
    comments_func {
      count
    }
    manufacturer {
      id
      products_id
      manufacturer_id
    }
    manufacturer_func {
      count
    }
    cart {
      id
      cart_id
      products_id
    }
    cart_func {
      count
    }
    countries {
      id
      products_id
      countries_id
    }
    countries_func {
      count
    }
    collections {
      id
      collections_id
      products_id
    }
    collections_func {
      count
    }
    translations {
      id
      translations_id
      products_id
    }
    translations_func {
      count
    }
    Receipts {
      id
      Receipts_id
      products_id
    }
    Receipts_func {
      count
    }
    buyagain {
      id
      buyagain_id
      products_id
    }
    buyagain_func {
      count
    }
  }
}

`

export default { query }