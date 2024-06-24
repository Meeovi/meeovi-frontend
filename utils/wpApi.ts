import type { NitroFetchOptions } from 'nitropack'

export const wpApiFetch = async (
  endpoint: string,
  options: NitroFetchOptions<`'https://your-wordpress-site.com/wp-json/wp/v2'` | `https://your-wordpress-site.com/wp-json/wp/v2${string}`, 'get' | 'head' | 'patch' | 'post' | 'put' | 'delete' | 'connect' | 'options' | 'trace'>
) => {
  const wpSiteUrl = process.env.WP_SITE_URL as string
  const username = process.env.WP_USERNAME as string
  const appPassword = process.env.WP_APP_PASSWORD as string

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Basic ' + btoa(`${username}:${appPassword}`),
    ...options.headers,
  }

  const response = await $fetch(`${wpSiteUrl}/wp-json/wp/v2${endpoint}`, {
    ...options,
    headers,
  })

  return response
}