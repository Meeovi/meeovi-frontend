<template>
    <div class="followBtn">
        <div v-if="following">
            <v-btn text="Following" color="orangered"></v-btn>
        </div>
        <div v-else>
            <v-btn text="Follow" color="orange"></v-btn>
        </div>
    </div>
</template>

<script setup>

</script>