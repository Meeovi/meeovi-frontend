// api/.well-known/webfinger.ts
export default defineEventHandler((event) => {
  const query = getQuery(event)
  const resource = query.resource

  // Check if resource exists and is a string
  if (!resource || typeof resource !== 'string') {
    throw createError({
      statusCode: 400,
      message: 'Resource parameter is required and must be a string'
    })
  }

  // Check if resource starts with 'acct:'
  if (!resource.startsWith('acct:')) {
    throw createError({
      statusCode: 400,
      message: 'Invalid resource format'
    })
  }

  const username = resource.split('acct:')[1]

  // Verify username exists
  if (!username) {
    throw createError({
      statusCode: 400,
      message: 'Invalid username format'
    })
  }

  return {
    subject: resource,
    links: [
      {
        rel: "self",
        type: "application/activity+json",
        href: `${process.env.DOMAIN}/users/${username}`
      }
    ]
  }
})
