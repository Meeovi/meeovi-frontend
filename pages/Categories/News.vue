<template>
    <div>
        <newsbar />
        <section data-bs-version="5.1" class="features19 cid-tABGJcl023" id="features19-5u" data-sortbtn="btn-primary">




            <div class="container-fluid">
                <h2 class="mbr-section-title align-left mbr-fonts-style display-2">
                    Latest News</h2>
                <div class="underline align-left pb-3">
                    <div class="line"></div>
                </div>

                <div class="row justify-content-center align-items-start pt-5">
                    <div class="card px-3 py-4 col-12 col-md-6 col-lg-4">
                        <div class="card-wrapper flip-card">
                            <div class="card-img">
                                <img src="../../assets/images/01.jpg" alt="">

                                <div class="img-name mbr-fonts-style mbr-bold mbr-white display-2">
                                    Outwear
                                </div>
                            </div>
                            <div class="card-box">
                                <p class="mbr-card-text mbr-fonts-style align-center display-7">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                </p>
                                <div class="mbr-section-btn align-center">
                                    <a href="#" class="btn btn-primary-outline display-4">VIEW ALL</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </div>
</template>

<script>
    import newsbar from '../../components/Menus/newsbar.vue'

    export default {
        components: {
            newsbar
        }
    }
</script>

<script setup>
    useHead({
        title: 'Meeovi News',
    })
</script>