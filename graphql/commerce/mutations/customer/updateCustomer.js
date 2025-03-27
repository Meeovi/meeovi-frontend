import { gql } from 'graphql-tag';

export const UPDATE_CUSTOMER = gql`
  mutation UpdateCustomer(
    $firstname: String
    $middlename: String
    $lastname: String
    $prefix: String
    $suffix: String
    $email: String
    $dob: String
    $default_billing: String
    $default_shipping: String
    $job_title: String
    $gender: Int
    $company: String
    $role: String
    $taxvat: String
    $team: String
    $telephone: String
    $website: String
    $avatar_path: String
  ) {
    updateCustomerV2(
      input: {
        firstname: $firstname
        middlename: $middlename
        lastname: $lastname
        prefix: $prefix
        suffix: $suffix
        email: $email
        dob: $dob
        default_billing: $default_billing
        default_shipping: $default_shipping
        custom_attributes: [
          { attribute_code: "job_title", value: $job_title }
          { attribute_code: "gender", value: $gender }
          { attribute_code: "company", value: $company }
          { attribute_code: "role", value: $role }
          { attribute_code: "taxvat", value: $taxvat }
          { attribute_code: "team", value: $team }
          { attribute_code: "telephone", value: $telephone }
          { attribute_code: "website", value: $website }
          { attribute_code: "avatar_path", value: $avatar_path }
        ]
      }
    ) {
      customer {
        firstname
        middlename
        lastname
        prefix
        suffix
        email
        dob
        default_billing
        default_shipping
        custom_attributes {
          code
          value
        }
      }
    }
  }
`;
