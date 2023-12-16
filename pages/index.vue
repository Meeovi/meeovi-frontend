<template>
    <div class="contentPage">
        <headerslider />
        <exclusives />
        <deals />
        <bookcallout />
        <latestproducts />
        <theatercallout />
        <featuredproducts />
        <musiccallout />
        <bestsellers />
        <!----><pixanomycallout />
        <recentlyviewed />
        <spotlight />
        <relatedcreators />
        <yardsale />
        <blogposts />
    </div><!---->
</template>

<script>
    import headerslider from '../components/homePage/headerslider.vue'
    import pixanomycallout from '../components/homePage/pixanomycallout.vue'
    import bookcallout from '../components/homePage/bookcallout.vue'
    import musiccallout from '../components/homePage/musiccallout.vue'
    import latestproducts from '../components/Related/latestproducts.vue'
    import theatercallout from '../components/homePage/theatercallout.vue'
    import featuredproducts from '../components/Related/featuredproducts.vue'
    import spotlight from '../components/homePage/spotlight.vue'
    import bestsellers from '../components/Related/bestsellers.vue'
    import exclusives from '../components/Related/exclusives.vue'
    import deals from '../components/Related/deals.vue'
    import recentlyviewed from '../components/Related/recentlyviewed.vue'
    import relatedcreators from '../components/Related/relatedcreators.vue'
    import yardsale from '../components/homePage/yardsale.vue'
    import blogposts from '../components/homePage/blogposts.vue'

    export default {
        components: {
            headerslider,
            pixanomycallout,
            bookcallout,
            musiccallout,
            latestproducts,
            theatercallout,
            featuredproducts,
            spotlight,
            bestsellers,
            exclusives,
            deals,
            recentlyviewed,
            relatedcreators,
            yardsale,
            blogposts
        }
    }
</script>

<script setup>
import { definePageMeta } from '#imports'
definePageMeta({
  auth: false
})

    useHead({
        title: 'Meeovi',
    })
</script>