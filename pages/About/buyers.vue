<template>
    <div>
        <section class="header3 cid-skf7Ac4L3C mbr-fullscreen" id="header3-x">

    

<div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(53, 53, 53);"></div>

<div class="align-center container">
    <div class="row justify-content-end">
        <div class="col-12 col-lg-6" v-for="pages in pages" :key="pages.id">
            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>{{ pages.name }}</strong></h1>
            
            <p class="mbr-text mbr-fonts-style display-7">{{ pages.content }}&nbsp;<br></p>
            
        </div>
    </div>
</div>
</section>

<section class="features4 cid-skf7oKHdL4" id="features5-u">




<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-6">
            <div class="card-wrapper">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <div class="text-wrapper">
                            <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">
                                Applications</h6>
                            <h5 class="card-title mbr-fonts-style display-5">
                                <strong>The Apps</strong></h5>
                            <p class="mbr-text mbr-fonts-style mb-5 display-4">That's right Meeovi is everywhere from mobile, tablet, desktops, TVs. When you buy from Meeovi you can be literally anywhere at anytime doing anything just by opening your app.
<br></p>
                            
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="img-wrapper">
                            <img src="../../assets/images/mbr-502x335.png" alt="Mobirise">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-6">
            <div class="card-wrapper">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <div class="text-wrapper">
                            <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">
                                Be Social With It</h6>
                            <h5 class="card-title mbr-fonts-style display-5">
                                <strong>Social Engagements</strong></h5>
                            <p class="mbr-text mbr-fonts-style mb-5 display-4">Meeovi aims to be the most socialable ecommerce platform. Complete with a newsfeed, sharing options, blog, instant messenger integration, and more. Connect with other shoppers from around the world.
<br></p>
                            
                        </div>
                    </div>
                    <div class="col-12 col-md-5">
                        <div class="img-wrapper">
                            <img src="../../assets/images/mbr-502x324.jpg" alt="Mobirise">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>

<section class="features7 cid-skf7r8dpNY" id="features8-v">
<div class="container-fluid">
    <div class="row">
        <div class="title col-12">
            
            
        </div>
        <div class="card col-12 col-md-6" v-for="pages in pages" :key="pages.id">
            <div class="card-wrapper">
                <div class="top-line">
                    <h6 class="card-title mbr-fonts-style display-5"><strong>{{ pages.list.name }}</strong></h6>
                    <p class="mbr-text cost mbr-fonts-style display-5"></p>
                </div>
                <div class="bottom-line">
                    <p class="mbr-text mbr-fonts-style display-7">{{ pages.list.description }}<br></p>
                </div>
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
    useHead({
        title: 'Buyers',
    })

    const {
        getItems
    } = useDirectusItems()

    const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Buyers"}}}});
</script>