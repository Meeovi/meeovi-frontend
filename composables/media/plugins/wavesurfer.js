import 'videojs-wavesurfer';

export function useWavesurfer(options = {}) {
  return (player) => {
    // Merge provided options with defaults
    player.wavesurfer(Object.assign({
      backend: 'MediaElement',
      displayMilliseconds: true,
      debug: true,
      waveColor: 'grey',
      progressColor: 'black',
      cursorColor: 'black',
      hideScrollbar: true,
    }, options));
  };
}
