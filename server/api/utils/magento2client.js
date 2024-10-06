import fetch from 'node-fetch'

export class Magento2Client {
  constructor(config) {
    this.baseUrl = config.public.commerceUrl
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${config.public.commerceApiToken}`
    }
  }

  async get(endpoint) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'GET',
      headers: this.headers
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  }

  async post(endpoint, data) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    return await response.json()
  }

  // Add other methods (PUT, DELETE, etc.) as needed
}
