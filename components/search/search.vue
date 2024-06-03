<template>
  <div>
    <!--<ais-instant-search :search-client="searchClient" index-name="demo_ecommerce">
        
    <ais-search-box />
        <ais-hits>
            <template v-slot:item="{ item }">
                <h2>{{ item.name }}</h2>
              </template>
          </ais-hits>
      </ais-instant-search>-->
    <v-text-field id="mainSearch" density="compact" variant="solo" label="Search Meeovi" append-inner-icon="fas fa-search" single-line
        hide-details></v-text-field>
  </div>
    
</template>

<style>
  body {
    font-family: sans-serif;
    padding: 1em;
  }
</style>

<script>
 /* import algoliasearch from 'algoliasearch/lite';
  import 'instantsearch.css/themes/satellite-min.css';

  export default {
    data() {
      return {
        searchClient: algoliasearch(
          'B1G2GM9NG0',
          'aadef574be1f9252bb48d4ea09b5cfe5'
        ),
      };
    },
  };*/
</script>