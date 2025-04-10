import { H3Event, readBody } from 'h3'

export default async (event: H3Event) => {
  const body = await readBody(event)
  const { email } = body

  if (!email) {
    return { error: 'Email is required' }
  }

  const config = useRuntimeConfig()
  const data = {
    email_address: email,
    status: 'subscribed',
  }

  const response = await $fetch(`https://${config.mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${config.mailchimpAudienceId}/members`, {
    method: 'POST',
    body: data,
    headers: {
      Authorization: `apikey ${config.mailchimpApiKey}`,
      'Content-Type': 'application/json',
    },
  }).catch(err => {
    return { error: err.data?.detail || 'Failed to subscribe' }
  })

  return response
}
