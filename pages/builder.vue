<template>
<div id="home">
    <div>Hello world from your Vue project. Below is Builder Content:</div>

    <!-- If canShowContent is true, render the Builder content using the
    Content component and the "page" model. -->
    <div v-if="canShowContent">
      <div>
        Page title:
        {{ (content && content.data && content.data.title) || 'Unpublished' }}
      </div>
      <Content
        model="page"
        :content="content"
        :api-key="apiKey"
      />
    </div>
    <!-- If canShowContent is false, show a "Content not Found" message. -->
    <div v-else>Content not Found</div>
    <FooterNav />
  </div>
</template>

<script>
  
import Vue from 'vue'
import { fetchOneEntry, Content, isPreviewing } from '@builder.io/sdk-vue';
import FooterNav from '../components/FooterNav.vue'

// TODO: enter your public API key
const BUILDER_PUBLIC_API_KEY = process.env.API_KEY

export default Vue.extend({
  name: 'RenderBuilderPage',
  components: {
    Content,
  },
  data: () => ({
    canShowContent: false,
    content: null,
    apiKey: BUILDER_PUBLIC_API_KEY,
  }),
  mounted() {
    // Re-run this check on the client in case of SSR
    // isPreviewing() returns true if the user is currently viewing
    // the page in the Builder editor
    this.canShowContent = this.content || isPreviewing()
  },
  async fetch() {
    // Fetch the Builder content for the page that matches the URL path
    // using the fetchOneEntry method from the Builder SDK
    const content = await fetchOneEntry({
      model: 'page',
      apiKey: BUILDER_PUBLIC_API_KEY,
      userAttributes: {
        urlPath: this.$route.path,
      },
    })
    // Set the canShowContent flag to true if content exists or if the
    // user is currently viewing the page in the Builder editor
    this.canShowContent = content || isPreviewing()
    // Store the content in the component's state
    this.content = content

    // If no content is found and the app is running on the server, set
    // the HTTP response status code to 404
    if (!this.canShowContent) {
      if (this.$nuxt.context?.ssrContext?.res) {
        this.$nuxt.context.ssrContext.res.statusCode = 404
      }
    }
  },
})
</script>