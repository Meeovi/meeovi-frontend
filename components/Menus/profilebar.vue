<template>
    <v-card variant="text">
        <v-tabs style="background-color: transparent" center-active>
            <v-tab><a href="/Account/User/profile">Profile</a></v-tab>
            <v-tab><a href="/Social/newsfeed">Feed</a></v-tab>
            <v-tab><a href="/Social/spaces">Spaces</a></v-tab>
            <v-tab><a href="/Social/journals">Journals</a></v-tab>
            <v-tab><a href="/Account/User/lists">Lists</a></v-tab>
            <v-tab>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn color="black" append-icon="fas fa-caret-down" variant="text" v-bind="props">
                            Orders
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item><a href="/Account/User/orders/my-orders">Orders</a></v-list-item>
                        <v-list-item><a href="/Account/User/orders/returns">Returns</a></v-list-item>
                        <v-list-item><a href="/Account/User/orders/digital-orders">Digital Orders</a></v-list-item>
                        <v-list-item><a href="/Account/User/orders/cancelled-orders">Cancelled Orders</a></v-list-item>
                        <v-list-item><a href="/Account/User/orders/not-shipped">Not Yet Shipped</a></v-list-item>
                    </v-list>
                </v-menu>
            </v-tab>

            <v-tab><a style="color: black !important; top: 5px !important; position: relative;" href="/Commerce/coupons">Coupons</a></v-tab>
            <v-tab><a href="/Commerce/subscriptions">Subscriptions</a></v-tab>
            <v-tab><a href="/Commerce/giftcards">Gift Cards</a></v-tab>
            <v-tab><a href="/Account/User/addresses">Addresses</a></v-tab>
            <v-tab><a href="/Account/User/my-uploads">My Uploads</a></v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {

    }
</script>