<template>
  <div class="contentPage">
    <!--<profilebar />-->
    <section data-bs-version="5.1" class="features16 cid-twc33vqs90" id="features16-1i" data-sortbtn="btn-primary"
      style="padding-top: 10px;">
      <div class="container-fluid">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element align-self-stretch">
            <div class="img-wrap" style="width: 80%; height: 80%;">
              <img :src="`${result?.lists?.lists?.image?.node?.sourceUrl}`" :alt="result?.lists?.title">
            </div>
          </div>
          <div class="col-md-6 text-element">
            <div class="text-content">
              <h2 class="mbr-title pt-2 mbr-fonts-style align-left display-2">
                {{result?.lists?.title}}
              </h2>

              <p class="mbr-title pt-2 mbr-fonts-style align-left display-7">
                Created: {{ new Date(result?.lists?.date).toLocaleDateString() }}
              </p>

              <div>Type: <p style="display: inline-block;" class="mbr-title pt-2 mbr-fonts-style align-left display-7"
                  v-html="result?.lists?.lists?.type"></p>
              </div>

              <p class="mbr-title pt-2 mbr-fonts-style align-left display-7">
                Public: {{result?.lists?.lists?.isPublic}}
              </p>

              <div class="mbr-section-text">
                <p class="mbr-text pt-3 mbr-light mbr-fonts-style align-left display-7">
                  {{result?.lists?.lists?.description}}</p>
              </div>

              <v-row>
                <v-col>
                  <div class="mbr-section-btn pt-3 align-left">
                    <v-dialog min-width="500">
                      <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" prepend-icon="fas fa-gear" title="Update List"
                          class="rightAddBtn" variant="flat">Update List</v-btn>
                      </template>

                      <template v-slot:default="{ isActive }">
                        <updatelist />
                      </template>
                    </v-dialog>
                    <v-btn class="rightAddBtn" prepend-icon="fas fa-x" variant="text" title="Delete List">Delete List
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div style="padding-top: 10px;">
      <productCard />
    </div>
  </div>
</template>

<script setup>
  import {ref } from 'vue'
  import {
    useQuery
  } from '@vue/apollo-composable'
  import productCard from '~/components/commerce/commerce/product/productCard.vue'
  import profilebar from '~/components/menus/profilebar.vue'
  import updatelist from '~/components/commerce/update/commerce/updatelist.vue'
  import lists from '~/graphql/commerce/queries/lists'

  const model = ref(null)
  const route = useRoute();
  const {
        result
    } = useQuery(lists, {
        id: route.params.id // Pass variables inside the 'variables' object
    });

  useHead({
    title: result?.lists?.title,
  })
  definePageMeta({
    middleware: ['authenticated'],
  })
</script>