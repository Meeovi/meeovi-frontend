import {
  eventHandler
} from 'h3'
import {
  PrismaClient
} from '@prisma/client'

const prisma = new PrismaClient()

export default eventHandler(async (event) => {
  if (event.method === 'GET') {
    try {
      const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000)

      const recentlyViewed = await prisma.mgtn_report_viewed_product_aggregated_daily.findMany({
        where: {
          period: {
            gte: oneDayAgo
          }
        },
        orderBy: [{
            views_num: 'desc'
          },
          {
            rating_pos: 'desc'
          }
        ],
        take: 10
      })

      return recentlyViewed
    } catch (error) {
      console.error('Error fetching recently viewed:', error)
      throw createError({
        statusCode: 500,
        statusMessage: 'Error fetching recently viewed data'
      })
    } finally {
      await prisma.$disconnect()
    }
  } else {
    throw createError({
      statusCode: 405,
      statusMessage: `Method ${event.method} Not Allowed`
    })
  }
})