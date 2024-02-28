<template>
    <div class="contentPage">
        <section data-bs-version="5.1" class="info3 cid-u5x7gAG2mM" id="info3-8n">
            <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
            </div>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-10">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                                    <strong>{{ page?.name }}</strong>
                                </h4>
                                <h4 class="card-title mbr-fonts-style align-center mb-4 display-7">
                                    {{ page?.updated_at }}
                                </h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="content4 cid-u5x7kNtqkQ" id="content4-8o">
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="title col-md-12 col-lg-12">
                        <h4 class="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-7">
                            {{ page?.description }}
                        </h4>
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
        id: 4
    });

    useHead({
        title: this.$route.params.name,
    })    
</script>