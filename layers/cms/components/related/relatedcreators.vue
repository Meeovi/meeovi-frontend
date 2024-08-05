<template>
    <div>
        <v-sheet class="mx-auto sliderProducts row align-items-stretch items-row justify-content-center">
            <h4>Related Creators</h4>
            <v-slide-group v-model="model" class="pa-4" center-active>
                <v-slide-group-item v-slot="{ isSelected, toggle, selectedClass }">
                    <v-card :class="['ma-4', selectedClass]" @click="toggle" max-width="300" :href="`/account/user/${customers?.id}`">
                        <img class="align-end text-white" style="height: 250px;" :src="`${customers?.avatar?.url}`"
                            :alt="customers?.username" cover />

                        <v-card-title>@{{ customers?.username }}</v-card-title>

                        <v-card-subtitle class="pt-4">
                            <span class="fas fa-globe">{{ customers?.locale }}</span>
                        </v-card-subtitle>

                        <v-card-text>
                            <div># of Friends: {{ customers?.totalFriendCount }}</div>

                            <div>Member Type: {{ customers?.memberTypes }}</div>

                            Last Update: <div v-html="customers?.latestUpdate"></div>
                        </v-card-text>

                        <v-card-actions>
                            <followButton />
                        </v-card-actions>
                    </v-card>
                    <div class="d-flex fill-height align-center justify-center">
                        <v-scale-transition>
                            <v-icon v-if="isSelected" color="white" icon="mdi-close-circle-outline" size="48"></v-icon>
                        </v-scale-transition>
                    </div>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script>
import followButton from '../social/followButton.vue'

    export default {
        components: { followButton },
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
  const props = defineProps({
    customers: {
      type: Object,
      required: true,
    },
  });
  const {
    customers
  } = props;

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