export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const { email } = body;

  const response = await $fetch(`${config.public.commerceUrl}/rest/V1/customers/password`, {
    method: 'POST',
    body: {
      email,
      template: 'email_reset',
      websiteId: 1,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response;
});