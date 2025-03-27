// In your API routes file (e.g., api/wishlist.js)

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
  async addToWishlist(req, res) {
    const { productId, userId } = req.body
    try {
      const wishlistItem = await prisma.mgtn_lof_multiwishlist.create({
        data: {
          product_id: productId,
          user_id: userId,
          // Add other required fields
        }
      })
      res.json(wishlistItem)
    } catch (error) {
      res.status(500).json({ error: 'Failed to add to wishlist' })
    }
  },

  async removeFromWishlist(req, res) {
    const { id } = req.params
    try {
      await prisma.mgtn_lof_multiwishlist.delete({
        where: { id: parseInt(id) }
      })
      res.json({ message: 'Item removed from wishlist' })
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove from wishlist' })
    }
  },

  async checkWishlist(req, res) {
    const { productId, userId } = req.params
    try {
      const wishlistItem = await prisma.mgtn_lof_multiwishlist.findFirst({
        where: {
          product_id: parseInt(productId),
          user_id: parseInt(userId)
        }
      })
      res.json({ inWishlist: !!wishlistItem })
    } catch (error) {
      res.status(500).json({ error: 'Failed to check wishlist' })
    }
  }
}
