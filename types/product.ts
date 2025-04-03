export interface Product {
  id: string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  sku: string;
}

export interface ProductState {
  products: Product[];
  selectedProduct?: Product | null;
  isLoading: boolean;
}
