// @vite-pwa/nuxt documents these three runtime client hooks but never
// actually augments Nuxt's RuntimeNuxtHooks type with them (see the doc
// comment on `getSWRegistration` in
// @vite-pwa/nuxt/dist/runtime/plugins/types.d.ts) — cast the hook API to
// sidestep the resulting false-positive typecheck failures.
export default defineNuxtPlugin((nuxtApp) => {
  const hook = nuxtApp.hook as (name: string, cb: (payload: any) => void) => void
  hook('service-worker:registered', ({ url, registration }) => {
    // eslint-disable-next-line no-console
    console.log(`service worker registered at ${url}`, registration)
  })
  hook('service-worker:registration-failed', ({ error }) => {
    console.error(`service worker registration failed`, error)
  })
  hook('service-worker:activated', ({ url, registration }) => {
    // eslint-disable-next-line no-console
    console.log(`service worker activated at ${url}`, registration)
  })
})