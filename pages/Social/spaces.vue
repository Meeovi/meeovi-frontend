<template>
    <div class="contentPage">
        <profilebar />
        <section class="info3 cid-sBXUmXiOq3" id="info3-2h">
            <div class="mbr-overlay" style="opacity: 0.6; background-color: rgb(68, 121, 217);">
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="card col-12 col-lg-10">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <h4 class="card-title mbr-fonts-style align-center mb-4 display-1">
                                    <strong>Spaces</strong></h4>
                                <p class="mbr-text mbr-fonts-style mb-4 display-7">Join or create a space about any topic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features4 cid-sBXUicXM4E" id="features5-2g">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-6" v-for="(spaces, index) in spaces" :key="index">
                        <div class="card-wrapper">
                            <div class="row">
                                <div class="col-12 col-md-7">
                                    <div class="text-wrapper">
                                        <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">
                                            {{spaces?.date_created}}</h6>
                                        <h5 class="card-title mbr-fonts-style display-5">
                                            <strong>{{ spaces?.name }}</strong></h5>
                                        <p class="mbr-text mbr-fonts-style mb-5 display-4" v-html="spaces?.description"></p>
                                        <div class="mbr-section-btn"><a :href="`/social/group/${spaces?.id}`"
                                                class="btn btn-warning display-4">Learn more</a></div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-5">
                                    <div class="img-wrapper">
                                        <img :src="`${url}assets/${spaces?.image?.filename_disk}`" :alt="spaces?.name" cover />
                                    </div>
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
    import profilebar from '../../components/menus/profilebar.vue'
    export default {
        components: {
            profilebar
        },
        data() {
            return {
                url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
const {
    getItems
  } = useDirectusItems()

  const spaces = await getItems({
    collection: "Space"
  });
  
    useHead({
        title: 'Spaces',
    })
</script>