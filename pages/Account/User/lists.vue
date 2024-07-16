<template>
    <div>
        <!--<profilebar />-->
        <section data-bs-version="5.1" class="firmm4_features1 features1 cid-uhBuptnWmV" id="features1-9v"
            data-sortbtn="btn-primary">
            <v-toolbar color="transparent">
                <v-toolbar-title>
                    <div class="mbr-section-head pb-4">
                        <h4 class="mbr-section-title mbr-fonts-style align-left mb-0 display-5">Lists
                        </h4>

                    </div>
                </v-toolbar-title>

                <div class="d-flex justify-center align-center h-100">
                    <createlist />
                </div>
            </v-toolbar>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-3 col-md-6 col-sm-6" v-for="item in wishlist" :key="item">
                        <div class="card_wrapper">
                            <div class="card-box">
                                <div class="icon_block">
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                                    </div>
                                </div>
                                <p class="card-text mbr-fonts-style display-4">User: {{ item?.customer_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Wishlist #: {{ item?.wishlist_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Shared: {{ item?.shared }}</p>
                                <p class="card-text mbr-fonts-style display-4">Code: {{ item?.sharing_code }}</p>
                                <p class="btn_link mbr-fonts-style display-4"><a
                                        :href="`/account/user/item/${item?.wishlist_id}`"
                                        class="text-secondary">View<span
                                            class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import profilebar from '../../../components/menus/profilebar.vue'
    import createlist from '../../../components/partials/createListBtn.vue'

    export default {
        components: {
            profilebar,
            createlist
        },
        data: () => ({
            model: null,
            //url: process.env.DIRECTUS_URL,
        }),
    }
</script>

<script setup>
    const {
        data: wishlist
    } = await useFetch('/api/catalog/wishlists')

    /*const {
        getItems
      } = useDirectusItems()

      const lists = await getItems({
        collection: "lists",
      }); */

    useHead({
        title: 'Lists',
    })

    definePageMeta({
        //middleware: ['auth-logged-in'],
    })
</script>