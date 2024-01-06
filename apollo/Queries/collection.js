import gql from 'graphql-tag'

export const query = gql`
query MyQuery {
  collection {
    createdAt
    customFieldsPopularityscore
    featuredAssetId
    filters
    id
    inheritFilters
    isPrivate
    isRoot
    parentId
    position
    updatedAt
    products {
      createdAt
      customFieldsCollections
      customFieldsPopularityscore
      customFieldsPrice
      customFieldsPrimarycollectionid
      customFieldsWeight
      deletedAt
      enabled
      featuredAssetId
      id
      updatedAt
      product_variants {
        createdAt
        customFieldsMaxperorder
        customFieldsWeight
        deletedAt
        enabled
        featuredAssetId
        id
        outOfStockThreshold
        productId
        sku
        taxCategoryId
        trackInventory
        updatedAt
        useGlobalOutOfStockThreshold
      }
    }
  }
}
`

export default { query }