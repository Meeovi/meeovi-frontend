<template>
   <div class="contentPage">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="pageContent">
      <div v-html="pageContent"></div>
    </div>
    <div v-else>No content available</div>
    
       
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
        <latestproducts />
      <!--  <intro />
        <headerslider />
        <pixanomycallout />
        <yardsale />
        <relatedcreators />
        -->
    </div>
</template>

<script setup>
    //import headerslider from '~/components/pages/homepage/headerslider.vue'
    //import latestproducts from '~/components/builderio/latestproducts.vue'
    import intro from '~/components/pages/homepage/intro.vue'
    //import pixanomycallout from '~/components/pages/homepage/pixanomycallout.vue'
    import bookcallout from '~/components/pages/homepage/bookcallout.vue'
    import musiccallout from '~/components/pages/homepage/musiccallout.vue'
    import latestproducts from '~/components/commerce/related/latestproducts.vue'
    //import relatedstations from '~/components/related/relatedstations.vue'
    import theatercallout from '~/components/pages/homepage/theatercallout.vue'
    import featuredproducts from '~/components/commerce/related/featuredproducts.vue'
    import ataglance from '~/components/pages/homepage/ataglance.vue'
    import relatedspaces from '~/components/cms/related/relatedspaces.vue'
    import bestsellers from '~/components/commerce/related/bestsellers.vue'
    import exclusives from '~/components/commerce/related/exclusives.vue'
    import deals from '~/components/commerce/related/deals.vue'
    import recentlyviewed from '~/components/commerce/related/recentlyviewed.vue'
    //import relatedcreators from '~/components/related/relatedcreators.vue'
    //import yardsale from '~/components/pages/homepage/yardsale.vue'
    import blogcallout from '~/components/pages/homepage/blogcallout.vue'
    import { useQuery } from '@vue/apollo-composable'
    import { computed } from 'vue'
    import homeSlider from '~/graphql/commerce/queries/blocks/homepage-slider'

    const { result, loading, error } = useQuery(homeSlider)

    const pageContent = computed(() => {
    return result.cmsBlocks?.items?.content ?? null
    })

    useHead({
        title: 'Meeovi',
    })
</script>