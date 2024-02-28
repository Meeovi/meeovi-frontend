<template>
    <div>
        <sellerbar />

    </div>
</template>

<script>
import sellerbar from '../../../components/menus/sellerbar.vue'

export default {
    components: { sellerbar }
}
</script>

<script setup>
    useHead({
        title: ''
    })
</script>