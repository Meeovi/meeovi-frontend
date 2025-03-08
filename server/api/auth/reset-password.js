export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const { email, resetToken, newPassword } = body;

  const response = await $fetch(`${config.public.commerceUrl}/rest/V1/customers/resetPassword`, {
    method: 'PUT',
    body: {
      email,
      resetToken,
      newPassword,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
});