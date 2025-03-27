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
        <td>{{ product?.only_x_left_in_stock }}</td>
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
        <th>Product {{ product?.custom_attributesV2?.items[0]?.code }}</th>
        <td>{{ product?.custom_attributesV2?.items[0]?.value }}</td>
      </tr>
      <tr>
        <th>Product {{ product?.custom_attributesV2?.items[0]?.code }}</th>
        <td>{{ product?.custom_attributesV2?.items[0]?.value }}</td>
      </tr>
      <tr>
        <th>Product Manufacturer</th>
        <td>{{ product?.manufacturer }}</td>
      </tr>
      <tr>
        <th>Product Description</th>
        <td><div v-html="product?.description?.html"></div></td>
      </tr>
      <tr>
        <th>Product Short Description</th>
        <td><div v-html="product?.short_description?.html"></div></td>
      </tr>
      <tr>
        <th>Product Meta Title</th>
        <td>{{ product?.meta_title }}</td>
      </tr>
      <tr>
        <th>Product Meta Keywords</th>
        <td>{{ product?.meta_keyword }}</td>
      </tr>
      <tr>
        <th>Product Meta Description</th>
        <td>{{ product?.meta_description }}</td>
      </tr>
      <tr>
        <th>Product Returnable?</th>
        <td>{{ product?.is_returnable }}</td>
      </tr>
      <tr>
        <th>Product URL Key</th>
        <td>{{ product?.url_key }}</td>
      </tr>
      <tr>
        <th>Product URL Path</th>
        <td>{{ product?.url_path }}</td>
      </tr>
      <tr>
        <th>Product Gift Message Availability</th>
        <td>{{ product?.gift_message_available }}</td>
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