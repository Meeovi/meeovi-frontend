import gql from 'graphql-tag'

export const mutation = gql`
mutation CREATE_BRAND ($id: ID){
  create_brands_items (data: {id: $id}){
    id
    created_at
    code
    name
    country
    state
    isPublic
    city
    description
    media
  }
}`

export default { mutation }
