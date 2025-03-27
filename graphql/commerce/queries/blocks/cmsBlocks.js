import gql from 'graphql-tag';

export const cmsBlocks = gql`
query {
  cmsBlocks(identifiers: "login-data") {
    items {
      identifier
      title
      content
    }
  }
}
`