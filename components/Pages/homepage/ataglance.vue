<template>
    <div>
        <section data-bs-version="5.1" class="content2 cid-skeBU2vAkT" id="content2-8">
    
    
    <div class="container-fluid">
        <div class="mbr-section-head">
            <h4 class="mbr-section-title mbr-fonts-style align-left mb-0 display-2" style="color: steelblue;"><strong>Did you know you can...</strong></h4>
            
        </div>
        <div class="row mt-4">
            <div class="item features-image сol-12 col-md-6 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="assets/images/mbr-2.jpg" alt="" title="">
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5" style="color: black;"><a href="#top" class="text-primary">C</a>reate a Gallery</h5>
                        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7" style="color: black;"><strong>Inspiration Galleries</strong></h6>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7" style="color: black;">Inspiration Galleries are great ways to showcase your products and get your ideas in front of the world.&nbsp;</p>
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><a href="/commerce/showcases" class="btn item-btn btn-primary display-7">Read More
                            &gt;</a></div>
                </div>
            </div>
            <div class="item features-image сol-12 col-md-6 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="assets/images/mbr-1.jpg" alt="" title="">
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5" style="color: black;"><a href="#top" class="text-primary">J</a>oin a Group</h5>
                        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7" style="color: black;"><strong>Groups with like minded&nbsp;</strong></h6>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7" style="color: black;">Groups like on other social networks, are amazing places to unite with others with similar passions as yours.<br>
                        </p>
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><a href="/social/spaces" class="btn btn-primary item-btn display-7">Read More
                            &gt;</a></div>
                </div>
            </div>
            <div class="item features-image сol-12 col-md-6 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="assets/images/mbr.jpg" alt="" title="">
                    </div>
                    <div class="item-content">
                        <h5 class="item-title mbr-fonts-style display-5" style="color: black;"><a href="#top" class="text-primary">S</a>tay in Touch</h5>
                        <h6 class="item-subtitle mbr-fonts-style mt-1 display-7" style="color: black;"><strong>Yes, you even have a newsfeed</strong></h6>
                        <p class="mbr-text mbr-fonts-style mt-3 display-7" style="color: black;">Like a product, follow another person from our community, or you recently bought something.&nbsp;</p>
                    </div>
                    <div class="mbr-section-btn item-footer mt-2"><a href="/social/newsfeed" class="btn btn-primary item-btn display-7">Read More
                            &gt;</a></div>
                </div>
            </div>

        </div>
    </div>
</section>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>
import { createDirectus, rest, readItems } from '@directus/sdk';

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
/*
const page = pages[0]; */
</script>