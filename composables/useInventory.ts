// composables/useInventory.ts
export const useInventory = () => {
    const checkInventory = async (sku: string, qty: number) => {
      try {
        const response = await fetch(
          `${process.env.MAGENTO_API_URL}/inventory/source-items/${sku}`,
          {
            headers: {
              'Authorization': `Bearer ${useAuth().token.value}`
            }
          }
        )
  
        const inventory = await response.json()
        
        if (!inventory.quantity || inventory.quantity < qty) {
          throw new CartError(
            'Requested quantity not available',
            'INVENTORY_ERROR'
          )
        }
  
        return true
      } catch (error) {
        errorHandler.handle(error)
        return false
      }
    }
  
    return {
      checkInventory
    }
  }
  