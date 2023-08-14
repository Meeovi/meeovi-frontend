<template>
    <div>
        <section data-bs-version="5.1" class="pricing1 cid-twaUcnOkam" id="pricing1-4h">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img :src="`${url}/assets/${products.id}`" class="top" :alt="products.name">
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="right">
                            <div class="card">
                                <p class="desc1 bord mbr-fonts-style display-4">
                                    SALE</p>
                            </div>
                            <p class="name mbr-fonts-style display-2"><strong>{{ products.name }}</strong></p>

                            <div class="price-line">
                                <p class="desc2 mbr-fonts-style display-5"><s>{{ products.price }}</s></p>
                                <p class="plus1 mbr-fonts-style display-5">
                                    <strong>&nbsp;</strong>$135.00</p>
                            </div>
                            <p class="mbr-text mbr-fonts-style display-4">{{ product.short_description }}
                            </p>
                            <div class="mbr-section-btn"><a class="btn btn-secondary display-7" href="">Buy Now</a>
                            </div>
                            <div class="price-line1">
                                <p class="desc mbr-fonts-style display-7"><strong>
                                        Category: </strong></p>
                                <p class="plus mbr-fonts-style display-4">
                                    &nbsp;{{ product.categories}}</p>
                            </div>
                            <div class="price-line1">
                                <p class="desc mbr-fonts-style display-7"><strong>
                                        Tags:</strong>&nbsp;</p>
                                <p class="plus mbr-fonts-style display-4">{{ product.tags}}</p>
                            </div>
                            <div class="price-line1">
                                <p class="desc mbr-fonts-style display-7"><strong>
                                        Product ID:</strong></p>
                                <p class="plus mbr-fonts-style display-4">{{ product.sku}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="features14 algom5 cid-twaUYmbT4E" id="afeatures14-4i">
            <div class="container">
                <div class="row">
                    <div class="col-12 p-0 main-col">
                        <div class="content-container">
                            <div class="col-12 text-container">
                                <div class="iconfont-wrapper">
                                    <span class="mbr-iconfont mobi-mbri-photos mobi-mbri"></span>
                                </div>
                                <div class="text-wrap">
                                    <h4 class="mbr-section-title align-center mbr-fonts-style display-2">
                                        {{ product.format}}
                                    </h4>
                                    <p class="mbr-text align-center mbr-fonts-style display-4">
                                        {{ product.content}}
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="pricing1 lodgem5 cid-twaVk5oC96" id="apricing1-4j">




            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="mbr-section-head">
                            <h3 class="mbr-section-title mbr-fonts-style mb-0 display-5">
                                Specifications</h3>

                        </div>
                        <div class="tabl-container">
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-title mbr-fonts-style mb-0 display-7">

                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-title mbr-fonts-style mb-0 display-7">
                                        <strong>House and Gardens</strong>
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-title mbr-fonts-style mb-0 display-7">
                                        <strong>Gardens Only</strong>
                                    </p>
                                </div>
                            </div>

                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Children (5-16 years)
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £6.00
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £3.00
                                    </p>
                                </div>
                            </div>

                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Primary School Parties
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £4.50
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £4.00
                                    </p>
                                </div>
                            </div>
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Secondary School Parties
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £8.70
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £5.90
                                    </p>
                                </div>
                            </div>
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Mobility Scooter Hire
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        -
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £4.60
                                    </p>
                                </div>
                            </div>
                            <div class="tabl-item-row">
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        Adults/Senior Citizens/Students
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £14.25
                                    </p>
                                </div>
                                <div class="tabl-item-column">
                                    <p class="card-text mbr-fonts-style mb-0 display-7">
                                        £6.5
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <relatedproducts />
        <recentlyviewed />
    </div>
</template>

<script>
    import relatedproducts from '../../components/Related/relatedproducts.vue'
    import recentlyviewed from '../../components/Related/recentlyviewed.vue'

    export default {
        components: {
            relatedproducts,
            recentlyviewed
        },
    }
</script>

<script setup>
    useHead({
        title: products.name,
    })

    const {
        getItems
    } = useDirectusItems()

    const products = await getItems({ collection: "products", id: 1});
</script>