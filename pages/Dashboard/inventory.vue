<template>
    <div>
        <sellerbar />
        <v-row>
            <v-col cols="8"><v-toolbar color="transparent" title="Inventory Management" density="compact"></v-toolbar></v-col>
            <v-col cols="4"><addproduct /></v-col>
        </v-row>
        <v-table fixed-header>
        <thead>
            <tr>
                <th class="text-left">
                    Thumbnail
                </th>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Price
                </th>
                <th class="text-left">
                    # of Sales
                </th>
                <th class="text-left">
                    # of Customers Purchased
                </th>
                <th class="text-left">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.Addresses }}</td>
                <td>{{ item.Addresses }}</td>
                <td>{{ item.Addresses }}</td>
                <td>{{ item.Addresses }}</td>
                <td><a :href="`/Dashboard/Inventory/${item.Addresses}`"></a></td>
            </tr>
        </tbody>
    </v-table>
    </div>
</template>

<script>
import sellerbar from '../../components/Menus/sellerbar.vue'
import addproduct from './Upload/add-inventory.vue'

export default {
    components: { sellerbar, addproduct }
}
</script>

<script setup>
    useHead({
        title: 'Inventory - Sellers Dashboard'
    })
</script>