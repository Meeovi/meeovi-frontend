import { defineStore } from 'pinia';
import type { UrlRewriteState } from '@/types/urlRewrites';

export const useUrlRewritesStore = defineStore('urlRewrites', {
    state: (): UrlRewriteState => ({
        redirects: {}
    }),
    actions: {
        setRedirect(url: string, redirectTo: string) {
            this.redirects[url] = redirectTo;
        },
        resolveRedirect(url: string): string | null {
            return this.redirects[url] || null;
        }
    }
});
