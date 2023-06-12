import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "account" | "checkout" | "default"
declare module "C:/Users/Basti/OneDrive/Documents/My Websites/Handmade Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}