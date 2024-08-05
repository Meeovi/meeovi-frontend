<template>
    <v-table>
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{ products?.name }}</td>
        </tr>
        <tr>
          <th>Category Name</th>
          <td>{{ products?.categories?.name }}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td><strong>{{ data?.products?.items?.price_range?.minimum_price?.regular_price?.currency }}&nbsp;</strong>{{ data?.products?.items?.price_range?.minimum_price?.regular_price?.value }}</td>
        </tr>
        <tr>
          <th>Special Price</th>
          <td>{{ products?.special_price }}</td>
        </tr>
        <tr>
          <th>Special to Date </th>
          <td>{{ products?.special_to_date }}</td>
        </tr>
        <tr>
          <th>Average Rating</th>
          <td>{{ products?.rating_summary }}</td>
        </tr>
        <tr>
          <th># of Reviews</th>
          <td>{{ products?.review_count }}</td>
        </tr>
        <tr>
          <th>Sku</th>
          <td>{{ products?.sku }}</td>
        </tr>
        <tr>
          <th>How many items are left?</th>
          <td>{{ products?.only_x_left_in_stock }}</td>
        </tr>
        <tr>
          <th>Gift Message Available?</th>
          <td>{{ products?.gift_message_available }}</td>
        </tr>
        <tr>
          <th>Country of Manufacture</th>
          <td>{{ products?.country_of_manufacture }}</td>
        </tr>
        <tr>
          <th>Format</th>
          <td>{{ products?.format }}</td>
        </tr>
        <tr>
          <th>Product Sizes</th>
          <td>{{ products?.size }}</td>
        </tr>
        <tr>
          <th>Product Colors</th>
          <td>{{ products?.color }}</td>
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
  const props = defineProps({
    product: {
      type: Object,
      required: true,
    },
  });
  const {
    product
  } = props;
</script>