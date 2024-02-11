<template>
    <div class="contentPage">
        <intro />
        <exclusives />
        <!--<relatedstations />-->
        <!----><deals />
        <bookcallout />
        <!----><latestproducts />
        <theatercallout />
        <!----><featuredproducts />
        <musiccallout />
        <bestsellers />
        <pixanomycallout />
        <!----><recentlyviewed />
        <ataglance />
        <!--<spotlight />-->
        <relatedcreators />
        <yardsale />
        <blogcallout />
        <!--<div v-for="pages in pages" :key="pages" v-html="pages.content"></div>-->
    </div><!---->
</template>

<script>
    import intro from '../components/Pages/homepage/intro.vue'
    import pixanomycallout from '../components/Pages/homepage/pixanomycallout.vue'
    import bookcallout from '../components/Pages/homepage/bookcallout.vue'
    import musiccallout from '../components/Pages/homepage/musiccallout.vue'
    import latestproducts from '../components/Related/latestproducts.vue'
    import relatedstations from '../components/Related/relatedstations.vue'
    import theatercallout from '../components/Pages/homepage/theatercallout.vue'
    import featuredproducts from '../components/Related/featuredproducts.vue'
    import ataglance from '../components/Pages/homepage/ataglance.vue'
    import spotlight from '../components/Pages/homepage/spotlight.vue'
    import bestsellers from '../components/Related/bestsellers.vue'
    import exclusives from '../components/Related/exclusives.vue'
    import deals from '../components/Related/deals.vue'
    import recentlyviewed from '../components/Related/recentlyviewed.vue'
    import relatedcreators from '../components/Related/relatedcreators.vue'
    import yardsale from '../components/Pages/homepage/yardsale.vue'
    import blogcallout from '../components/Pages/homepage/blogcallout.vue'

    export default {
        components: {
            intro,
            pixanomycallout,
            bookcallout,
            musiccallout,
            latestproducts,
            relatedstations,
            theatercallout,
            featuredproducts,
            ataglance,
            spotlight,
            bestsellers,
            exclusives,
            deals,
            recentlyviewed,
            relatedcreators,
            yardsale,
            blogcallout
        }
    }
</script>

<script setup>
const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({
        collection: "pages",
        filter: {name: {_eq: "Homepage"}},
        limit: 1
    });   
/*import { createDirectus, rest, readItems } from '@directus/sdk';

const directus = createDirectus(process.env.DIRECTUS_URL).with(rest());

// Write some code here in your front-end framework that gets the slug from the current URL.
const slug = 'homepage';

// Fetch page data using the SDK.
const pages = await directus.request(
	readItems('pages', {
		filter: {
			name: { _eq: slug },
		},
		fields: ['*', { blocks: ['*', { item: [{ block_cardgroup: ['*'], block_hero: ['*'], block_image_carousel: ['*'], blocks_feature_card: ['*'], blocks_image_card: ['*'] }] }] }],
		limit: 1,
	})
);

const page = pages[0]; */

    useHead({
        title: 'Meeovi',
    })
</script>