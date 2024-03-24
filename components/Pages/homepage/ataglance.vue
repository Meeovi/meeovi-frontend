<template>
    <div>
        <section data-bs-version="5.1" class="content2 cid-skeBU2vAkT" id="content2-8">
            <div class="container-fluid">
                <div class="mbr-section-head">
                    <h4 class="mbr-section-title mbr-fonts-style align-left mb-0 display-2" style="color: steelblue;">
                        <strong v-text="page?.content"></strong></h4>

                </div>
                <div class="row mt-4">
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="assets/images/mbr-2.jpg" :alt="page?.repeaterTextBox[0].name" />
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-5" style="color: black;"><a :href="page?.repeaterTextBox[0].url"
                                        class="text-primary" v-text="page?.repeaterTextBox[0].name"></a></h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7" style="color: black;">
                                    <strong v-text="page?.repeaterTextBox[0].subject"></strong></h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7" style="color: black;" v-text="page?.repeaterTextBox[0].description"></p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><a :href="page?.repeaterTextBox[0].url"
                                    class="btn item-btn btn-primary display-7">Read More
                                    &gt;</a></div>
                        </div>
                    </div>
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="assets/images/mbr-1.jpg" :alt="page?.repeaterTextBox[1].name" />
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-5" style="color: black;"><a :href="page?.repeaterTextBox[1].url"
                                        class="text-primary" v-text="page?.repeaterTextBox[1].name"></a></h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7" style="color: black;">
                                    <strong v-text="page?.repeaterTextBox[1].subject"></strong></h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7" style="color: black;" v-text="page?.repeaterTextBox[1].description"></p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><a :href="page?.repeaterTextBox[1].url"
                                    class="btn btn-primary item-btn display-7">Read More
                                    &gt;</a></div>
                        </div>
                    </div>
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="assets/images/mbr.jpg" :alt="page?.repeaterTextBox[2].name" />
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-5" style="color: black;"><a :href="page?.repeaterTextBox[2].url"
                                        class="text-primary" v-text="page?.repeaterTextBox[2].name"></a></h5>
                                <h6 class="item-subtitle mbr-fonts-style mt-1 display-7" style="color: black;">
                                    <strong v-text="page?.repeaterTextBox[2].subject"></strong></h6>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7" style="color: black;" v-text="page?.repeaterTextBox[2].description"></p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><a :href="page?.repeaterTextBox[2].url"
                                    class="btn btn-primary item-btn display-7">Read More
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
    const {
        getItemById
    } = useDirectusItems()

    const page = await getItemById({
        collection: "pages",
        id: 31
    });
</script>