<template>
    <div>
        <v-card min-width="500px" style="padding-left: 15px; padding-bottom: 15px;">
                <v-toolbar color="transparent" density="compact" title="Items (2 Items)">
                  <v-btn prepend-icon="fas fa-trash">Remove All</v-btn>
                </v-toolbar>
                <v-table fixed-header>
                  <thead>
                    <tr>
                      <th class="text-left">
                        Image
                      </th>
                      <th class="text-left">
                        Product Name
                      </th>
                      <th class="text-left">
                        Price
                      </th>
                      <th class="text-left">
                        Color
                      </th>
                      <th class="text-left">
                        Size
                      </th>
                      <th class="text-left">
                        Quantity
                      </th>
                      <th class="text-left">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <v-avatar image="https://cdn.vuetifyjs.com/images/john.jpg" rounded="0" size="70"></v-avatar>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <v-text-field type="number" label="Quantity" hide-details="auto">
                        </v-text-field>
                      </td>
                      <td>
                        <v-btn icon="fas fa-xmark" size="x-small"></v-btn>
                      </td>
                    </tr>
                  </tbody>
                </v-table>
              </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<script setup>

</script>