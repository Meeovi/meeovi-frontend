import { getToken } from '#auth'
import { eventHandler } from 'h3'

export default eventHandler(async (event) => {
  const token = await getToken({ event })
  return token || 'no token present'
})