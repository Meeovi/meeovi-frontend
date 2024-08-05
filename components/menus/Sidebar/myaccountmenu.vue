<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel title="My Account" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <div v-for="(menu, index) in data?.navigations?.nodes" :key="index">
            <div v-for="(item, index) in menu?.navigationFields?.menu?.nodes" :key="index">
              <v-list-item :title="item?.title" :value="item?.title" :href="item?.link"></v-list-item>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script setup>
  import myaccountmenu from '~/graphql/CMS/queries/menus/myaccountmenu.gql'

const {
    data
} = useAsyncQuery(myaccountmenu);

  /*  const {
      getItemById
    } = useDirectusItems()

    const nav = await getItemById({
      collection: "navigation",
      id: 2
    }); */
</script>