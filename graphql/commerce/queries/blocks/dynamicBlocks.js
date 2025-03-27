import gql from 'graphql-tag';

export const dynamicBlocks = gql`
query {
  dynamicBlocks(input:
  {
    type: SPECIFIED
  })
  {
    items {
      uid
      content {
        html
      }
    }
    page_info {
      current_page
      page_size
      total_pages
    }
    total_count
  }
}

`