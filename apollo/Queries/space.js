import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  Space {
    Description
    Image
    Name
    date_created
    date_updated
    id
    sort
    status
    user_created
    user_updated
  }
  Space_newsfeed {
    Space {
      Description
      Image
      Name
      date_created
      date_updated
      id
      sort
      status
      user_created
      user_updated
    }
  }
  Space_products {
    product {
      content
      created_at
      file
      format
      height
      id
      image
      like
      name
      part_number
      price
      rating
      size
      sku
      stock_status
      tax_class
      type
      visibility
      weight
    }
  }
  Space_shorts {
    short {
      date_created
      date_updated
      description
      id
      name
      sort
      status
      user_created
      user_updated
      video
    }
  }
}

`

export default { query }
