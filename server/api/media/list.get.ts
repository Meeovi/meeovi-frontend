import { createError } from 'h3'
import { directusServer, readItems } from '../../utils/directus-server'
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

  let files: any[] = []
  let folders: any[] = []

  try {
    [files, folders] = await Promise.all([
      directusServer.request(
        readItems('media' as any, {
          fields: ['id', 'name', 'filename_download', 'filesize', 'type', 'folder', 'date_created', 'user'],
          filter: {
            user: {
              _eq: userId,
            },
          },
          sort: ['-date_created'],
          limit: -1,
        }),
      ),
      directusServer.request(
        readItems('media_folders' as any, {
          fields: ['id', 'name', 'parent_folder', 'user'],
          filter: {
            user: {
              _eq: userId,
            },
          },
          sort: ['name'],
          limit: -1,
        }),
      ),
    ])
  } catch (error: any) {
    console.error('Server media list error:', error)
    throw createError({
      statusCode: 500,
      statusMessage: error?.message || 'Failed to load media',
    })
  }

  return {
    files: Array.isArray(files) ? files : [],
    folders: Array.isArray(folders) ? folders : [],
  }
})
