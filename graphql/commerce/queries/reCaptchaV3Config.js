import gql from 'graphql-tag';

export const recaptchaFormConfig = gql`
query {
    recaptchaFormConfig(formType:CONTACT) {
        is_enabled
        configurations {
        re_captcha_type
        badge_position
        website_key
        theme
        language_code
        minimum_score
        validation_failure_message
        technical_failure_message
      }
  }
}
`