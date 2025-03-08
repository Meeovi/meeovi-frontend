// server/api/customer/profile.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  if (!event.req.session?.customer) {
    return createError({
      statusCode: 401,
      statusMessage: 'Unauthorized'
    })
  }

  try {
    const customer = await prisma.mgtn_customer_entity.findUnique({
      where: {
        entity_id: event.req.session.customer.id
      },
      select: {
        entity_id: true,
        email: true,
        firstname: true,
        lastname: true,
        // Add other needed fields
      }
    })

    if (!customer) {
      throw new Error('Customer not found')
    }

    return { customer }
  } catch (error) {
    console.error('Error fetching profile:', error)
    return createError({
      statusCode: 500,
      statusMessage: 'Error fetching profile',
      data: { message: error.message }
    })
  }
})
