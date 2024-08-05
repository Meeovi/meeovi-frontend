<template>
    <div>
        <v-toolbar color="transparent" title="Best Selling Products" density="compact"></v-toolbar>
        <v-table fixed-header>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Addresses
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.Addresses }}</td>
            </tr>
        </tbody>
    </v-table>
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>

</script>