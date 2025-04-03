export interface Review {
    id: string;
    productId: string;
    rating: number;
    title: string;
    content: string;
    author: string;
    date: string;
}

export interface ReviewState {
    reviews: Review[];
    isLoading: boolean;
}
