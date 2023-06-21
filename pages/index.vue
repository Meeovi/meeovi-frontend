<template>
    <div>
        <headerslider />
        <exclusives />
        <deals />
        <bookcallout />
        <latestproducts />
        <theatercallout />
        <featuredproducts />
        <musiccallout />
        <bestsellers />
        <spotlight />
        <yardsale />
        <blogposts />
    </div>
</template>

<script>
    import headerslider from '../components/homePage/headerslider.vue'
    //import callout from '../components/homePage/callout.vue'
    import bookcallout from '../components/homePage/bookcallout.vue'
    import musiccallout from '../components/homePage/musiccallout.vue'
    import latestproducts from '../components/Related/latestproducts.vue'
    import theatercallout from '../components/homePage/theatercallout.vue'
    import featuredproducts from '../components/Related/featuredproducts.vue'
    import spotlight from '../components/homePage/spotlight.vue'
    import bestsellers from '../components/Related/bestsellers.vue'
    import exclusives from '../components/Related/exclusives.vue'
    import deals from '../components/Related/deals.vue'
    import yardsale from '../components/homePage/yardsale.vue'
    import blogposts from '../components/homePage/blogposts.vue'

    export default {
        components: {
            headerslider,
            //callout,
            bookcallout,
            musiccallout,
            latestproducts,
            theatercallout,
            featuredproducts,
            spotlight,
            bestsellers,
            exclusives,
            deals,
            yardsale,
            blogposts
        }
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi',
    })
</script>