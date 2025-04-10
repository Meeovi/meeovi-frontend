<template>
  <div>
    <hellobar />
    <headerslider />
    <div class="contentPage">
        <ataglance />
        <exclusives />
        <bookcallout />
        <deals />
        <musiccallout />
        <latestproducts />
        <theatercallout />
        <featuredproducts />
        
        <relatedspaces />
        
        <!--<bestsellers />
        <recentlyviewed />-->
        <latestproducts />
        <blogcallout />
        <relatedbrands />
      <!--  <intro />
        
        <pixanomycallout />
        <yardsale />
        <relatedcreators />
        -->
    </div>
  </div>
</template>

<script setup>
    import headerslider from '~/components/pages/homepage/headerslider.vue'
    //import latestproducts from '~/components/builderio/latestproducts.vue'
    //import intro from '~/components/pages/homepage/intro.vue'
    //import pixanomycallout from '~/components/pages/homepage/pixanomycallout.vue'
    import hellobar from '~/components/pages/homepage/hellobar.vue'
    import bookcallout from '~/components/pages/homepage/bookcallout.vue'
    import musiccallout from '~/components/pages/homepage/musiccallout.vue'
    import latestproducts from '~/components/product/latestproducts.vue'
    //import relatedstations from '~/components/related/relatedstations.vue'
    import theatercallout from '~/components/pages/homepage/theatercallout.vue'
    import featuredproducts from '~/components/product/featuredproducts.vue'
    import ataglance from '~/components/pages/homepage/ataglance.vue'
    import relatedspaces from '~/components/spaces/relatedspaces.vue'
    import bestsellers from '~/components/product/bestsellers.vue'
    import exclusives from '~/components/product/exclusives.vue'
    import deals from '~/components/product/deals.vue'
    import recentlyviewed from '~/components/product/recentlyviewed.vue'
    import relatedbrands from '~/components/sales/brands/relatedbrands.vue'
    //import relatedcreators from '~/components/related/relatedcreators.vue'
    //import yardsale from '~/components/pages/homepage/yardsale.vue'
    import blogcallout from '~/components/pages/homepage/blogcallout.vue'

    useHead({
        title: 'Meeovi',
    })
</script>