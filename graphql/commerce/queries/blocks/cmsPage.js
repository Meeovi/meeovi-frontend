import gql from 'graphql-tag';

export const cmsPage = gql`
query {
  cmsPage(identifier: "no-route") {
    identifier
    url_key
    title
    content
    content_heading
    page_layout
    meta_title
    meta_description
    meta_keywords
  }
}
`