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

// Define the Department type
export interface Department {
  id: string;
  name: string;
  color?: string;
  colortext?: string;
  callouts?: Array<{
    name: string;
  }>;
  // Add other department properties
}

export interface Space {
  id: string;
  name: string;
  department: string | number; // ID of the related department
  description?: string;
  image?: string;
  // Add other space properties
}

// Update DepartmentData interface to include spaces
export interface DepartmentData {
  result: Ref<CategoryResult | undefined>;
  departments: Ref<Department[] | null>;
  department: Ref<Department | null>;
  spaces: Ref<Space[] | null>; // Add this
  departmentsError: Ref<Error | null>;
  departmentError: Ref<Error | null>;
  spacesError?: Ref<Error | null>; // Add this
}

