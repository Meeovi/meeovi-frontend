<template>
    <div>
        <!---->
        <section data-bs-version="5.1" class="firmm4_features1 features1 cid-uhBuptnWmV" id="features1-9v"
            data-sortbtn="btn-primary">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 title_block">
                        <h3 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                            <strong>Shipments</strong></h3>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-3 col-md-6 col-sm-6" v-for="(shipment, index) in shipments" :key="index">
                        <div class="card_wrapper">
                            <div class="card-box">
                                <div class="icon_block">
                                    <div class="iconfont-wrapper">
                                        <span class="mbr-iconfont mobi-mbri-cart-full mobi-mbri"></span>
                                    </div>
                                </div>
                                <p class="card-text mbr-fonts-style display-4">Shipment: {{ shipment?.entity_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Ship Date: {{ new Date(shipment?.created_at).toLocaleDateString() }}</p>
                                <p class="card-text mbr-fonts-style display-4">Order #: {{ shipment?.order_id }}</p>
                                <p class="card-text mbr-fonts-style display-4">Order Date: {{ shipment?.updated_at }}
                                </p>
                                <p class="card-text mbr-fonts-style display-4">Ship to Name:
                                    {{ new Date(shipment?.customer_id).toLocaleDateString() }}</p>
                                <p class="card-text mbr-fonts-style display-4">Total Quantity: {{ shipment?.total_qty }}</p>
                                <p class="btn_link mbr-fonts-style display-4"><NuxtLink :to="`/account/user/shipment/${shipment?.id}`"
                                        class="text-secondary">View<span
                                            class="mobi-mbri mobi-mbri-right mbr-iconfont"></span></NuxtLink></p>
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
        getShipments
    } from '~/composables/commerce/sales/getShipments';

    const model = ref(null)
    const shipments = ref([]);

    onMounted(async () => {
        shipments.value = await getShipments();
    });

    useHead({
        title: 'Shipments',
    })

    definePageMeta({
        middleware: ['authenticated'],
    })
</script>