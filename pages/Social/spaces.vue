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
                    <div class="col-12 col-lg-6" v-for="(spaces, index) in data?.groups?.nodes" :key="index">
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
                                        <div class="mbr-section-btn"><a :href="`/social/group/${spaces?.id}`"
                                                class="btn btn-warning display-4">Learn more</a></div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-5">
                                    <div class="img-wrapper">
                                        <img :src="`${spaces?.attachmentCover?.full}`" :alt="spaces?.name" cover />
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
const query = gql`
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

/*const {
    getItems
  } = useDirectusItems()

  const spaces = await getItems({
    collection: "Space"
  });*/
  
    useHead({
        title: 'Spaces',
    })

    definePageMeta({
	 // middleware: ['auth-logged-in'],
	})
</script>