import gql from 'graphql-tag';

const products = gql`
query MyQuery {
  products {
    nodes {
      id
      image {
        sourceUrl
      }
      name
      onSale
      purchasable
      reviewCount
      shortDescription
      sku
      slug
      totalSales
      type
      ... on SimpleProduct {
        id
        name
        averageRating
        content
        date
        description
        downloadExpiry
        downloadLimit
        downloadable
        price
        productCategories {
          nodes {
            id
            name
          }
        }
        weight
        width
        status
        taxClass
        stockStatus
        stockQuantity
        taxStatus
        totalSales
      }
    }
  }
}`

export {products};