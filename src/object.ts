export function typedKeys<T extends object>(o: T): (keyof T)[] {
    return Object.keys(o) as (keyof T)[];
}

/**
 * Creates a new object containing only the keys that exist in both input objects.
 * In case of overlapping keys, the values from the first object are used.
 */
export function intersectKeysToObject<A extends object, B extends object>(obj1: A, obj2: B) {
    return Object.fromEntries(
        typedKeys(obj1)
            .filter((key) => key in obj2)
            .map((key) => [key, obj1[key]]),
    ) as Partial<A>;
}
