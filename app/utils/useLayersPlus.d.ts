interface ExtraOptions {
    discover?: boolean;
    discoverMonorepo?: boolean;
    envPrefix?: string;
    requiredFiles?: string[];
    log?: boolean;
}
export declare function useLayersPlus(rootDir: string, layers: Record<string, string>, extra?: ExtraOptions): {
    readonly layers: import("nuxt-layers-utils").Layers;
    extends(): string[];
    dir(key: string, folders: import("nuxt-layers-utils").NuxtDir[]): Record<import("nuxt-layers-utils").NuxtDir, string>;
    dirPath(key: string, folder?: import("nuxt-layers-utils").NuxtDir): string;
    importsDirs(folders?: string[]): string[];
    components(global?: boolean, prefix?: string, pathPrefix?: boolean): {
        path: string;
        global: boolean;
        prefix: string | undefined;
        pathPrefix: boolean;
    }[];
    contentSources(prefix?: "auto" | Record<string, any> | boolean): Record<string, {
        base: string;
        driver: string;
        prefix?: undefined;
    } | {
        base: string;
        driver: string;
        prefix: string;
    }>;
    alias(prefix?: string, folders?: string[] | true): import("nuxt-layers-utils").Layers;
    viteResolveAlias(aliases: Record<string, string>): {
        find: string;
        replacement: string;
    }[];
    only(filter: string | Array<string>): any;
    rel(key: string, folder?: string): string;
    abs(key: string, folder?: string): string;
    obj<T>(callback: (key: string, rel: string, abs: string, index: number) => T): Record<string, T>;
    arr<T_1>(callback: (key: string, rel: string, abs: string, index: number) => T_1): T_1[];
};
export {};
