<template>
    <v-table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{ data?.product?.name }}</td>
        </tr>
        <tr>
          <th>Category Name</th>
          <td>{{ data?.product?.productCategories?.nodes?.name }}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>{{ data?.product?.price }}</td>
        </tr>
        <tr>
          <th>Average Rating</th>
          <td>{{ data?.product?.averageRating }}</td>
        </tr>
        <tr>
          <th># of Reviews</th>
          <td>{{ data?.product?.reviewCount }}</td>
        </tr>
        <tr>
          <th>Sale Price</th>
          <td>{{ data?.product?.salePrice }}</td>
        </tr>
        <tr>
          <th>Sku</th>
          <td>{{ data?.product?.sku }}</td>
        </tr>
        <tr>
          <th>How many items are left?</th>
          <td>{{ data?.product?.stockQuantity }}</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>{{ data?.product?.weight }}</td>
        </tr>
        <tr>
          <th>Height</th>
          <td>{{ data?.product?.height }}</td>
        </tr>
        <tr>
          <th>Width</th>
          <td>{{ data?.product?.width }}</td>
        </tr>
        <tr>
          <th>Total Sales</th>
          <td>{{ data?.product?.totalSales }}</td>
        </tr>
        <tr>
          <th>Tax Class</th>
          <td v-html="data?.product?.taxClass"></td>
        </tr>
        <tr>
          <th>Tax Status</th>
          <td>{{ data?.product?.taxStatus }}</td>
        </tr>
        <tr>
          <th>Stock Status</th>
          <td>{{ data?.product?.stockStatus }}</td>
        </tr>
        <tr>
          <th># of Reviews</th>
          <td>{{ data?.product?.reviewCount }}</td>
        </tr>
        <tr>
          <th>Format</th>
          <td>{{ data?.product?.type }}</td>
        </tr>
        <tr>
          <th>Product Released</th>
          <td>{{ data?.product?.date }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>

<script>
  export default {
    data () {
      return {

      }
    },
  }
</script>

<script setup>
const route = useRoute();
const query = gql`
query NewQuery ($id: ID!) {
  product(id: $id) {
    averageRating
    content
    date
    description
    id
    name
    onSale
    sku
    slug
    status
    type
    ... on SimpleProduct {
      id
      name
      downloadable
      price
      stockQuantity
      backorders
      height
      productCategories {
        nodes {
          name
        }
      }
      reviewCount
      salePrice
      sku
      slug
      status
      stockStatus
      taxClass
      taxStatus
      totalSales
      type
      weight
      width
      virtual
    }
    totalSales
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { id: route.params.id });
</script>