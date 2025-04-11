<template>
    <div>
        <section data-bs-version="5.1" class="pricing-tables2 agencym4_pricing2 cid-uHg0pXn9VJ" id="pricing-tables2-ao">
            <div class="container">
                <div class="media-container-row">
                    <div class="plan col-12 col-lg-3 col-md-6 col-sm-6 mx-3 my-2 justify-content-center"
                        v-for="(invoice, index) in invoices" :key="index">
                        <div class="plan-header text-center pb-4">
                            <h3 class="plan-title mbr-white mbr-fonts-style pb-3 pt-3 mb-5 px-3 display-7">
                                Invoices
                            </h3>
                            <div class="plan-price px-3">
                                <span class="price-value mbr-fonts-style display-5"> $ </span>
                                <span class="price-figure mbr-fonts-style display-2"> {{ invoice?.grand_total }} </span>
                            </div>
                        </div>
                        <div class="plan-body pt-4">
                            <div class="plan-list pb-4 align-center">
                                <ul class="list-group list-group-flush mbr-fonts-style display-7">
                                    <li class="list-group-item>Invoice: {{ invoice?.entity_id }}</p>
                                    <li class="list-group-item>Invoice Date:
                                        {{ new Date(invoice?.created_at).toLocaleDateString() }}</li>
                                    <li class="list-group-item">Order #: {{ invoice?.order_id }}</li>
                                    <li class="list-group-item">Order Date: {{ invoice?.updated_at }}
                                    </li>
                                    <li class="list-group-item">Bill to Name:
                                        {{ new Date(invoice?.date_created).toLocaleDateString() }}</li>
                                    <li class="list-group-item">Status: {{ invoice?.state }}</li>
                                    <li class="list-group-item">Grand Total (Base):
                                        {{ invoice?.base_grand_total }}</li>
                                    <li class="list-group-item">Grand Total (Purchased):
                                        {{ invoice?.grand_total }}</li>
                                    <p class="btn_link mbr-fonts-style display-4">
                                        <NuxtLink :to="`/account/user/invoice/${invoice?.id}`" class="text-secondary">
                                            View<span class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></NuxtLink>
                                    </p>
                                </ul>
                            </div>
                            <div class="mbr-section-btn align-center pb-4">
                                <a href="#" class="btn btn-primary btn-bgr display-4">BUY NOW</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from 'vue';

    import {
        getInvoices
    } from '~/composables/commerce/sales/getInvoices';

    const model = ref(null)
    const invoices = ref([]);

    onMounted(async () => {
        invoices.value = await getInvoices();
    });

    useHead({
        title: 'Invoices',
    })

    definePageMeta({
        middleware: ['authenticated'],
    })
</script>