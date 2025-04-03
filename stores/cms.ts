import { defineStore } from 'pinia';
import type { CMSState } from '@/types/CMS.type';

export const useCmsStore = defineStore('cms', {
    state: (): CMSState => ({
        pages: {}
    }),
    actions: {
        async fetchCMSPage(pageId: string) {
            try {
                const response = await $fetch(`/api/cms/${pageId}`);
                this.pages[pageId] = response;
            } catch (error) {
                console.error(`Error fetching CMS page ${pageId}:`, error);
            }
        },
        setCMSPage(pageId: string, pageData: any) {
            this.pages[pageId] = pageData;
        }
    }
});
