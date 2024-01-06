import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  buyagain {
    date_created
    id
    buyagain_products {
      product {
        content
        created_at
        file
        format
        meeovistores_products_aggregate
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
  }
}
`

export default { query }