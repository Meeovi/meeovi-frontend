<template>
  <div>
    <v-btn title="Like This" stacked="" prepend-icon="fas fa-heart" variant="plain" @click="reaction">
      {{ isReacted ? 'Remove Reaction' : 'Like' }}</v-btn>
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
        isReacted: false
      };
    },
    methods: {
      async reaction() {
        try {
          // Your mutation to react to a post
          await this.$apollo.mutate({
            mutation: YOUR_REACT_MUTATION,
            variables: {
              postId: this.postId
            }
          });
          this.isReacted = !this.isReacted;
          console.log('Reaction toggled');
        } catch (error) {
          console.error('Error toggling reaction:', error);
        }
      }
    }
  }
</script>