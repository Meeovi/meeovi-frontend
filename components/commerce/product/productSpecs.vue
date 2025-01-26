<template>
  <v-table>
    <tbody>
      <tr>
        <th>Released</th>
        <td>{{ new Date(product?.created_at).toLocaleDateString() }}</td>
      </tr>
      <tr>
        <th>Updated</th>
        <td>{{ new Date(product?.updated_at).toLocaleDateString() }}</td>
      </tr>
      <tr>
        <th>Name</th>
        <td>{{ product?.name }}</td>
      </tr>
      <tr>
        <th>Category Name</th>
        <td>{{ product?.categories?.map(cat => cat.name).join(', ') }}</td>
      </tr>
      <tr>
        <th>Price</th>
        <td>
          <strong>{{ product?.price_range?.minimum_price?.regular_price?.currency }} &nbsp;</strong>
          {{ product?.price_range?.minimum_price?.regular_price?.value }}
        </td>
      </tr>
      <tr>
        <th>Average Rating</th>
        <td>{{ product?.rating_summary }}</td>
      </tr>
      <tr>
        <th># of Reviews</th>
        <td>{{ product?.review_count }}</td>
      </tr>
      <tr>
        <th>Sku</th>
        <td>{{ product?.sku }}</td>
      </tr>
      <tr>
        <th>How many items are left?</th>
        <td>{{ product?.extension_attributes?.stock_item?.qty }}</td>
      </tr>
      <tr>
        <th>Visibility</th>
        <td>{{ product?.visibility }}</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>{{ product?.weight }}</td>
      </tr>
      <tr>
        <th>Format</th>
        <td>{{ product?.format }}</td>
      </tr>
      <tr>
        <th>Product Sizes</th>
        <td>{{ product?.size }}</td>
      </tr>
      <tr>
        <th>Product Colors</th>
        <td>{{ product?.color }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
