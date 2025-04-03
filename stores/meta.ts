import { defineStore } from 'pinia';
import type { MetaState } from '@/types/meta';

export const useMetaStore = defineStore('meta', {
    state: (): MetaState => ({
        title: '',
        description: '',
        keywords: ''
    }),
    actions: {
        setMeta(title: string, description: string, keywords: string) {
            this.title = title;
            this.description = description;
            this.keywords = keywords;
        }
    }
});
