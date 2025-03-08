import gql from 'graphql-tag';

export const GET_PRODUCT_REVIEWS = gql`
query GetProductReviews($sku: String!) {
  products(filter: { sku: { eq: $sku } }) {
    items {
      sku
      reviews {
        items {
          nickname
          ratings_breakdown {
            name
            value
          }
          text
          created_at
        }
      }
    }
  }
}
`;

export const GET_PRODUCT_REVIEW_RATINGS_METADATA = gql`
query GetProductReviewRatingsMetadata {
  productReviewRatingsMetadata {
    items {
      id
      name
      values {
        value_id
        value
      }
    }
  }
}
`;

export const CREATE_PRODUCT_REVIEW = gql`
mutation CreateProductReview($input: CreateProductReviewInput!) {
  createProductReview(input: $input) {
    review {
      nickname
      summary
      text
      average_rating
      ratings_breakdown {
        name
        value
      }
    }
  }
}
`;
