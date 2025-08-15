export const slice = (text: string, maxChars?: number) =>
    maxChars ? text.slice(0, maxChars) : text;

export const shorten = (text: string, maxChars: number): string => {
    const newText = shorten(text, maxChars);
    if (text.length > newText.length) {
        return `${newText.trim()}...`;
    }
    return newText;
};

export function stableStringify(value: unknown): string {
    if (value === null || typeof value !== "object") {
        return JSON.stringify(value);
    }

    if (Array.isArray(value)) {
        return "[" + value.map(stableStringify).join(",") + "]";
    }

    const keys = Object.keys(value).sort();
    return "{" + keys.map(k => JSON.stringify(k) + ":" + stableStringify((value as any)[k])).join(",") + "}";
}
