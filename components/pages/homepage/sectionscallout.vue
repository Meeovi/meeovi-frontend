<template>
    <div class="sliderProducts">
        <h4 style="text-align: left;">A Space for you</h4>
        <section class="features4" id="features5-2g">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6" v-for="(spaces, index) in data?.groups?.nodes" :key="index">
                        <div class="card-wrapper">
                            <div class="row">
                                <div class="col-12 col-md-7">
                                    <div class="text-wrapper">
                                        <h5 class="card-title mbr-fonts-style display-5">
                                            <strong>{{ spaces?.name }}</strong></h5>
                                        <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">Created: {{ new Date(spaces?.dateCreated).toLocaleDateString() }}</h6>
                                        <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">Last Activity: {{ new Date(spaces?.lastActivity).toLocaleDateString() }}</h6>
                                        <p class="mbr-text mbr-fonts-style mb-5 display-4"># of Members: {{spaces?.totalMemberCount}}</p>
                                        <p class="mbr-text mbr-fonts-style mb-5 display-4">Status: {{spaces?.status}}</p>    
                                        <p class="mbr-text mbr-fonts-style mb-5 display-4" v-html="spaces?.description"></p>
                                        <div class="mbr-section-btn"><NuxtLink :to="`/social/group/${spaces?.id}`"
                                                class="btn btn-warning display-4">Learn more</NuxtLink></div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-5">
                                    <div class="img-wrapper">
                                        <NuxtImg loading="lazy" :src="`${spaces?.attachmentCover?.full}`" :alt="spaces?.name" cover />
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
    export default {

    }
</script>

<script setup>
    const query = gql `
query NewQuery {
groups(where: {status: PUBLIC, type: ACTIVE}) {
    nodes {
      creator {
        avatar {
          url
        }
        username
      }
      description
      id
      lastActivity
      name
      slug
      status
      totalMemberCount
      dateCreated
      attachmentCover {
        full
      }
    }
  }
}
`

    const {
        data
    } = useAsyncQuery(query);
</script>