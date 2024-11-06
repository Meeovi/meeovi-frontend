import { eventHandler } from 'h3'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async (event) => {
  if (event.method === 'GET') {
    try {
      const bestsellers = await prisma.mgtn_sales_bestsellers_aggregated_daily.findMany({
        orderBy: [
          { qty_ordered: 'desc' },
          { product_price: 'desc' }
        ],
        take: 10
      })

      return bestsellers
    } catch (error) {
      console.error('Error fetching bestsellers:', error)
      throw createError({ statusCode: 500, statusMessage: 'Error fetching bestsellers data' })
    } finally {
      await prisma.$disconnect()
    }
  } else {
    throw createError({ statusCode: 405, statusMessage: `Method ${event.method} Not Allowed` })
  }
})
