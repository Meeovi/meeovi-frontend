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
import departmentsmenu from '~/graphql/CMS/queries/menus/departmentsmenu.gql'

const {
    data
} = useAsyncQuery(departmentsmenu);

/*  const {
          getItems
      } = useDirectusItems()

      const departments = await getItems({
          collection: "departments"
      });*/
</script>