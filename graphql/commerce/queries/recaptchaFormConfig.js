import gql from 'graphql-tag';

export const recaptchaV3FormConfig = gql`
query {
  recaptchaV3Config {
    minimum_score
    website_key
    badge_position
    failure_message
    forms
  }
}
`