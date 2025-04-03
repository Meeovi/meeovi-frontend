import { defineStore } from 'pinia';
import type { Review, ReviewState } from '@/types/review';

export const useReviewStore = defineStore('review', {
    state: (): ReviewState => ({
        reviews: [],
        isLoading: false
    }),
    actions: {
        async fetchReviews(productId: string) {
            this.isLoading = true;
            try {
                const response = await $fetch<Review[]>(`/api/reviews?productId=${productId}`);
                this.reviews = response;
            } catch (error) {
                console.error('Error fetching reviews:', error);
            } finally {
                this.isLoading = false;
            }
        },
        addReview(review: Review) {
            this.reviews.push(review);
        }
    }
});
