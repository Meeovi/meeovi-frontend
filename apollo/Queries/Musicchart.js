import gql from 'graphql-tag'

export const query = gql`
query {
    musicchart {
      id
      sort
      status
      user_created
      user_updated
      date_created
      date_updated
      name
      description
      product_id 
      image {
        filename_disk
      }
      category_id
      customer_id
    }
  }`

export default { query }