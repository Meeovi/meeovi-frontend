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
    import intro from '../components/pages/homepage/intro.vue'
    import pixanomycallout from '../components/pages/homepage/pixanomycallout.vue'
    import bookcallout from '../components/pages/homepage/bookcallout.vue'
    import musiccallout from '../components/pages/homepage/musiccallout.vue'
    import latestproducts from '../components/related/latestproducts.vue'
    import relatedstations from '../components/related/relatedstations.vue'
    import theatercallout from '../components/pages/homepage/theatercallout.vue'
    import featuredproducts from '../components/related/featuredproducts.vue'
    import ataglance from '../components/pages/homepage/ataglance.vue'
    import spotlight from '../components/pages/homepage/spotlight.vue'
    import bestsellers from '../components/related/bestsellers.vue'
    import exclusives from '../components/related/exclusives.vue'
    import deals from '../components/related/deals.vue'
    import recentlyviewed from '../components/related/recentlyviewed.vue'
    import relatedcreators from '../components/related/relatedcreators.vue'
    import yardsale from '../components/pages/homepage/yardsale.vue'
    import blogcallout from '../components/pages/homepage/blogcallout.vue'

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