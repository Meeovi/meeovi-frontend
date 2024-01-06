import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  articles {
    content
    created_at
    excerpt
    id
    image
    isPublic
    name
    stamp
    type
    articles_categories {
      category {
        content
        description
        id
        image
        name
      }
    }
    articles_comments {
      comment {
        created_at
        helpful
        media
        id
        name
        response
        updated_at
      }
    }
    articles_customers {
      customer {
        Address
        created_at
        dateofbirth
        description
        email
        first_name
        gender
        id
        image
        last_name
        middle_name
        name_prefix
        name_suffix
        password
        payment
        phone
        tax_vat_number
        type
        username
        websites
        zipcode
      }
    }
    tags_articles {
      tag {
        date_created
        description
        id
        image
        name
        sort
        status
      }
    }
  }
}
`

export default { query }

