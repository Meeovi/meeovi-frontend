import gql from 'graphql-tag'

export const query = gql`
query {
    customers (filter: {type: {_contains: "Seller"}}){
        id
        first_name
        last_name
        username
        image {
        filename_disk
        }
    }
  }`

export default { query }