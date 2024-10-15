<template>
    <div>
        <div class="contentPage" v-for="cmspage in data?.pages?.nodes" :key="cmspage">
            <div v-html="cmspage.content"></div>
            <productCard />
        </div>
        <!---->
    </div>
</template>

<script setup>
import productCard from '~/components/commerce/commerce/product/productCard.vue'
  //import { deals } from '~/graphql/commerce/queries/deals'

    useHead({
        title: 'Orders Dashboard',
    })

const model = ref(null);

/*const {
  data
} = useAsyncQuery(deals);*/

definePageMeta({
    middleware: ['authenticated'],
  })
</script>