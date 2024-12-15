// utils/error-handler.ts
export async function handleActivityPubError(error, context) {
    await directus.items('activity_errors').createItem({
      error: error.message,
      context: JSON.stringify(context),
      timestamp: new Date().toISOString()
    })
    
    // Log error for monitoring
    console.error('ActivityPub Error:', error)
    
    // Determine appropriate response
    if (error.name === 'ValidationError') {
      throw createError({
        statusCode: 400,
        message: 'Invalid ActivityPub request'
      })
    }
    
    throw createError({
      statusCode: 500,
      message: 'Internal server error processing ActivityPub request'
    })
  }
  