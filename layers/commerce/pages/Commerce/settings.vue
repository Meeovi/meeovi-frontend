<template>
  <div>
    <!--<profilebar />-->
    <v-row>
      <v-toolbar :title="page?.name" color="transparent"></v-toolbar>
      <v-col cols="4" v-for="page in page?.repeaterTextBox" :key="page">
        <v-card append-icon="fas fa-arrow-up-right-from-square" class="mx-auto"
          :href="page?.url" :subtitle="page?.description" :title="page?.name"></v-card>
      </v-col>

      <v-divider></v-divider>

      <section data-bs-version="5.1" class="features5 cid-uhB5ybzJ7z" id="afeatures5-9m" style="width: 100%;">
        <div class="container">
          <div class="row">
            <div class="col-6 col-items" v-for="navigation in navigation" :key="navigation">
              <div class="item col-12 col-lg-12">
                <div class="item-wrap">
                  <div class="item-content">
                    <p class="label-text mbr-fonts-style display-4">
                      {{ navigation?.name}}
                    </p>
                    <div class="list-container">
                      <div class="list-item" v-for="navigation in navigation?.menus" :key="navigation">
                        <div class="icon-box">
                          <span class="mobi-mbri mobi-mbri-success mbr-iconfont mbr-iconfont-btn"
                            style="font-size: 18px; color: rgb(255, 255, 255); fill: rgb(255, 255, 255);"></span>
                        </div>
                        <v-list-item class="list-text mbr-fonts-style display-4" :title="navigation?.name" :href="navigation?.url"></v-list-item>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </v-row>
  </div>
</template>

<script>
  import profilebar from '../../../components/menus/profilebar.vue'

  export default {
    components: {
      profilebar
    },
    data: () => ({
      tab: null,
    }),
  }
</script>

<script setup>
  const {
      getItemById, getItems
    } = useDirectusItems()

    const page = await getItemById({
      collection: "pages",
      id: 48
    });

    const navigation = await getItems({
      collection: "navigation",
      filter: {
        type: {
          _eq: "settings"
        }
      }
    });

  useHead({
    title: 'Settings'
  })

  definePageMeta({
    layout: "nolive",
  });

  definePageMeta({
    //middleware: ['auth-logged-in'],
  })
</script>