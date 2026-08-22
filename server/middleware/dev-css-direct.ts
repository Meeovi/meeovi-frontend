// Dev-only workaround for a Nuxt 4.5.2 + Vite 8.2.1 regression (both latest
// as of writing, no upstream fix available yet): SSR-rendered
// <link rel="stylesheet"> tags for real filesystem CSS — registered via
// nuxt.config's `css` array or @import'd in a component's <style> block —
// point at Vite's bare dev URL instead of the `?direct` variant Vite
// requires to return real text/css. Without `?direct`, Vite serves its
// HMR JS-wrapped CSS module instead (Content-Type: text/javascript), which
// browsers silently refuse to apply as a stylesheet — no console error,
// the page just renders unstyled. Verified: the same URL with `?direct`
// appended returns correct text/css content.
//
// Real <link rel="stylesheet"> fetches are identifiable by the browser's
// own Accept header (`text/css,*/*;q=0.1` per the HTML spec) — distinct
// from Vite's client-side JS module graph re-fetching the same CSS file
// for HMR, which requests `*/*` and must keep getting the JS-wrapped
// module for hot-reload to keep working. Only browser stylesheet fetches
// get rewritten here.
export default defineEventHandler((event) => {
  if (!import.meta.dev) return

  const url = event.node.req.url || ''
  if (!url.startsWith('/_nuxt/') || !/\.css(\?|$)/.test(url)) return
  if (/[?&]direct(&|$)/.test(url)) return

  const accept = getRequestHeader(event, 'accept') || ''
  if (!accept.includes('text/css')) return

  event.node.req.url = url + (url.includes('?') ? '&direct' : '?direct')
})
