<template>
  <div id="graphcomment"></div>
</template>

<script setup>
import 'dotenv'
  import {
      onMounted
  } from 'vue';
  import { useRuntimeConfig } from '#imports'

  onMounted(() => {
      const config = useRuntimeConfig()
      // Check if we're running in the browser (client-side)
      if (process.client) {
          // Define your GraphComment parameters
          const __semio__params = {
              graphcommentId: config.public.commentsUrl, // Ensure the id is yours
              behaviour: {
                  // uid: "...", // optional, uniquely identifies the comment thread
              },
          };
          // Define the onload function
          function __semio__onload() {
              __semio__gc_graphlogin(__semio__params);
          }
          // Load the GraphComment script
          (function () {
              const gc = document.createElement('script');
              gc.type = 'text/javascript';
              gc.async = true;
              gc.defer = true;
              gc.onload = __semio__onload;
              gc.src = 'https://integration.graphcomment.com/gc_graphlogin.js?' + Date.now();
              (document.head || document.body).appendChild(gc);
          })();
      }
  });
</script>