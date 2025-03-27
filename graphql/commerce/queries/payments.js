import gql from 'graphql-tag';

const payments = gql`
query NewQuery {
  customer {
    displayName
    id
    username
    role
    date
    availablePaymentMethods {
      id
      isDefault
      type
      gateway {
        description
        icon
        id
        title
      }
    }
  }
}
`

const CREATE_CUSTOMER = gql`
mutation createCustomer(
  $email: String!
  $firstname: String!
  $lastname: String!
) {
  createCustomer(
    input: {
      email: $email
      firstname: $firstname
      lastname: $lastname
    }
  ) {
    customer {
      id
      firstname
      lastname
      email
    }
  }
}`

export default { customers, CREATE_CUSTOMER }