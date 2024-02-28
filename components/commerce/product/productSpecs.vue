<template>
    <v-table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{ data?.products?.name }}</td>
        </tr>
        <tr>
          <th>Category Name</th>
          <td>{{ data?.products?.categories?.name }}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>{{ data?.products?.price_range?.maximum_price?.regular_price?.currency }} {{ data?.products?.price_range?.maximum_price?.regular_price?.value }}</td>
        </tr>
        <tr>
          <th># of Ratings</th>
          <td>{{ data?.products?.rating_summary }}</td>
        </tr>
        <tr>
          <th>Special Price</th>
          <td>{{ data?.products?.special_price }}</td>
        </tr>
        <tr>
          <th>Sku</th>
          <td>{{ data?.products?.sku }}</td>
        </tr>
        <tr>
          <th>How many items are left?</th>
          <td>{{ data?.products?.only_x_left_in_stock }}</td>
        </tr>
        <tr>
          <th>Manufacture</th>
          <td>{{ data?.products?.manufacturer }}</td>
        </tr>
        <tr>
          <th>Country of Manufacture</th>
          <td>{{ data?.products?.country_of_manufacturer }}</td>
        </tr>
        <tr>
          <th>Short Description</th>
          <td v-html="data?.products?.short_description?.html"></td>
        </tr>
        <tr>
          <th>Gift Message Available</th>
          <td>{{ data?.products?.gift_message_available }}</td>
        </tr>
        <tr>
          <th>Stock Status</th>
          <td>{{ data?.products?.stock_status }}</td>
        </tr>
        <tr>
          <th># of Reviews</th>
          <td>{{ data?.products?.review_count }}</td>
        </tr>
        <tr>
          <th>Format</th>
          <td>{{ data?.products?.format }}</td>
        </tr>
        <tr>
          <th>Product Created</th>
          <td>{{ data?.products?.created_at }}</td>
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
const query = gql `
query {
  products(filter: {url_key: {eq: ""}}) {
    items {
      uid
      name
      categories {
        name
      }
      price_range {
        maximum_price {
          regular_price {
            currency
            value
          }
        }
      }
      image {
        url
      }
      rating_summary
      color
      created_at
      description {
        html
      }
      format
      manufacturer
      country_of_manufacture
      media_gallery {
        url
      }
      only_x_left_in_stock
      review_count
      reviews {
        items {
          nickname
          summary
          text
          average_rating
          created_at
          ratings_breakdown {
            name
            value
          }
        }
      }
      short_description {
        html
      }
      size
      sku
      special_price
      gift_message_available
      stock_status
    }
  }
}

`

  const {
    data
  } = useAsyncQuery(query);
</script>