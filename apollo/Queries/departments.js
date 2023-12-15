import gql from 'graphql-tag'

const query = gql`
query {
  departments {
    id
    Active
    name
    color
    colortext
    description
    content
    brands {
      id
      brands_id {
        name
        image
      }
    }
    articles {
      articles_id {
        id
        name
        excerpt
        content
        categories {
          categories_id {
            id
            name
          }
        }
      }
    }
    image {
      filename_disk
    }
    customers {
      customers_id {
        id
        first_name
        last_name
        image {
          filename_disk
        }
      }
    }
    categories {
      categories_id {
        id
        name
        image {
          filename_disk
        }
      }
    }
    products {
      id
      products_id {
        id
        name
        price
        image {
          filename_disk
        }
        sku
        Space {
          id
          Space_id {
            id
            Name
          }
        }
      }
    }
    shorts {
      shorts_id {
        id
        name
        video {
          filename_disk
        }
      }
    }
    shops {
      shops_id {
        id
        name
      }
    }
    collections {
      collections_id {
        id
        name
      }
    }
    websites
  }
}`

export default { query }
