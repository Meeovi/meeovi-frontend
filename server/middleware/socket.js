import { Server } from 'socket.io'

export default defineEventHandler((event) => {
  if (!event.node.res.socket.server.io) {
    const io = new Server(event.node.res.socket.server, {
      cors: {
        origin: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3011',
        methods: ['GET', 'POST'],
        credentials: true
      }
    })

    event.node.res.socket.server.io = io

    io.on('connection', (socket) => {
      console.log('Client connected')
      
      socket.on('authenticate', async (userId) => {
        socket.join(`user-${userId}`)
      })

      socket.on('disconnect', () => {
        console.log('Client disconnected')
      })
    })
  }
})
