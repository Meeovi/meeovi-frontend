import { createError } from 'h3'
import { directusServer, updateItem } from '../../utils/directus-server'
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

  try {
    const updated = await directusServer.request(
      updateItem('media', id, {
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
