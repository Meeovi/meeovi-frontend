<template>
    <div class="contentPage">
        <profilebar />
        <section data-bs-version="5.1" class="pricing2 cid-u1nV9cRjWW" id="pricing2-6v">
            <div class="container-fluid">
                <div class="row">
                    <div class="title-block col-12">

                        <h3 class="mbr-section-subtitle mbr-fonts-style display-2">Buy Again</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-lg-3 item features-image active">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="../../assets/images/image8.jpg" alt="" class="inner" data-slide-to="0"
                                    data-bs-slide-to="0">
                            </div>

                        </div>
                        <p class="name mbr-fonts-style display-5">
                            Ring</p>
                        <p class="price mbr-fonts-style display-7">$165</p>
                        <div class="iconfont-wrapper">
                            <span class="mbr-iconfont mbr-iconfont-1 mobi-mbri-star mobi-mbri"
                                style="color: rgb(255, 107, 0); fill: rgb(255, 107, 0);"></span>
                            <span class="mbr-iconfont mbr-iconfont-1 mobi-mbri-star mobi-mbri"
                                style="color: rgb(255, 107, 0); fill: rgb(255, 107, 0);"></span>
                            <span class="mbr-iconfont mbr-iconfont-1 mobi-mbri-star mobi-mbri"
                                style="color: rgb(255, 107, 0); fill: rgb(255, 107, 0);"></span>
                            <span class="mbr-iconfont mbr-iconfont-1 mobi-mbri-star mobi-mbri"
                                style="color: rgb(255, 107, 0); fill: rgb(255, 107, 0);"></span>
                            <span class="mbr-iconfont mbr-iconfont-1 mobi-mbri-star mobi-mbri"
                                style="color: rgb(255, 107, 0); fill: rgb(255, 107, 0);"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import profilebar from '../../components/Menus/profilebar.vue'

    export default {
        components: {
            profilebar
        },
    }
</script>

<script setup>
    useHead({
        title: 'Buy Again',
    })
</script>