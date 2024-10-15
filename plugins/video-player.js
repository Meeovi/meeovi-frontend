import { initializeVideoPlayer } from 'mvideoplayer';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.directive('video-player', {
    mounted(el, binding) {
      const player = initializeVideoPlayer(el.id, binding.value);
      el.__player__ = player;
    },
    unmounted(el) {
      if (el.__player__) {
        el.__player__.dispose();
      }
    }
  });
});
