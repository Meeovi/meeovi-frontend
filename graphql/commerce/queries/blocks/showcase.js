import gql from 'graphql-tag';

const showcaseBlock = gql`
  query {
    cmsBlocks (identifiers: "showcase-block") {
      items {
        content
      }
    }
  }
`;

export default showcaseBlock;
