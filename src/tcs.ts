export function tcs(input: string): string {
    if (input.length === 0) {
        return "";
    }
    if (input.length === 1) {
        return input.toUpperCase();
    }
    return input[0].toUpperCase() + input.slice(1);
}
