<template>
    <div>
        <!---->
        <section data-bs-version="5.1" class="features07 scalem5 cid-uhB4hw1yxB mbr-fullscreen" id="features07-9l">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-10 card">
                        <div class="title-wrapper">
                            <h2 class="mbr-section-title mbr-fonts-style display-5">
                                View Transaction</h2>
                        </div>
                    </div>
                    <div class="col-12 col-lg-12">
                        <div class="items-wrapper">
                            <div class="item features-without-image item-mb">
                                <div class="item-wrapper">
                                    <div class="card-box">
                                        <div class="icon-wrapper">
                                            <span class="mbr-iconfont mobi-mbri-growing-chart mobi-mbri"></span>
                                        </div>
                                        <h4 class="card-title mbr-fonts-style display-7">
                                            Transaction Information
                                        </h4>
                                        <NuxtLink class="card-text mbr-fonts-style display-7" :href="`/account/user/orders/my-order/${transaction?.order_id}`">Order #:
                                            {{ transaction?.order_id }}</NuxtLink>
                                        <p class="card-text mbr-fonts-style display-7">Transaction ID: {{ transaction?.transaction_id }}</p>    
                                        <p class="card-text mbr-fonts-style display-7">Transaction Date:
                                            {{ new Date(transaction?.created_at).toLocaleDateString() }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Is it Closed?
                                            {{ transaction?.is_closed }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Parent Transaction ID: {{ transaction?.parent_id }}</p>
                                        <p class="card-text mbr-fonts-style display-7">Payment ID: {{ transaction?.payment_id }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NuxtImg loading="lazy" src="~/~/assets/images/background2.jpg" alt="Transactions">
        </section>
    </div>
</template>

<script>
    

    export default {
        components: {
            profilebar
        },
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import {
        getTransactionById
    } from '~/composables/commerce/sales/getTransactions';

    const transaction = ref([]);

    onMounted(async () => {
        transaction.value = await getTransactionById();
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
        middleware: ['authenticated'],
    })
</script>