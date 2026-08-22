import { createError } from 'h3'
import { directusServer, readItems, deleteItem } from '../../utils/directus-server'
import { getAuthSession } from '#auth/server/utils/sessions'

export default defineEventHandler(async (event) => {
  const session = await getAuthSession(event)

  if (!session?.user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const userId = session.user.id

  const body = await readBody(event)
  const ids = Array.isArray(body?.ids) ? body.ids : [body?.id].filter(Boolean)

  if (!ids.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file ids provided',
    })
  }

  // Ownership check: directusServer authenticates with a static/admin
  // token that bypasses Directus's own per-user permissions, so this route
  // is the only place ownership can be enforced. Without it, any
  // authenticated user could delete any other user's file by id.
  const owned = await directusServer.request(
    readItems('media' as any, {
      fields: ['id'],
      filter: {
        id: { _in: ids.map(String) },
        user: { _eq: userId },
      },
      limit: -1,
    }),
  )
  const ownedIds = new Set((owned as any[]).map((item) => String(item.id)))

  const results: any[] = []
  for (const id of ids) {
    if (!ownedIds.has(String(id))) {
      results.push({ id, error: 'Not found' })
      continue
    }
    try {
      const result = await directusServer.request(deleteItem('media' as any, String(id)))
      results.push(result)
    } catch (error: any) {
      console.error(`Server media delete error for ${id}:`, error)
      results.push({ id, error: error?.message || 'Failed to delete' })
    }
  }

  return results
})
