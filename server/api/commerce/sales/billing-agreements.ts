// server/api/billing-agreements.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  try {
    const billingAgreements = await prisma.mgtn_paypal_billing_agreement.findMany({
      orderBy: {
        created_at: 'desc'  // Assuming you have a created_at field
      },
      take: 10, // Limit to most recent 10 agreements
      select: {
        agreement_id: true,
        customer_id: true,
        status: true,
        created_at: true,
        // Add other fields you want to retrieve
      }
    })
    
    return billingAgreements
  } catch (error) {
    console.error('Error fetching billing agreements:', error)
    throw createError({
      statusCode: 500,
      message: 'Error fetching billing agreements'
    })
  }
})
