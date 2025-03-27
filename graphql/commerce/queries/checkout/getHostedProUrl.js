import gql from 'graphql-tag';

export const getHostedProUrl = gql`
query {
  getHostedProUrl(input: { cart_id: "mwqoyxgbibvgkr3udszfzomxpoj2gmj6" }) {
    secure_form_url
  }
}
`