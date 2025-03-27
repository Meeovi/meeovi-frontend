<template>
  <div>
      <div class="contentPage" v-for="cmspage in result?.pages?.nodes" :key="cmspage">
          <div v-html="cmspage.content"></div>
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
import {deals} from '~/graphql/commerce/queries/deals'

  useHead({
      title: 'Deals',
  })

const model = ref(null);

const {
result
} = useQuery(deals);

definePageMeta({
  middleware: ['auth'],
})
</script>