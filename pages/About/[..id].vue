<template>
    <div class="contentPage">
       <h2>{{ page?.title }}</h2>
       <div v-html="page?.content"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>
    useHead({
        title: this.page?.name,
    })

const { getItemById } = useDirectusItems()

  const page = await getItemById({
    collection: "pages",
    link: "about"
  });
</script>