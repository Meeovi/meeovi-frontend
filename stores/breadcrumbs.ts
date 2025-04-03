import { defineStore } from 'pinia';

export interface Breadcrumb {
    url?: string;
    name: string;
}

export interface BreadcrumbsStore {
    breadcrumbs: Breadcrumb[];
    areBreadcrumbsVisible: boolean;
}

export const useBreadcrumbsStore = defineStore('breadcrumbs', {
    state: (): BreadcrumbsStore => ({
        breadcrumbs: [],
        areBreadcrumbsVisible: true,
    }),
    actions: {
        updateBreadcrumbs(breadcrumbs: Breadcrumb[]) {
            this.breadcrumbs = breadcrumbs;
        },
        toggleBreadcrumbs(areBreadcrumbsVisible: boolean) {
            this.areBreadcrumbsVisible = areBreadcrumbsVisible;
        }
    }
});
