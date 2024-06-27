<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <v-list v-for="departments in categories.children_data" :key="index">
              <v-list-item :title="departments?.name" :value="departments?.name" :href="`/departments/${departments?.id}`">
              </v-list-item>
          </v-list>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

</script>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue';
  import {
    getCategories
  } from '~/composables/categories/getCategories';

  const categories = ref([]);

  onMounted(async () => {
    categories.value = await getCategories();
  });
/*  const query = gql `
query {
  categories {
    items {
      uid
      name
      children {
        uid
        name
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

      const departments = await getItems({
          collection: "departments"
      });*/
</script>~/composables/categories/getCategories