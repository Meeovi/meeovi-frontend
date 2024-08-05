<template>
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
        <bestsellers />
        <recentlyviewed />
        <blogcallout />
      <!--  
        <intro />
        <pixanomycallout />
        <yardsale />
        <relatedcreators />
        -->
    </div>
</template>

<script setup>
    //import intro from '~/components/pages/homepage/intro.vue'
    //import pixanomycallout from '~/components/pages/homepage/pixanomycallout.vue'
    import bookcallout from '~/components/pages/homepage/bookcallout.vue'
    import musiccallout from '~/components/pages/homepage/musiccallout.vue'
    import latestproducts from '~/layers/commerce/components/related/latestproducts.vue'
    //import relatedstations from '~/components/related/relatedstations.vue'
    import theatercallout from '~/components/pages/homepage/theatercallout.vue'
    import featuredproducts from '~/layers/commerce/components/related/featuredproducts.vue'
    import ataglance from '~/components/pages/homepage/ataglance.vue'
    import relatedspaces from '~/layers/cms/components/related/relatedspaces.vue'
    import bestsellers from '~/layers/commerce/components/related/bestsellers.vue'
    import exclusives from '~/layers/commerce/components/related/exclusives.vue'
    import deals from '~/layers/commerce/components/related/deals.vue'
    import recentlyviewed from '~/layers/commerce/components/related/recentlyviewed.vue'
    //import relatedcreators from '~/components/related/relatedcreators.vue'
    //import yardsale from '~/components/pages/homepage/yardsale.vue'
    import blogcallout from '~/components/pages/homepage/blogcallout.vue'

    useHead({
        title: 'Meeovi',
    })
</script>