import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_WEBSITES($id: ID){
  create_websites_items (data: {id: $id}) {
    id
    name
    url
    shop
    store
    category
  }
}`

export default { mutation }