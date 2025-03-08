export default defineEventHandler(async (event) => {
  const token = event.req.headers['authorization'];

  if (!token) {
    return sendError(event, createError({
      statusCode: 401,
      statusMessage: 'Authorization token missing',
    }));
  }

  try {
    const response = await $fetch(`${config.public.commerceUrl}/rest/V1/integration/admin/token`, {
      method: 'DELETE',
      headers: {
        'Authorization': token,
      },
    });

    // Return success message or handle token invalidation
    return {
      statusCode: 200,
      body: 'Logout successful',
    };
  } catch (error) {
    console.error('Error during logout:', error);
    return sendError(event, createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    }));
  }
});