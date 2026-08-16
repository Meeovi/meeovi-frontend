import { createError } from 'h3'
import { directusServer } from '../../utils/directus-server'
import { uploadFiles, updateItem } from '@directus/sdk'
import { getAuthSession } from '#auth/server/utils/sessions'

export default defineEventHandler(async (event) => {
  const log = (msg: string) => {
    console.log(`[upload] ${msg}`)
  }
  log('handler start')
  const session = await getAuthSession(event)
  log('session user id: ' + session?.user?.id)

  if (!session?.user?.id) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    })
  }

  const formData = new FormData()
  const files = await readMultipartFormData(event)
  log('files count: ' + files?.length)

  if (!files || !files.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No files provided',
    })
  }

  // Append files and optional folder field to form data
  for (const file of files) {
    if (file.data) {
      const blob = new Blob([file.data])
      formData.append('file', blob, file.filename || file.name)
    }
    if (file.name === 'folder' && typeof file.data === 'string') {
      formData.append('folder', file.data)
    }
  }

  try {
    log('calling uploadFiles')
    const timeoutMs = 15000
    const uploaded = await Promise.race([
      directusServer.request(uploadFiles(formData)),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Directus upload timeout')), timeoutMs),
      ),
    ])
    log('uploaded: ' + JSON.stringify(uploaded))

    // Ensure the uploaded file is associated with the actual user
    // (directusServer uses a static token, so we patch uploaded_by)
    if (uploaded?.id) {
      log('patching uploaded_by')
      await directusServer.request(
        updateItem('media', uploaded.id, {
          uploaded_by: session.user.id,
        }),
      )
    }

    return uploaded
  } catch (error: any) {
    log('Server media upload error: ' + error?.message)
    log('Directus error details: ' + JSON.stringify({
      message: error?.message,
      response: error?.response,
      body: error?.body,
    }))

    // Extract the most useful error message from Directus
    let errorMessage = 'Failed to upload file'
    if (error?.body?.errors?.[0]?.message) {
      errorMessage = error.body.errors[0].message
    } else if (error?.message) {
      errorMessage = error.message
    }

    throw createError({
      statusCode: 500,
      statusMessage: errorMessage,
    })
  }
})
// force rebuild Sun Aug  2 21:51:21 UTC 2026
