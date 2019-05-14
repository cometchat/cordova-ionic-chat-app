import { PackageJson } from '../definitions';
export declare const ERROR_INVALID_PACKAGE_JSON = "INVALID_PACKAGE_JSON";
export declare const ERROR_BIN_NOT_FOUND = "BIN_NOT_FOUND";
/**
 * Lightweight version of https://github.com/npm/validate-npm-package-name
 */
export declare function isValidPackageName(name: string): boolean;
export declare function readPackageJsonFile(p: string): Promise<PackageJson>;
export declare function compileNodeModulesPaths(filePath: string): string[];
export interface ResolveOptions {
    paths?: string[];
}
/**
 * Poorly implemented shim for Node 8+ `require.resolve()`, with `paths`
 * option.
 *
 * Only supports use case 4: LOAD_NODE_MODULES
 *
 * @see https://nodejs.org/docs/latest-v8.x/api/modules.html#modules_require_resolve_request_options
 * @see https://nodejs.org/docs/latest-v8.x/api/modules.html#modules_all_together
 */
export declare function resolve(m: string, options?: ResolveOptions): string;
export declare namespace resolve {
    function LOAD_AS_FILE(x: string): string | undefined;
    function LOAD_INDEX(x: string): string | undefined;
    function LOAD_AS_DIRECTORY(x: string): string | undefined;
}
export declare function resolveBin(m: string, bin: string, options?: ResolveOptions): string;
