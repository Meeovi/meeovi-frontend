// types/product.ts
export interface ProductData {
    id: string;
    sku: string;
    name: string;
    price: number;
    quantity: number;
  }
  
  export interface CartInput {
    cart_id: string;
    cart_items: {
      data: {
        sku: string;
        quantity: number;
      }
    }[];
  }
  
  export interface ProductQueryResult {
    products: {
      items: Array<{
        uid: string;
        sku: string;
        name: string;
        price_range: {
          minimum_price: {
            final_price: {
              value: number;
              currency: string;
            }
          }
        }
        stock_status: string;
      }>
    }
  }

  export interface CompareState {
    items: ProductData[];
  }