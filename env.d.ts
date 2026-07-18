/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly DIRECTUS_URL: string;
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
