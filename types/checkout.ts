export interface CheckoutState {
    shippingAddress: string | null;
    paymentMethod: string | null;
    orderId?: string;
    isLoading: boolean;
}
