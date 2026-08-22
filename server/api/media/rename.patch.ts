import { createError } from 'h3'
import { directusServer, readItems, updateItem } from '../../utils/directus-server'
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
  const { id, title } = body as { id: string; title: string }

  if (!id || typeof title !== 'string' || !title.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'File id and title are required',
    })
  }

  // Ownership check: directusServer authenticates with a static/admin
  // token that bypasses Directus's own per-user permissions, so this route
  // is the only place ownership can be enforced. Without it, any
  // authenticated user could rename any other user's file by id.
  const owned = await directusServer.request(
    readItems('media' as any, {
      fields: ['id'],
      filter: {
        id: { _eq: id },
        user: { _eq: session.user.id },
      },
      limit: 1,
    }),
  )
  if (!(owned as any[]).length) {
    throw createError({
      statusCode: 404,
      statusMessage: 'File not found',
    })
  }

  try {
    const updated = await directusServer.request(
      updateItem('media' as any, id, {
        title: title.trim(),
      }),
    )

    return updated
  } catch (error: any) {
    console.error('Server media rename error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error?.message || 'Failed to rename file',
    })
  }
})
