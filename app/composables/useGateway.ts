// composables/useGateway.ts
import { createGatewayRegistry } from 'alternate-sdk/gateway/registry'
import { createGateway } from 'alternate-sdk/gateway'
import { useContentRequest } from '#imports'

let _gateway: any = null
let _registry: any = null

function createFallbackContentApi() {
  const request = (async () => []) as any

  request.readItems = async () => []
  request.readItem = async () => null
  request.readFieldsByCollection = async () => []
  request.createItem = async () => null
  request.updateItem = async () => null
  request.deleteItem = async () => true
  request.uploadFiles = async () => null
  request.getAssetUrl = () => ''
  request.request = async () => null

  return request
}

function normalizeContentApi(contentApi: any) {
  if (!contentApi) {
    return createFallbackContentApi()
  }

  // Backward compatibility: some places call gateway.content(read(...)) while
  // others use gateway.content.readItems(...).
  const callable = (async (operation?: any, options: any = {}) => {
    if (typeof contentApi === 'function') {
      return contentApi(operation, options)
    }

    if (typeof contentApi.request === 'function') {
      if (typeof operation === 'string') {
        return contentApi.request(operation, options)
      }

      if (operation && typeof operation === 'object') {
        const path = operation.path || operation.url || operation.endpoint
        if (typeof path === 'string') {
          const requestOptions: any = {
            ...(operation.method ? { method: operation.method } : {}),
            ...(operation.params ? { params: operation.params } : {}),
            ...(operation.query ? { params: operation.query } : {}),
            ...(operation.body ? { body: operation.body } : {}),
          }

          return contentApi.request(path, requestOptions)
        }
      }
    }

    return null
  }) as any

  for (const key of ['readItems', 'readItem', 'readFieldsByCollection', 'createItem', 'updateItem', 'deleteItem', 'uploadFiles', 'getAssetUrl', 'request']) {
    if (typeof contentApi[key] === 'function') {
      callable[key] = contentApi[key].bind(contentApi)
    }
  }

  if (typeof callable.readItems !== 'function') {
    return createFallbackContentApi()
  }

  return callable
}

export function useGateway() {
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()
  const callHook = nuxtApp.hooks.callHook as (name: string, ...args: any[]) => Promise<void>

  // 1. Create registry once (lazy)
  if (!_registry) {
    _registry = createGatewayRegistry()

    // Allow all installed adapters to register themselves
    callHook('alternate:registerAdapter', _registry)
  }

  // 2. Create gateway once (lazy)
  if (!_gateway) {
    _gateway = createGateway({
      content: { provider: config.public.contentProvider || 'directus' },
      auth: { provider: config.public.authProvider || 'better-auth' },
      commerce: { provider: config.public.commerceProvider || 'magento' },
      search: { provider: config.public.searchProvider || 'opensearch' },
    }, _registry)
  }

  if (!_gateway.content || typeof _gateway.content.readItems !== 'function') {
    try {
      _gateway.content = normalizeContentApi(useContentRequest())
    } catch {
      _gateway.content = createFallbackContentApi()
    }
  } else {
    _gateway.content = normalizeContentApi(_gateway.content)
  }

  _gateway.auth ||= {}
  _gateway.commerce ||= {}
  _gateway.search ||= {}

  return _gateway
}
