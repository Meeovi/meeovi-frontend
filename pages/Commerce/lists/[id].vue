<template>
  <div class="contentPage">
    <profilebar />
    <section data-bs-version="5.1" class="features16 cid-twc33vqs90" id="features16-1i" data-sortbtn="btn-primary"
      style="padding-top: 10px;">
      <div class="container-fluid">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element align-self-stretch">
            <div class="img-wrap" style="width: 80%; height: 80%;">
              <img :src="`${data?.list?.lists?.image?.node?.sourceUrl}`" :alt="data?.list?.title">
            </div>
          </div>
          <div class="col-md-6 text-element">
            <div class="text-content">
              <h2 class="mbr-title pt-2 mbr-fonts-style align-left display-2">
                {{data?.list?.title}}
              </h2>

              <p class="mbr-title pt-2 mbr-fonts-style align-left display-7">
                Created: {{ new Date(data?.list?.date).toLocaleDateString() }}
              </p>

              <div>Type: <p style="display: inline-block;" class="mbr-title pt-2 mbr-fonts-style align-left display-7"
                  v-html="data?.list?.lists?.type"></p>
              </div>

              <p class="mbr-title pt-2 mbr-fonts-style align-left display-7">
                Public: {{data?.list?.lists?.isPublic}}
              </p>

              <div class="mbr-section-text">
                <p class="mbr-text pt-3 mbr-light mbr-fonts-style align-left display-7">
                  {{data?.list?.lists?.description}}</p>
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

<script>
  import productCard from '../../../components/commerce/product/productCard.vue'
  import profilebar from '../../../components/menus/profilebar.vue'
  import updatelist from '../../../components/update/commerce/updatelist.vue'

  export default {
    components: {
      productCard,
      profilebar,
      updatelist
    },
    data: () => ({
      model: null,
      //url: process.env.DIRECTUS_URL,
    }),
  }
</script>

<script setup>
  const route = useRoute();
  const query = gql `
query NewQuery ($id: ID!) {
  list(id: $id) {
    date
    title
    id
    lists {
      description
      ispublic
      type
      image {
        node {
          sourceUrl
        }
      }
      products {
        nodes {
          date
          id
          ... on SimpleProduct {
            id
            name
            image {
              sourceUrl
            }
            price
            sku
            type
          }
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query, {
    id: route.params.id
  });
  /* const {
       getItemById
   } = useDirectusItems()
   const route = useRoute();

   const list = await getItemById({
       collection: "lists",
       id: route.params.id,
   });*/

  useHead({
    title: data?.list?.title,
  })
  definePageMeta({
    //middleware: ['auth-logged-in'],
  })
</script>