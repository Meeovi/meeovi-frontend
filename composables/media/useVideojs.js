import { useNuxtApp } from '#app'

export function useVideojs() {
  const { $videojs } = useNuxtApp()

  const initPlayer = (videoElement, options = {}, plugins = []) => {
    const player = $videojs(videoElement, options)

    // Dynamically add plugins
    plugins.forEach((plugin) => {
      if (plugin?.install) {
        plugin.install(player)
      } else if (typeof plugin === 'function') {
        plugin(player)
      }
    })

    return player
  }

  return { initPlayer }
}
