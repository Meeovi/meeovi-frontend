import { defineStore } from 'pinia';
import type { PopupState } from '@/types/popup';

export const usePopupStore = defineStore('popup', {
    state: (): PopupState => ({
        isOpen: false,
        content: null
    }),
    actions: {
        openPopup(content: string) {
            this.isOpen = true;
            this.content = content;
        },
        closePopup() {
            this.isOpen = false;
            this.content = null;
        }
    }
});
