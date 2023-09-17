export const GET_ACTIVE_ORDER = /*GraphQL*/ `
  query GetActiveOrder {
    activeOrder {
      ...UpdatedOrder
    }
  }
  fragment UpdatedOrder on Order {
    id
    code
    state
    totalQuantity
    totalWithTax
    currencyCode
    lines {
      id
      unitPriceWithTax
      quantity
      linePriceWithTax
      productVariant {
        id
        name
      }
    }
  }
`;

export const ADD_ITEM_TO_ORDER = /*GraphQL*/ `
mutation AddItemToOrder($variantId: ID!, $quantity: Int!) {
  addItemToOrder(productVariantId: $variantId, quantity: $quantity) {
    __typename
    ...UpdatedOrder
    ... on ErrorResult {
      errorCode
      message
    }
    ... on InsufficientStockError {
      quantityAvailable
      order {
        ...UpdatedOrder
      }
    }
  }
}

fragment UpdatedOrder on Order {
  id
  code
  state
  totalQuantity
  totalWithTax
  currencyCode
  lines {
    id
    unitPriceWithTax
    quantity
    linePriceWithTax
    productVariant {
      id
      name
    }
  }
}
`;

export const GET_PRODUCT_DETAIL = /*GraphQL*/ `
query GetProductDetail($slug: String!) {
  product(slug: $slug) {
    id
    name
    description
    featuredAsset {
      id
      preview
    }
    assets {
      id
      preview
    }
    variants {
      id
      name
      sku
      stockLevel
      currencyCode
      price
      priceWithTax
      featuredAsset {
        id
        preview
      }
      assets {
        id
        preview
      }
    }
  }
}
`;
