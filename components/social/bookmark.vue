<template>
  <div>
    <v-btn title="Bookmark" stacked="" prepend-icon="fas fa-bookmark" variant="plain">
    {{ isBookmarked ? 'Remove Bookmark' : 'Bookmark' }}</v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      postId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        isBookmarked: false
      };
    },
    methods: {
      async toggleBookmark() {
        try {
          // Your mutation to toggle bookmark
          await this.$apollo.mutate({
            mutation: YOUR_BOOKMARK_MUTATION,
            variables: {
              postId: this.postId
            }
          });
          this.isBookmarked = !this.isBookmarked;
          console.log('Bookmark toggled');
        } catch (error) {
          console.error('Error toggling bookmark:', error);
        }
      }
    }
  }
</script>