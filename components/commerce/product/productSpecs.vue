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
        <td>{{ product?.title }}</td>
      </tr>
      <tr>
        <th>Category Name</th>
        <td>{{ product?.categories?.name }}</td>
      </tr>
      <tr>
        <th>Price</th>
        <td>
          {{ product?.variants?.calculated_price?.currency_code }} {{ product?.variants?.calculated_price?.original_price }}
        </td>
      </tr>
      <tr>
        <th>Origin Country</th>
        <td>{{ product?.origin_country }}</td>
      </tr>
      <tr>
        <th>HS Code</th>
        <td>{{ product?.hs_code }}</td>
      </tr>
      <tr>
        <th>Sku</th>
        <td>{{ product?.variants?.sku }}</td>
      </tr>
      <tr>
        <th>Material</th>
        <td>{{ product?.material }}</td>
      </tr>
      <tr>
        <th>Status</th>
        <td>{{ product?.status }}</td>
      </tr>
      <tr>
        <th>Weight</th>
        <td>{{ product?.weight }}</td>
      </tr>
      <tr>
        <th>Width</th>
        <td>{{ product?.width }}</td>
      </tr>
      <tr>
        <th>Height</th>
        <td>{{ product?.height }}</td>
      </tr>
      <tr>
        <th>Length</th>
        <td>{{ product?.length }}</td>
      </tr>
      <tr>
        <th>Type</th>
        <td>{{ product?.type?.value }}</td>
      </tr>
        <th>Collection</th>
        <td>{{ product?.collection?.title }}</td>
      </tr>
      <tr>
        <th>Keywords</th>
        <td>{{ product?.tags?.value }}</td>
      </tr>
      <tr>
        <th>Product ID</th>
        <td>{{ product?.product_id }}</td>
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
