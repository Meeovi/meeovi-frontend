<template>
  <div>
    <video id="my-video" class="video-js" v-video-player="options">
      <source src="https://vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
    </video>
  </div>
</template>

<script setup>
const options = {
  controls: true,
  autoplay: false,
  preload: 'auto',
  width: 640,
  height: 360,
};
</script>
