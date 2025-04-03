import { defineStore } from 'pinia';
import type { NoMatchState } from '@/types/noMatch';

export const useNoMatchStore = defineStore('noMatch', {
    state: (): NoMatchState => ({
        notFoundPaths: []
    }),
    actions: {
        addNotFoundPath(path: string) {
            if (!this.notFoundPaths.includes(path)) {
                this.notFoundPaths.push(path);
            }
        }
    }
});
