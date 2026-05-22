# Copilot Architecture Rules

# Copilot Instructions — Nuxt 4 Backend‑Agnostic Architecture

You are assisting in refactoring the project into a backend‑agnostic, Nuxt‑opinionated architecture using Nuxt 4 Layers and Adapters.

## Core Principles
- The frontend is **fully opinionated**: Vue 3 + Nuxt 4 + Nuxt Layers.
- The backend is **agnostic**: all backend logic must be implemented via **adapters**.
- Do NOT generate framework-agnostic UI. All UI lives inside Nuxt layers.
- Do NOT recreate the old alternate-* packages (gateway, core, sdk, ui). They are being removed.
- Follow Nuxt 4 patterns: `app/`, `layers/`, `runtime/`, `server/`, `composables/`, `plugins/`.

## New Architecture
Copilot should generate code following this structure:

example
    app/
        components/
        assets/
        composables/
        middleware/
        plugins/
        utils/
        types/
        pages/
        app.vue
    server/
    shared/
    public/
    package.json
    nuxt.config.ts
    tsconfig.json

## Directus Integration
- Never generate a Nuxt plugin for Directus.
- Never instantiate a Directus SDK client directly.
- Always use the existing `@mframework/adapter-directus`.
- All Directus communication must go through the gateway.
- Frontend code must use:
    const gateway = useGateway()
    const content = gateway.content
- Do not inject `$directus`, `$directus`, `$readItems`, or any global Directus helpers.
- Do not create `/app/plugins/directus.ts`.

## Gateway Pattern
- Backend adapters are created and registered only inside the gateway.
- Frontend uses composables, not plugins, to access gateway domains.
- Use `useGateway().content`, `useGateway().commerce`, `useGateway().search`, etc.

## Nuxt Plugin Rules
- Do not create plugins that wrap backend SDKs.
- Do not create plugins that duplicate gateway functionality.
- Only create plugins for UI or client-side utilities, never backend clients.

## Rules for Copilot
### 1. Contracts
When generating contracts, place them in:
layers/shared/contracts/

Code
Example:
```ts
export interface AuthAdapter {
  login(email: string, password: string): Promise<User>
  logout(): Promise<void>
  getSession(): Promise<Session | null>
}
2. Adapters
When generating backend implementations:

Place them in /adapters/<backend>/

Implement the shared contracts

Do NOT use plugins unless necessary

Use runtimeConfig to select the adapter

Example:

ts
export const directusAuthAdapter: AuthAdapter = {
  login: async (...) => {},
  logout: async () => {},
  getSession: async () => {}
}
3. Nuxt Layer Patterns
Copilot should generate:

defineNuxtModule only when needed

defineNuxtPlugin for injecting adapters

useXxx() composables inside domain layers

auto-imported components inside layers

4. Adapter Loader
Copilot should generate a runtime adapter loader like:

ts
export function useAuth() {
  const config = useRuntimeConfig()
  const backend = config.public.backend

  const adapters = {
    directus: directusAuthAdapter,
    magento: magentoAuthAdapter,
    supabase: supabaseAuthAdapter
  }

  return adapters[backend]
}

No framework-agnostic UI packages.

6. Remove Old Packages
Copilot should NOT generate or reference:

alternate-core

alternate-gateway

alternate-sdk

alternate-ui

any alternate-* domain modules

7. Output Style
Copilot should:

Generate production-ready code

Follow Nuxt 4 conventions

Avoid unnecessary boilerplate

Prefer composables over plugins

Keep nuxt.config.ts slim by delegating config to layers

Tasks Copilot Should Help With
Creating new Nuxt layers

Moving UI into shared layer

Creating domain layers (auth, commerce, social, media)

Generating contracts

Generating backend adapters

Creating adapter loaders

Refactoring composables to use adapters

Cleaning up old alternate-* code

Updating nuxt.config.ts to use layers

Creating runtimeConfig-based backend selection