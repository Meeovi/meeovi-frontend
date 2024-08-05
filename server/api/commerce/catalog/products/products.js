import {
    PrismaClient
} from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
    try {
        const products = await prisma.mgtn_catalog_product_entity.findMany()

        return products
    } catch (error) {
        // Return error if fetching products fails
        return {
            status: 500,
            body: {
                message: 'Failed to fetch products'
            }
        };
    }
});