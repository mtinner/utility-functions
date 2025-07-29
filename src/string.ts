export const slice = (text: string, maxChars?: number) =>
    maxChars ? text.slice(0, maxChars) : text;

export const shorten = (text: string, maxChars: number): string => {
    const newText = shorten(text, maxChars);
    if (text.length > newText.length) {
        return `${newText.trim()}...`;
    }
    return newText;
};