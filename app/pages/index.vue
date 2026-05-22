<template>
  <div>
    <headerslider />
    <hellobar />
    <div>
      <ataglance />
      <exclusives />
      <bookcallout />
      <deals />
      <musiccallout />
      <latestproducts />
      <theatercallout />
      <featuredproducts />
      <bestsellers />
      <pixanomycallout />
      <recentlyViewed />
      <relatedstations />
      <relatedspaces />
      <relatedbrands />
      <blogcallout />
    </div>
  </div>
</template>

<script setup>
  import headerslider from '../components/content/homepage/headerslider.vue'
  import hellobar from '#auth/app/components/menus/hellobar.vue'
  import ataglance from '../components/content/homepage/ataglance.vue'
  import exclusives from '#commerce/app/components/catalog/product/exclusives.vue'
  import bookcallout from '../components/content/homepage/bookcallout.vue'
  import deals from '#commerce/app/components/catalog/product/deals.vue'
  import musiccallout from '../components/content/homepage/musiccallout.vue'
  import latestproducts from '#commerce/app/components/catalog/product/latestproducts.vue'
  import theatercallout from '../components/content/homepage/theatercallout.vue'
  import featuredproducts from '#commerce/app/components/catalog/product/featuredproducts.vue'
  import bestsellers from '#commerce/app/components/catalog/product/bestsellers.vue'
  import pixanomycallout from '../components/content/homepage/pixanomycallout.vue'
  import recentlyViewed from '#commerce/app/components/catalog/product/recentlyviewed.vue'
  import relatedstations from '#commerce/app/components/catalog/product/relatedstations.vue'
  import relatedspaces from '#social/app/components/related/relatedspaces.vue'
  import relatedbrands from '#commerce/app/components/catalog/product/relatedbrands.vue'
  import blogcallout from '../components/content/homepage/blogcallout.vue'

  useHead({
    title: 'Welcome',
  })
</script>