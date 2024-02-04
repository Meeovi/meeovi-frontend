<template>
    <div>
        <v-table fixed-header min-height="300px">
            <tbody>
                <tr>
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <v-divider vertical></v-divider>
                    <td>{{data?.products_by_id?.name}}</td>
                </tr>
                <tr>
                    <th class="text-left">
                        Format
                    </th>
                    <v-divider vertical></v-divider>
                    <td>{{data?.products_by_id?.format}}</td>
                </tr>
                <tr>
                    <th class="text-left">
                        Part Number
                    </th>
                    <v-divider vertical></v-divider>
                    <td>{{data?.products_by_id?.part_number}}</td>
                </tr>
                <tr>
                    <th class="text-left">
                        Weight
                    </th>
                    <v-divider vertical></v-divider>
                    <td>{{data?.products_by_id?.weight}}</td>
                </tr>
                <tr>
                    <th class="text-left">
                        Height
                    </th>
                    <v-divider vertical></v-divider>
                    <td>{{data?.products_by_id?.height}}</td>
                </tr>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>

<script setup>
    const query = gql `
  query products_by_id($id: ID!){
    products_by_id(id: $id){
      id
        name
        weight
        height
        part_number
        format
    }
    }
    `

    const {
        data
    } = await useAsyncQuery(query)
</script>