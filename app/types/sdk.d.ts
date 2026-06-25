import type { Sdk } from 'alternate-sdk'

declare module '#app' {
  interface NuxtApp {
    $sdk: Sdk
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $sdk: Sdk
  }
}
