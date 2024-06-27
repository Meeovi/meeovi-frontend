<template>
    <div class="contentPage">
        <profilebar />
        <v-row>
            <v-col cols="12">
                <v-card title="Meeovi Spaces" color="blue">
                    <v-sheet class="mx-auto" elevation="0" color="transparent">
                        <v-slide-group v-model="model" class="pa-4" selected-class="bg-success" show-arrows>
                            <createspace />
                            <v-slide-group-item v-for="(spaces, index) in groups" :key="index"
                                v-slot="{ isSelected, toggle, selectedClass }">
                                <v-card :class="['ma-4', selectedClass]" color="white" height="321" width="196" :href="`/social/group/${spaces?.id}`" @click="toggle">
                                    <img :src="`${spaces?.avatar_urls?.full}`" :alt="spaces?.name" cover />
                                    <v-card-title>{{ spaces?.name }}</v-card-title>
                                    <v-card-subtitle style="display: inline-block;">By: {{spaces?.creator?.username}}</v-card-subtitle>
                                    <div class="d-flex fill-height align-center justify-center">
                                        <v-scale-transition>
                                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline"
                                                size="48"></v-icon>
                                        </v-scale-transition>
                                    </div>
                                </v-card>
                            </v-slide-group-item>
                        </v-slide-group>
                    </v-sheet>
                </v-card>

                <section class="features4 cid-sBXUicXM4E" id="features5-2g">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-6" v-for="(spaces, index) in groups" :key="index">
                                <div class="card-wrapper">
                                    <div class="row">
                                        <div class="col-12 col-md-7">
                                            <div class="text-wrapper">
                                                <h5 class="card-title mbr-fonts-style display-5">
                                                    <strong>{{ spaces?.name }}</strong></h5>
                                                <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">Created:
                                                    {{ new Date(spaces?.date_created).toLocaleDateString() }}</h6>
                                                <h6 class="card-subtitle mbr-fonts-style mb-2 display-4">Last Activity:
                                                    {{ new Date(spaces?.last_activity).toLocaleDateString() }}</h6>
                                                <p class="mbr-text mbr-fonts-style mb-5 display-4"># of Members:
                                                    {{spaces?.total_member_count}}</p>
                                                <p class="mbr-text mbr-fonts-style mb-5 display-4">Status:
                                                    {{spaces?.status}}</p>
                                                <p class="mbr-text mbr-fonts-style mb-5 display-4"
                                                    v-html="spaces?.description?.rendered"></p>
                                                <div class="mbr-section-btn"><a :href="`/social/group/${spaces?.id}`"
                                                        class="btn btn-warning display-4">Learn more</a></div>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-5">
                                            <div class="img-wrapper">
                                                <img :src="`${spaces?.avatar_urls?.full}`" :alt="spaces?.name"
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
import { ref, onMounted } from 'vue';
import { getGroups } from '~/composables/read/getGroups';

const groups = ref([]);

onMounted(async () => {
    console.log('Component mounted, fetching groups...');
    groups.value = await getGroups();
    console.log('Fetched groups:', groups.value);
});

/*    const query = gql `
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

    const {
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