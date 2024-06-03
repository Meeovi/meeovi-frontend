<template>
    <div>
        <v-sheet class="mx-auto sliderCreators">
            <v-slide-group v-model="model" class="pa-4" center-active>
                <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
                    <section data-bs-version="5.1" class="formulam5 team1 cid-tZY2FlPq3D" id="people1-6f">

                        <div class="container-fluid">
                            <div class="row justify-content-center">
                                <div class="col-12 col-lg-12">
                                    <div class="mbr-section-head mb-3">
                                        <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-5">
                                            <strong>Check out some of our Creators</strong></h4>


                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="item features-image col-12 col-md-6">
                                    <div class="item-wrapper">
                                        <div class="item-img">
                                            <div class="img-wrap">
                                                <img src="assets/images/team1.jpg" alt="">
                                            </div>
                                        </div>
                                        <div class="item-content">
                                            <h5 class="item-title mbr-fonts-style display-4"><strong>Ashley W.
                                                    Wheeler</strong></h5>
                                            <h6 class="item-subtitle mbr-fonts-style display-4">Director</h6>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
    export default {
        data: () => ({
            model: null,
            url: 'http://67.207.71.123:8011/',
        }),
    }
</script>

<script setup>
    /* import query from '../../apollo/Custom/Queries/relatedcreators'

  const {
    data
  } = useAsyncQuery(query)
    //const { data } = await useAsyncQuery(customers)

    const {
        getItems
    } = useDirectusItems()

    const customers = await getItems({
        collection: "customers",
        limit: 6,
        params: {
            filter: {
                tags: {
                    tags_id: {
                        name: {
                            _eq: "Seller"
                        }
                    }
                }
            }
        }
    });*/
</script>