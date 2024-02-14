<template>
    <div>
        <section class="header6 cid-sBXV7XsZQm" id="header6-2i">
            <div class="mbr-overlay" style="opacity: 0.2; background-color: rgb(68, 121, 217);"></div>
            <div class="align-center container-fluid">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1">
                            <strong>{{ data?.Space_by_id?.name }}</strong></h1>

                        <p class="mbr-text mbr-white mbr-fonts-style display-7">
                            {{ data?.Space_by_id?.description }}
                        </p>

                    </div>
                </div>
            </div>
        </section>

        <section class="features1 cid-sBXVhMMeXw" id="features2-2k">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-credit-card mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Status</strong><br><br>{{ data?.Space_by_id?.status }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-sites mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Group Created</strong><br><br>{{ data?.Space_by_id?.date_created }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-users mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong># of Members</strong><br><br>{{ space_by_id?.numberOfMembers }}</h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card-wrapper">
                            <div class="card-box align-center">
                                <span class="mbr-iconfont mobi-mbri-home mobi-mbri"
                                    style="color: rgb(255, 153, 102); fill: rgb(255, 153, 102);"></span>
                                <h4 class="card-title align-center mbr-black mbr-fonts-style display-7">
                                    <strong>Owner</strong><br><br>{{ space_by_id?.owner }}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section data-bs-version="5.1" class="formulam5 team1 cid-tZY2FlPq3D" id="people1-6f">
            <div class="container-fluid">
                <div class="row">
                    <div class="item features-image col-12 col-md-6 col-lg-2">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <div class="img-wrap">
                                    <img :src="`${Space_by_id?.shorts?.shorts_id?.customers?.customers_id?.image?.filename_disk}`" :alt="Space_by_id?.shorts?.shorts_id?.customers?.customers_id?.username">
                                </div>
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-4"><strong>{{ Space_by_id?.shorts?.shorts_id?.customers?.customers_id?.username }}</strong></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features3 cid-sBXVblMrWB" id="features3-2j">
            <div class="container">
                <div class="mbr-section-head">
                    <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        <strong>Products Showcase</strong></h4>

                </div>
                <div class="row mt-4">
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="../../../assets/images/mbr-2-696x696.jpg" alt="">
                            </div>
                            <div class="item-content">
                                <h5 class="item-title mbr-fonts-style display-7"><strong>The Devi'ere</strong></h5>
                                <p class="mbr-text mbr-fonts-style mt-3 display-7">There are many variations of passages
                                    of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><a href=""
                                    class="btn btn-primary item-btn display-7" target="_blank">Learn More
                                    &gt;</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features3 cid-sBXVvu6lmJ" id="features3-2l">


            <div class="container">
                <div class="mbr-section-head">
                    <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        <strong>Group Feed</strong></h4>

                </div>
                <div class="row mt-4">
                    <div class="item features-image сol-12 col-md-6 col-lg-4">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img :src="data?.Space_by_id?.image?.url" :alt="data?.Space_by_id?.name">
                            </div>
                            <div class="item-content">
                                <p class="mbr-text mbr-fonts-style mt-3 display-7"
                                    v-html="data?.Space_by_id?.newsfeed?.newsfeed_id?.post"></p>
                            </div>
                            <div class="mbr-section-btn item-footer mt-2"><a
                                    :href="`/social/feed/${data?.Space_by_id?.newsfeed?.newsfeed_id?.id}`"
                                    class="btn btn-primary item-btn display-7">Learn More
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
const query = gql `
query ($id: ID!) {
  Space_by_id (id: $id) {
    id
    name
    description
    status
    groupType
    date_created
    owner
    numberOfMembers
    image {
      filename_disk
    }
    media {
      filename_disk
    }
    newsfeed {
      newsfeed_id {
        id
        post
        image {
          filename_disk
        }
        media {
          directus_files_id {
            filename_disk
          }
        }
      }
    }
    shorts {
      shorts_id {
        id
        name
        video {
          filename_disk
        }
        customers {
          customers_id {
            username
            image {
              filename_disk
            }
          }
        }
      }
    }
  }
}`

    const {
        data
    } = useAsyncQuery(query);

    useHead({
        title: '',
    })
</script>