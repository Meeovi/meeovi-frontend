// Was always an empty array (confirmed back through every commit that
// touched this file) — spaces.vue maps this positionally against the
// real Directus navigation item 79's `menus` array, so every tab on
// /connect/spaces rendered nothing regardless of what was configured
// there. Order below matches that live data exactly: Default, Audio,
// Video, Images, Text (whose underlying space_type is actually named
// "Forum" — see textSpaces.vue). Each component itself already exists
// and reads real space_types-filtered data from Directus (space_types'
// own component_path field pointed at exactly these files).
export const componentMap: Array<() => Promise<any>> = [
  () => import('#social/app/components/features/spaceSections/defaultSpaces.vue'),
  () => import('#social/app/components/features/spaceSections/audioSpaces.vue'),
  () => import('#social/app/components/features/spaceSections/videoSpaces.vue'),
  () => import('#social/app/components/features/spaceSections/imageSpaces.vue'),
  () => import('#social/app/components/features/spaceSections/textSpaces.vue'),
]
