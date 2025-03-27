import gql from 'graphql-tag';

const post = gql`
query($id: String) {
  blogPost (id: $id) {
      author {
        name
      }
      author_id
      canonical_url
      categories {
        title
      }
      category_id
      content
      content_heading
      creation_time
      custom_layout
      custom_layout_update_xml
      custom_theme
      custom_theme_from
      custom_theme_to
      end_time
      featured_image
      featured_img_alt
      featured_list_image
      featured_list_img_alt
      filtered_content
      first_image
      identifier
      include_in_recent
      is_active
      is_recent_posts_skip
      layout_update_xml
      media_gallery
      meta_description
      meta_keywords
      meta_title
      og_description
      og_image
      og_title
      og_type
      page_layout
      position
      post_id
      post_url
      publish_time
      related_products
      relatedproduct_id
      relative_url
      search
      secret
      short_content
      short_filtered_content
      tag_id
      tags {
        title
      }
      title
      type
      update_time
      views_count
    }
}
`

export default post;