import { PrismaClient } from '@prisma/client';

export default defineEventHandler(async (event) => {
    const id = Number(event.context.params.id)

    try {
        const user = await prisma.mgtn_customer_entity.findUnique({
            where: {
                id
            }
        })

        if (!user) {
            return {
                statusCode: 404,
                message: 'User not found'
            }
        }

        return user
    } catch (error) {
        return {
            statusCode: 500,
            message: 'Internal server error'
        }
    }
});