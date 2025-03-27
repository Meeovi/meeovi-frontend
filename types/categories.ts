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

// Define the Category type
export interface Category {
  id: string;
  name: string;
  color?: string;
  colortext?: string;
  callouts?: Array<{
    name: string;
  }>;
  // Add other category properties
}

export interface Space {
  id: string;
  name: string;
  category: string | number; // ID of the related category
  description?: string;
  image?: string;
  // Add other space properties
}

// Update CategoryData interface to include spaces
export interface CategoryData {
  result: Ref<CategoryResult | undefined>;
  categories: Ref<Category[] | null>;
  category: Ref<Category | null>;
  spaces: Ref<Space[] | null>; // Add this
  categoriesError: Ref<Error | null>;
  categoryError: Ref<Error | null>;
  spacesError?: Ref<Error | null>; // Add this
}

