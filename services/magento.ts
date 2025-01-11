// services/magento.ts
export class MagentoService {
    private baseUrl: string = process.env.MAGE_STORE_URL || ''
    private headers: Headers
  
    constructor() {
      this.headers = new Headers({
        'Authorization': `Bearer ${process.env.WEBSITE_TOKEN}`,
        'Content-Type': 'application/json'
      })
    }
  
    async getProduct(sku: string) {
      const response = await fetch(`${this.baseUrl}/products/${sku}`, {
        headers: this.headers
      })
      return await response.json()
    }
  
    async getProductPrice(sku: string) {
      const response = await fetch(`${this.baseUrl}/products/${sku}/price`, {
        headers: this.headers
      })
      return await response.json()
    }
  }
  