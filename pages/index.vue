<template>
    <div>
        <callout />
        <callout2 />
        <features />
        <productList />
        <simpleSingle />
    </div>
</template>

<script>
  import callout from '../components/homePage/callout.vue'
  import callout2 from '../components/homePage/features.vue'
  import features from '../components/homePage/features.vue'
  import productList from '../components/homePage/productList.vue'
  import simpleSingle from '../components/homePage/simpleSingle.vue'

    export default {
        components: { callout, callout2, features, productList, simpleSingle }
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi',
    })
</script>