import type { ConfigurableWindow } from "@vueuse/core";

/**
 * Reactive online state.
 *
 * @see https://vueuse.org/useOnline
 * @param options
 */
export declare function useOnline(
    options?: ConfigurableWindow,
  ): Readonly<Ref<boolean, boolean>>