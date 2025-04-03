<!-- pages/compare.vue -->
<template>
  <div class="product-compare-page">
    <productCard 
      :is-loading="isLoading"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCompareStore } from '~/stores/compare'
import { useMetaStore } from '~/stores/meta'
import { useNavigationStore } from '~/stores/navigation'
import { useBreadcrumbsStore } from '~/stores/breadcrumbs'

const router = useRouter()
const compareStore = useCompareStore()
const metaStore = useMetaStore()
const navigationStore = useNavigationStore()
const breadcrumbsStore = useBreadcrumbsStore()

const isLoading = computed(() => compareStore.getIsLoading)

// Methods converted from the container class
const updateMeta = () => {
  metaStore.setMeta({
    title: 'Product Compare',
    description: 'Compare products and find the best one for you.',
    keywords: 'product comparison, compare products, find the best deal'
  })
}

breadcrumbsStore.updateBreadcrumbs = () => {
  const breadcrumbs = [{
    url: '/compare',
    name: 'Product Compare'
  }]
  breadcrumbsStore.updateBreadcrumbs(breadcrumbs)
}

const updateHeaderState = () => {
  navigationStore.addNavigationItem({
    name: 'PRODUCT_COMPARE',
    title: 'Compare',
    onBack: () => router.back()
  })
}

// Lifecycle hook (equivalent to componentDidMount)
onMounted(() => {
  // Scroll to top
  window.scrollTo({ top: 0 })
  
  updateMeta()
  updateBreadcrumbs()
  updateHeaderState()
})
</script>
