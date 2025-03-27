<template>
  <div>
    <video ref="videoRef" class="video-js vjs-default-skin" src="" controls></video>
  </div>
</template>

<script setup>
import { useVideoJs } from '~/composables/media/video';
import { useHttpStreaming } from '~/composables/media/plugins/httpstreaming';

const videoOptions = {
  autoplay: true,
  controls: true,
};

const { videoRef } = useVideoJs(videoOptions, [useHttpStreaming()]);
</script>

<style scoped>
/* Add any custom styles for video.js here */
</style>
