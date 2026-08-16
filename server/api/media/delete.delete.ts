import { createError } from 'h3'
import { directusServer, deleteItem } from '../../utils/directus-server'
import { getAuthSession } from '#auth/server/utils/sessions'

export default defineEventHandler(async (event) => {
  const session = await getAuthSession(event)

  if (!session?.user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const body = await readBody(event)
  const ids = Array.isArray(body?.ids) ? body.ids : [body?.id].filter(Boolean)

  if (!ids.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file ids provided',
    })
  }

  const results: any[] = []
  for (const id of ids) {
    try {
      const result = await directusServer.request(deleteItem('media', String(id)))
      results.push(result)
    } catch (error: any) {
      console.error(`Server media delete error for ${id}:`, error)
      results.push({ id, error: error?.message || 'Failed to delete' })
    }
  }

  return results
})
