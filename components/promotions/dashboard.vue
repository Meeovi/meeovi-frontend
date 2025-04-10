<template>
    <div>
        <div class="contentPage" :key="cmspage">
            <productCard />
        </div>
        <!---->
    </div>
</template>

<script setup>
  import {
        useQuery
    } from '@vue/apollo-composable'
  import productCard from '~/components/product/productCard.vue'

    useHead({
        title: 'Promotions Dashboard',
    })

const model = ref(null);

definePageMeta({
    middleware: ['auth'],
  })
</script>