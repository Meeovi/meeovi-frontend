import { defineStore } from 'pinia';
import type { OverlayState } from '@/types/overlay';

export const useOverlayStore = defineStore('overlay', {
    state: (): OverlayState => ({
        isVisible: false
    }),
    actions: {
        showOverlay() {
            this.isVisible = true;
        },
        hideOverlay() {
            this.isVisible = false;
        },
        toggleOverlay() {
            this.isVisible = !this.isVisible;
        }
    }
});
