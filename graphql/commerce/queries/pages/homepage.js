import gql from 'graphql-tag';

const homePage = gql`
  query {
    cmsPage(identifier: "home-old") {
      content
    }
  }
`;

export default homePage;
