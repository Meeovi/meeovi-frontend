// composables/useTax.ts
export const useTax = () => {
    const calculateTax = async (quoteId: string) => {
      try {
        const response = await fetch(
          `${process.env.MAGENTO_API_URL}/carts/${quoteId}/totals`,
          {
            headers: {
              'Authorization': `Bearer ${useAuth().token.value}`
            }
          }
        )
  
        const totals = await response.json()
        return {
          subtotal: totals.subtotal,
          tax: totals.tax_amount,
          grandTotal: totals.grand_total
        }
      } catch (error) {
        errorHandler.handle(error)
        return null
      }
    }
  
    return {
      calculateTax
    }
  }
  