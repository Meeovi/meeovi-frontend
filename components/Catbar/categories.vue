<template>
    <v-card>
        <v-tabs bg-color="deep-purple-darken-4" center-active>
            <v-tab>
                <v-list-item title="What's New" value="" href="/categories/new"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Books" value="" href="/categories/books"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Music" value="" href="/categories/music"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Theater" value="" href="/categories/theater"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Games" value="" href="/categories/games"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Podcasts" value="" href="/categories/podcasts"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Sports & Fitness" value="" href="/categories/sportsfitness"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Newsfeed" value="" href="/social/newsfeed"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Groups" value="" href="/social/groups"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Coupons" value="" href="/commerce/coupons"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Crafts" value="" href="/crafts/"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Yardsale" value="" href="/yardsale/"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Exclusives" value="" href="/commerce/exclusives"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Songwriter's Corner" value="" href="/categories/songwriters"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Events" value="" href="/categories/events"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="What's Live" value="" href="/categories/live"></v-list-item>
            </v-tab>
            <v-tab>
                <v-menu :location="location" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="flat" v-bind="props">
                            <v-icon start title="Account & Lists"></v-icon>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-row>
                            <v-col cols="4">
                                <h6><a href="/commerce/buyagain">View All & Manage</a></h6>
                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/5.jpg" title="Sample Product" value="sample product" subtitle="$9.99" href="/"></v-list-item>
                            </v-col>
                            <v-col cols="4">
                                <h6><a href="/commerce/lists">Your Lists</a></h6>
                                <v-list-item title="Your Wishlist" value="your wishlist" href="/commerce/wishlists"></v-list-item>
                                <v-divider></v-divider>
                                <v-list-item title="Sample List" value="sample list" href="/"></v-list-item>
                            </v-col>
                            <v-col cols="4">
                                <h6>Your Account</h6>
                                <v-list-item title="Account" value="account" href="/admin/user/account">
                                </v-list-item>
                                <v-list-item title="Orders" value="orders" href="/admin/user/orders">
                                </v-list-item>
                                <v-list-item title="Recommendations" value="recommendations" href="/admin/user/recommendations">
                                </v-list-item>
                                <v-list-item title="Browsing History" value="browsing history" href="/admin/user/history">
                                </v-list-item>
                                <v-list-item title="Watchlist" value="watchlist" href="/admin/user/watchlist">
                                </v-list-item>
                                <v-list-item title="Start a Selling Account" value="start a selling account" href="/sell/">
                                </v-list-item>
                                <v-list-item title="Customer Service" value="customer service" href="https://help.meeovi.com">
                                </v-list-item>
                                <v-list-item title="Your Uploads" value="your uploads" href="/admin/user/my-uploads">
                                </v-list-item>
                                <v-list-item title="Logout" value="logout" href="/logout">
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-list>
                </v-menu>
            </v-tab>
            <v-tab>
                <v-list-item title="Returns & Orders" value="" href="/commerce/returns/"></v-list-item>
            </v-tab>
            <v-tab>
                <v-list-item title="Buy Again" value="" href="/commerce/buyagain/"></v-list-item>
            </v-tab>
        </v-tabs>
    </v-card>
</template>

<script>
    export default {
        data: () => ({
            location: 'bottom',
            tab: null,
        }),
    }
</script>