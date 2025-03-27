export interface UseBase64Options {
    /**
     * Output as Data URL format
     *
     * @default true
     */
    dataUrl?: boolean
  }
  export interface ToDataURLOptions extends UseBase64Options {
    /**
     * MIME type
     */
    type?: string | undefined
    /**
     * Image quality of jpeg or webp
     */
    quality?: any
  }
  export interface UseBase64ObjectOptions<T> extends UseBase64Options {
    serializer?: (v: T) => string
  }
  export interface UseBase64Return {
    base64: Ref<string>
    promise: Ref<Promise<string>>
    execute: () => Promise<string>
  }
  export declare function useBase64(
    target: MaybeRefOrGetter<string>,
    options?: UseBase64Options,
  ): UseBase64Return
  export declare function useBase64(
    target: MaybeRefOrGetter<Blob>,
    options?: UseBase64Options,
  ): UseBase64Return
  export declare function useBase64(
    target: MaybeRefOrGetter<ArrayBuffer>,
    options?: UseBase64Options,
  ): UseBase64Return
  export declare function useBase64(
    target: MaybeRefOrGetter<HTMLCanvasElement>,
    options?: ToDataURLOptions,
  ): UseBase64Return
  export declare function useBase64(
    target: MaybeRefOrGetter<HTMLImageElement>,
    options?: ToDataURLOptions,
  ): UseBase64Return
  export declare function useBase64<T extends Record<string, unknown>>(
    target: MaybeRefOrGetter<T>,
    options?: UseBase64ObjectOptions<T>,
  ): UseBase64Return
  export declare function useBase64<T extends Map<string, unknown>>(
    target: MaybeRefOrGetter<T>,
    options?: UseBase64ObjectOptions<T>,
  ): UseBase64Return
  export declare function useBase64<T extends Set<unknown>>(
    target: MaybeRefOrGetter<T>,
    options?: UseBase64ObjectOptions<T>,
  ): UseBase64Return
  export declare function useBase64<T>(
    target: MaybeRefOrGetter<T[]>,
    options?: UseBase64ObjectOptions<T[]>,
  ): UseBase64Return