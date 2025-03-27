import gql from 'graphql-tag';

export const checkoutAgreements = gql`
query {
  checkoutAgreements {
    agreement_id
    checkbox_text
    content
    content_height
    is_html
    mode
    name
  }
}
`