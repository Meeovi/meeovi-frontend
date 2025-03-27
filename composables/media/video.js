import {
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue';
import videojs from 'video.js';
import 'videojs-contrib-quality-levels';  // Import the Quality Levels plugin
import 'videojs-persist';
import 'videojs-quality-selector-hls'
import 'videojs-vr'

//import WaveSurfer from 'wavesurfer.js';

export function useVideoJs(videoOptions = {}, plugins = []) {
  const videoRef = ref(null);
  const player = ref(null);

  onMounted(() => {
    if (videoRef.value) {
      player.value = videojs(videoRef.value, videoOptions);

      // Apply each plugin from the plugins array
      plugins.forEach((plugin) => {
        plugin(player.value);
      });

      // Apply plugins here

      // The HLS Quality Selector plugin
      player.value.hlsQualitySelector({
        displayCurrentQuality: true,
      });

      // Videojs VR Plugin
      player.vr({projection: '360'});
      player.vr().cameraVector;
      player.vr().camera;
      player.vr().scene;
      player.vr().renderer;

      // Videojs Quality Selector Plugin
      player.value.qualitySelector({
        displayCurrentQuality: true,
      });

      // Persist Plugin
      player.value.persist();
    }
  });

  onBeforeUnmount(() => {
    if (player.value) {
      player.value.dispose();
    }
  });

  return {
    videoRef,
    player
  };
}