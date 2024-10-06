import { Server } from 'socket.io'
import { defineEventHandler } from 'h3'

export default defineEventHandler((event) => {
  if (!event.node.res.socket) {
    throw new Error('Socket is not available')
  }

  const io = new Server(event.node.res.socket.server)

  io.on('connection', (socket) => {
    console.log('New client connected')

    socket.on('new-listing', (data) => {
      io.emit('new-listing', data)
    })

    socket.on('message', (data) => {
      io.to(data.recipientId).emit('new-message', data)
    })

    socket.on('disconnect', () => {
      console.log('Client disconnected')
    })
  })

  return { socket: io }
})
