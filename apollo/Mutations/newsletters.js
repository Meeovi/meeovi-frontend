import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_NEWSLETTER($id: ID){
  create_newsletters_items (data: {id: $id}) {
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

export default { mutation }