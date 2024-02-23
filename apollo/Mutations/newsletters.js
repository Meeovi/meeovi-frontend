import gql from 'graphql-tag'

export const mutation = gql`
mutation NewsletterMutation {
  subscribeEmailToNewsletter(email: "") {
    status
  }
}
`

export default { mutation }