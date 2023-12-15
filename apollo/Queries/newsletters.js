import gql from 'graphql-tag'

export const query = gql`
query {
  newsletters {
    id
    email
    customer_first_name
    customer_last_name
    store
    status
    websites
    created_at
  }
}`

export default { query }