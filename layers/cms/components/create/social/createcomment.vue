<template>
  <div class="max-w-[376px] md:max-w-[768px]">
    <h3 class="font-bold py-2 pl-4 pr-3 typography-headline-4">Leave a review</h3>
    <form>
      <editor />
    </form>
  </div>
</template>

<script>
  import editor from '../../partials/editor.vue'
  export default {
    components: {
      editor
    },
    data() {
      return {

      };
    },
  };
</script>

<script lang="ts" setup>

</script>