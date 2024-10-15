<template>
    <v-app class="contentPage">
        <v-toolbar title="Meeovi Messages" color="primary"></v-toolbar>
        <v-main>
            <v-container fluid class="pa-0 fill-height chatWindow">
                <iframe :src="`${rocketChat}?layout=embedded&amp;autoLogin=true&amp`" frameborder="0"></iframe>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
    import {
        ref,
        onMounted,
        onUnmounted
    } from 'vue'
    import {
        useRuntimeConfig
    } from '#imports';

    const error = ref(null)
    const config = useRuntimeConfig();

    const rocketChat = 'http://89.116.38.24:3000'

    onMounted(() => {
  const iframe = document.querySelector('iframe');
  iframe.addEventListener('load', () => {
    iframe.contentWindow.addEventListener('beforeunload', (event) => {
      event.preventDefault();
      event.returnValue = '';
    });
  });
});


    useHead({
        title: 'Messages',
    })
</script>

<style scoped>
    .chatWindow {
        position: relative;
    }

    #rocket-chat-widget {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>