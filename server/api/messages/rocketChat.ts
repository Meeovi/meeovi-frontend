import { H3Event } from 'h3'
import 'dotenv'

const HOST = process.env.ROCKET_CHAT_URL || 'https://your-rocketchat-server-url/api/v1'
const USER = process.env.ROCKET_CHAT_USER || 'your-username'
const PASS = process.env.ROCKET_CHAT_PASS || 'your-password'

let authToken = ''
let userId = ''

interface LoginResponse {
  data: {
    authToken: string
    userId: string
  }
}

interface Room {
  name: string
  _id: string
  lastMessage?: {
    msg: string
  }
}

interface Message {
  msg: string
  u: {
    _id: string
  }
}

const login = async () => {
  try {
    const response = await $fetch<LoginResponse>('/login', {
      method: 'POST',
      baseURL: HOST,
      body: { user: USER, password: PASS }
    })
    authToken = response.data.authToken
    userId = response.data.userId
    return { success: true }
  } catch (error) {
    console.error('Failed to login:', error)
    return { success: false, error }
  }
}

const fetchWithAuth = <T>(url: string, options: any = {}): Promise<T> => {
  return $fetch<T>(url, {
    ...options,
    baseURL: HOST,
    headers: {
      ...options.headers,
      'X-Auth-Token': authToken,
      'X-User-Id': userId,
    },
  })
}

export default defineEventHandler(async (event: H3Event) => {
  try {
    const path = event.context.params?.path
    const body = await readBody(event)

    if (!authToken) {
      const loginResult = await login()
      if (!loginResult.success) {
        throw new Error('Failed to authenticate with Rocket.Chat')
      }
    }

    if (!path) {
      throw new Error('No path provided')
    }

    switch (path) {
      case 'getChats':
        const chatsResponse = await fetchWithAuth<{ update: Room[] }>('/rooms.get')
        return { 
          success: true, 
          data: chatsResponse.update.map(room => ({
            name: room.name,
            id: room._id,
            lastMessage: room.lastMessage ? room.lastMessage.msg : '',
          }))
        }

      case 'getMessages':
        const messagesResponse = await fetchWithAuth<{ messages: Message[] }>('/chat.getMessage', {
          params: { roomId: body.roomId }
        })
        return { 
          success: true, 
          data: messagesResponse.messages.map(msg => ({
            text: msg.msg,
            sent: msg.u._id === userId,
          }))
        }

      case 'sendMessage':
        await fetchWithAuth('/chat.sendMessage', {
          method: 'POST',
          body: {
            message: {
              rid: body.roomId,
              msg: body.message,
            }
          }
        })
        return { success: true }

      default:
        throw new Error('Invalid path')
    }
  } catch (error) {
    console.error('Error in rocketChat.ts:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    }
  }
})