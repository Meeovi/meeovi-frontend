import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  subscriptions {
    date_created
    date_updated
    end_date
    id
    start_date
    status
    subscription_number
  }
}
`

export default { query }