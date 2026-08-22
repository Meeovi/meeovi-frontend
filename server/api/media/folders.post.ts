import { createError } from 'h3'
import { directusServer, createItem } from '../../utils/directus-server'
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
  const { name } = body as { name: string }

  if (!name || typeof name !== 'string' || !name.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Folder name is required',
    })
  }

  try {
    const created = await directusServer.request(
      createItem('media_folders' as any, {
        name: name.trim(),
        user: session.user.id,
      }),
    )

    return created
  } catch (error: any) {
    console.error('Server media folder create error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error?.message || 'Failed to create folder',
    })
  }
})
