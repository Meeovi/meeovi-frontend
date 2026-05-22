# M Framework Starter Template (Nuxt 4)

A production-ready, backend-agnostic starter template with built-in authentication, authorization, and search.

## What is Included

- Authentication via GraphQL mutations (`login`, `signup`, `logout`) and session query (`me`)
- Authorization helpers for role-based route protection (`admin` middleware + `useAuthorization`)
- Search composable and UI connected to GraphQL `search` query
- Unified GraphQL gateway endpoint through `@mframework/api` + `alternate-gateway`
- Nuxt SEO is a collection of modules that handle all of the technical aspects in growing sites traffic organically.

## Key Paths

- `app/composables/useAuth.ts`: auth/session lifecycle
- `app/composables/useCurrentUser.ts`: current user state from `me`
- `app/composables/useAuthorization.ts`: role checks (`hasRole`, `requireRole`)
- `app/composables/useSearch.ts`: typed search state/query flow
- `app/middleware/auth.global.ts`: auth route guard
- `app/middleware/admin.ts`: role-based admin guard
- `server/utils/auth.ts`: server-side `requireAuth` / `requireRole` helpers

## Environment

Copy `.env.example` and set at minimum:

- `MAPI_ENDPOINT`
- `MEEOVI_PROVIDER` (`opensearch`, `directus`, or `magento`; defaults to `opensearch`)

Adapter-related variables (set based on your selected provider):

- `ALTERNATE_SEARCH_INDEX` (or `NUXT_PUBLIC_SEARCH_INDEX`) for `opensearch`
- `DIRECTUS_URL` and `DIRECTUS_STATIC_TOKEN` for `directus`
- `MAGENTO_BASE_URL` and `MAGENTO_ACCESS_TOKEN` for `magento`

## Run

```bash
npm install
npm run dev
```

## GraphQL Contract (Expected)

- `query Me { me { id name email role } }`
- `mutation Login($email: String!, $password: String!)`
- `mutation Signup($email: String!, $password: String!, $name: String)`
- `mutation Logout`
- `query Search($q: String!, $page: Int)`

Keep backend implementations behind the GraphQL API so this starter remains flexible across providers.
