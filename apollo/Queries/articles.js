import gql from 'graphql-tag'

export const query = gql`
query blogQuery {
  mpBlogPosts(action: "get_post_list") {
    items {
      allow_comment
      author_id
      author_name
      author_url
      author_url_key
      created_at
      enabled
      image
      import_source
      in_rss
      layout
      meta_description
      meta_keywords
      meta_robots
      meta_title
      name
      post_id
      post_content
      publish_date
      short_description
      store_ids
      view_traffic
      url_key
      updated_at
      tags {
        items {
          name
          tag_id
        }
      }
      topics {
        items {
          name
          topic_id
        }
      }
      categories {
        items {
          name
          category_id
        }
      }
    }
    total_count
  }
}

`

export default { query }

