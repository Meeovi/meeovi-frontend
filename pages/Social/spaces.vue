<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Spaces" color="primary">
                    <v-dialog min-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create a Space"
                                variant="flat">Create a Space
                            </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <createspace />
                        </template>
                    </v-dialog>
                </v-toolbar>

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
                                                <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">Created:
                                                    {{ new Date(spaces?.dateCreated).toLocaleDateString() }}</h6>
                                                <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">Last Activity:
                                                    {{ new Date(spaces?.lastActivity).toLocaleDateString() }}</h6>
                                                <p class="mbr-text mbr-fonts-style mb-5 display-4"># of Members:
                                                    {{spaces?.totalMemberCount}}</p>
                                                <p class="mbr-text mbr-fonts-style mb-5 display-4">Status:
                                                    {{spaces?.status}}</p>
                                                <p class="mbr-text mbr-fonts-style mb-5 display-4"
                                                    v-html="spaces?.description"></p>
                                                <div class="mbr-section-btn"><a :href="`/social/group/${spaces?.id}`"
                                                        class="btn btn-warning display-4">Learn more</a></div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-5">
                                            <div class="img-wrapper">
                                                <img :src="`${spaces?.attachmentAvatar?.full}`" :alt="spaces?.name"
                                                    cover />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import profilebar from '../../components/menus/profilebar.vue'
    import createspace from '../../components/create/social/createspace.vue'

    export default {
        components: {
            profilebar,
            createspace
        },
        data() {
            return {
                //url: process.env.DIRECTUS_URL,
            }
        },
    }
</script>

<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const { data } = useQuery(gql`
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
}`
)

    /* const {
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