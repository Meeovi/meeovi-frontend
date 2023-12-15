<template>
    <div>
        <form action="" role="search" novalidate="" class="ais-SearchBox-form">
            <input type="search" autocorrect="off" autocomplete="on" autocapitalize="off" spellcheck="true" required="" maxlength="512" aria-label="Search" placeholder="Search Meeovi" class="ais-SearchBox-input">
            <v-btn type="submit" title="Search" class="fas fa-search ais-SearchBox-submit"></v-btn>
            <v-btn type="reset" title="Clear" class="fas fa-reset ais-SearchBox-reset" hidden=""></v-btn>
        </form>
    </div>
</template>

<script>
/*import { connectSearchBox } from "instantsearch.js/es/connectors";
import { createWidgetMixin } from "vue-instantsearch/vue3/es";

export default {
  mixins: [createWidgetMixin({ connector: connectSearchBox })],
  props: {
    delay: {
      type: Number,
      default: 200,
      required: false,
    },
  },
  data() {
    return {
      timerId: null,
      localQuery: "",
    };
  },
  destroyed() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  },
  computed: {
    query: {
      get() {
        return this.localQuery;
      },
      set(val) {
        this.localQuery = val;
        if (this.timerId) {
          clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(() => {
          this.state.refine(this.localQuery);
        }, this.delay);
      },
    },
  },
};*/
</script>

<script setup>


</script>