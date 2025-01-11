// utils/errorHandler.ts
export class CartError extends Error {
  constructor(message: string, public code: string) {
    super(message)
    this.name = 'CartError'
  }
}

export const errorHandler = {
  handle(error: any) {
    if (error instanceof CartError) {
      // Handle known cart errors
      switch (error.code) {
        case 'INVENTORY_ERROR':
          useNotification().show({
            type: 'error',
            message: 'Product is out of stock'
          })
          break
        case 'AUTH_ERROR':
          // Redirect to login or refresh token
          navigateTo('/auth/login')
          break
        default:
          useNotification().show({
            type: 'error',
            message: error.message
          })
      }
    } else {
      // Handle unexpected errors
      console.error('Unexpected error:', error)
      useNotification().show({
        type: 'error',
        message: 'An unexpected error occurred'
      })
    }
  }
}
