<template>
  <div id="search">
   <v-text-field density="compact" variant="solo" label="Search Meeovi" append-inner-icon="fas fa-search" single-line
        hide-details @click:append-inner="onClick"></v-text-field>
     <!--<ais-instant-search :search-client="client" index-name="steam-video-games">
      <ais-search-box></ais-search-box>
      <ais-hits>
        <template v-slot:item="{ item }">
          <ul>
            <li v-for="{ id,title,poster } in items" :key="id">
              <h1>{{ title }}</h1>
              <img :src="poster" :alt="`Poster from ${title}`">
            </li>
          </ul>
        </template>
      </ais-hits>
    </ais-instant-search>-->
  </div>
</template>

<script>
  export default {
    methods: {
      onClick() {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>

<script setup>

</script>