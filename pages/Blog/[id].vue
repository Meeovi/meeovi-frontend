<template>
    <div>
        <section data-bs-version="5.1" class="header11 cid-txYTnQG6mf" id="header11-5n" data-sortbtn="btn-primary">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 image-wrapper">
                        <img class="w-100" src="../../assets/images/sq4.jpg" alt="">
                    </div>
                    <div class="col-12 col-md">
                        <div class="text-wrapper text-center">
                            <h1 class="mbr-section-title mbr-fonts-style mb-3 display-1">
                                <strong>Make Fun Creating</strong></h1>
                            <p class="mbr-text mbr-fonts-style display-7">
                                Make awesome landing pages without coding!</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="content7 cid-txYTqgVHsB" id="content7-5o" data-sortbtn="btn-primary">

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-12">
                        <blockquote>
                            <h5 class="mbr-section-title mbr-fonts-style mb-2 display-7"><strong>How mobirise
                                    works?</strong></h5>
                            <p class="mbr-text mbr-fonts-style display-4">Use Mobirise website building software to
                                create multiple sites for commercial and non-profit projects. Themes in the Mobirise
                                website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and
                                so on. Start a project and click on the red plus buttons to see the blocks available for
                                your theme.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
        <relatedpost />
    </div>
</template>

<script>
    import relatedpost from '../../components/homePage/blogposts.vue'

    export default {
        components: {
            relatedpost
        },
    }
</script>

<script setup>
    useHead({
        title: '',
    })
</script>