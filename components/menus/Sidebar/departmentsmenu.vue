<template>
  <div>
    <v-expansion-panels variant="accordion">
      <v-expansion-panel title="Departments" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
        <v-expansion-panel-text>
          <div v-for="departments in data?.categories?.items" :key="departments">
           <v-list v-for="departments in departments?.children" :key="departments">
              <v-list-item :title="departments?.name" :value="departments?.name" :href="`/departments/${departments?.uid}`">
              </v-list-item>
          </v-list> 
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>

</script>

<script setup>
/*  import {
    ref,
    onMounted
  } from 'vue';
  import {
    getCategories
  } from '~/composables/categories/getCategories';

  const categories = ref([]);

  onMounted(async () => {
    categories.value = await getCategories();
  });*/

const query = gql `
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

/*  const {
          getItems
      } = useDirectusItems()

      const departments = await getItems({
          collection: "departments"
      });*/
</script>