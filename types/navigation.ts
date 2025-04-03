export interface NavigationItem {
    id: string;
    label: string;
    link: string;
}

export interface NavigationState {
    items: NavigationItem[];
    isLoading: boolean;
}
