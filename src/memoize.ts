import {stableStringify} from "./string";

export function memoize<F extends (...args: any[]) => any>(foo:F, options?: { ttl: number }) {
    const cache = new Map<string, { value: ReturnType<F>; expires: number | undefined }>();

    return {
        memoizedFunction: (...args: Parameters<F>):ReturnType<F> => {
            const key = stableStringify(args);
            const cached = cache.get(key);
            const now = Date.now();
            if (cached && (cached.expires === undefined || cached?.expires && cached.expires > now)) {
                return cached.value;
            }
            const result = foo(args);
            const ttl = options?.ttl ?? -1; // Default to -1 if not provided
            cache.set(key, {value: result, expires: ttl >= 0 ? now + ttl : undefined});
            return result
        },
        clearCache: () => {
            cache.clear();
        },
        size: () => {
            return Array.from(cache).filter(([, {expires}]) => {
                const now = Date.now();
                return expires === undefined || expires > now
            }).length;
        }
    }
}