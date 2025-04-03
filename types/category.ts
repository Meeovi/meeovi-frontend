export interface Category {
    id: string;
    name: string;
    description?: string;
    image?: string;
    url_key: string;
    product_count: number;
}

export interface CategoryState {
    categories: Category[];
    currentCategory?: Category | null;
    isLoading: boolean;
}
