import gql from 'graphql-tag';

const homeSlider = gql`
  query {
    cmsBlocks (identifiers: "homepage-slider") {
      items {
        content
      }
    }
  }
`;

export default homeSlider;
