<template>
    <v-card class="lowerbar">
        <v-tabs style="background-color: transparent" center-active>
            <h5>Seller's Dashboard</h5>
            <v-tab><a href="/Dashboard/">Home</a></v-tab>
            <v-tab><a href="/Dashboard/inventory">Inventory</a></v-tab>
            <v-tab><a href="/Dashboard/stores">Stores</a></v-tab>
            <v-tab><a href="/Dashboard/payments">Payments</a></v-tab>
            <v-tab><a href="/Admin/User/profile">Profile</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {

    }
</script>