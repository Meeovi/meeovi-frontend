import type { Ref } from 'vue'

// Define the GraphQL result type
export interface CategoryResult {
  categories: {
    items: Array<{
      name: string;
      // Add other category properties
    }>;
  };
}

// Define the Outlet type
export interface Outlet {
  id: string;
  name: string;
  color?: string;
  colortext?: string;
  callouts?: Array<{
    name: string;
  }>;
  // Add other outlet properties
}

// Define the return type for the composable
export interface OutletData {
  result: Ref<CategoryResult | undefined>;
  outlets: Ref<Outlet[] | null>;
  outlet: Ref<Outlet | null>;
  outletsError: Ref<Error | null>;
  outletError: Ref<Error | null>;
}
