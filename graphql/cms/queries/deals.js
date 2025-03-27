import gql from 'graphql-tag';

const deals = gql`
query MyQuery {
  products(where: {maxPrice: 20}) {
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
        type
      }
      catalogVisibility
    }
  }
}`

export {deals};