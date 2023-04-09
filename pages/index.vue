<template>
    <div>
        <headerslider />
        <callout />
        <callout2 />
        <latestproducts />
        <features />
        <featuredproducts />
        <productList />
        <relatedcreators />
        <simpleSingle />
    </div>
</template>

<script>
    import headerslider from '../components/homePage/headerslider.vue'
    import callout from '../components/homePage/callout.vue'
    import callout2 from '../components/homePage/callout2.vue'
    import latestproducts from '../components/Related/latestproducts.vue'
    import features from '../components/homePage/features.vue'
    import featuredproducts from '../components/Related/featuredproducts.vue'
    import productList from '../components/homePage/productList.vue'
    import relatedcreators from '../components/Creators/relatedcreators.vue'
    import simpleSingle from '../components/homePage/simpleSingle.vue'

    export default {
        components: {
            headerslider,
            callout,
            callout2,
            latestproducts,
            features,
            featuredproducts,
            productList,
            relatedcreators,
            simpleSingle
        }
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi',
    })
</script>