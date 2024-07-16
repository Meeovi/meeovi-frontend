<template>
    <div>
        <!--<profilebar />-->
        <section data-bs-version="5.1" class="firmm4_features1 features1 cid-uhBuptnWmV" id="features1-9v"
            data-sortbtn="btn-primary">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 title_block">
                        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Transactions</strong></h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-3 col-md-6 col-sm-6" v-for="(transaction, index) in transactions?.items" :key="index">
                        <div class="card_wrapper">
                            <div class="card-box">
                                <div class="icon_block">
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                                    </div>
                                </div>
                                <p class="card-text mbr-fonts-style display-4">ID: {{ transaction?.transaction_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Order ID: {{ transaction?.order_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Transaction ID: {{ transaction?.transaction_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Parent Transaction ID: {{ transaction?.parent_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Payment Method: {{ transaction?.payment_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Transaction Type: {{ transaction?.txn_type }}</p>
                                <p class="card-text mbr-fonts-style display-4">Is Closed? {{ transaction?.is_closed }}</p>
                                <p class="card-text mbr-fonts-style display-4">Created: {{ new Date(transaction?.date_created).toLocaleDateString() }}</p>
                                <p class="btn_link mbr-fonts-style display-4"><a :href="`/account/user/transaction/${transaction?.transaction_id}`"
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
    import profilebar from '../../components/menus/profilebar.vue'

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
            //url: process.env.DIRECTUS_URL,
        }),
        setup() {
            return {}
        },
    }
</script>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import {
        getTransactions
    } from '~/composables/sales/getTransactions';

    const transactions = ref([]);

    onMounted(async () => {
        transactions.value = await getTransactions();
    });
    /*  const {
        getItems
      } = useDirectusItems()

      const coupons = await getItems({
        collection: "coupons",
      });*/

    useHead({
        title: 'Transactions',
    })

    definePageMeta({
        //middleware: ['auth-logged-in'],
    })
</script>