export declare const EMAIL_REGEX: RegExp;
export declare const URL_REGEX: RegExp;
export declare function isValidEmail(email?: any): boolean;
export declare function isValidURL(url?: any): boolean;
export declare function enforceLF(str: string): string;
export declare function strcmp(a: string | undefined, b: string | undefined): number;
export declare function str2num(value: any, defaultValue?: number): number;
export interface SlugifyOptions {
    separator?: string;
}
/**
 * Create a slug out of an input string.
 *
 * Whitespace is trimmed, everything is lowercased, some international
 * characters are converted, then dasherized.
 */
export declare function slugify(input: string, { separator }?: SlugifyOptions): string;
