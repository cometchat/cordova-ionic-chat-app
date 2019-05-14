export declare function resolveValue<T>(...fns: (() => Promise<T | undefined>)[]): Promise<T | undefined>;
export declare function resolveValueSync<T>(...fns: (() => T | undefined)[]): T | undefined;
