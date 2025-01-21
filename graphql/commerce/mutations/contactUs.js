import {
  gql
} from 'graphql-tag'

export const CONTACT_US = gql`
  mutation ContactUs($name: String!, $email: String!, $comment: String!) {
    contactUs(
      input: {
        name: $name
        email: $email
        comment: $comment
      }
    ) {
      status
    }
  }
`;