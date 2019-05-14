"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const utils_fs_1 = require("@ionic/utils-fs");
const fs = require("fs");
const path = require("path");
const guards_1 = require("../guards");
exports.ERROR_INVALID_PACKAGE_JSON = 'INVALID_PACKAGE_JSON';
exports.ERROR_BIN_NOT_FOUND = 'BIN_NOT_FOUND';
/**
 * Lightweight version of https://github.com/npm/validate-npm-package-name
 */
function isValidPackageName(name) {
    return encodeURIComponent(name) === name;
}
exports.isValidPackageName = isValidPackageName;
function readPackageJsonFile(p) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const packageJson = yield utils_fs_1.readJson(p);
        if (!guards_1.isPackageJson(packageJson)) {
            throw exports.ERROR_INVALID_PACKAGE_JSON;
        }
        return packageJson;
    });
}
exports.readPackageJsonFile = readPackageJsonFile;
function compileNodeModulesPaths(filePath) {
    return utils_fs_1.compilePaths(filePath).map(f => path.join(f, 'node_modules'));
}
exports.compileNodeModulesPaths = compileNodeModulesPaths;
/**
 * Poorly implemented shim for Node 8+ `require.resolve()`, with `paths`
 * option.
 *
 * Only supports use case 4: LOAD_NODE_MODULES
 *
 * @see https://nodejs.org/docs/latest-v8.x/api/modules.html#modules_require_resolve_request_options
 * @see https://nodejs.org/docs/latest-v8.x/api/modules.html#modules_all_together
 */
function resolve(m, options) {
    const paths = options && options.paths ? options.paths : undefined;
    if (!paths) {
        // There is absolutely no reason to use this shim without the `paths`
        // option--use the built-in resolver.
        return require.resolve(m);
    }
    // LOAD_NODE_MODULES
    for (const p of paths) {
        const filePath = path.join(p, m);
        const foundPathAsFile = resolve.LOAD_AS_FILE(filePath);
        if (foundPathAsFile) {
            return foundPathAsFile;
        }
        const foundPathAsDirectory = resolve.LOAD_AS_DIRECTORY(filePath);
        if (foundPathAsDirectory) {
            return foundPathAsDirectory;
        }
    }
    const err = new Error(`Cannot find module '${m}'`);
    err.code = 'MODULE_NOT_FOUND';
    throw err;
}
exports.resolve = resolve;
(function (resolve) {
    function LOAD_AS_FILE(x) {
        const exts = ['', '.js', '.json'];
        for (const ext of exts) {
            const p = x + ext;
            const stat = safeStatSync(p);
            if (stat && stat.isFile()) {
                return p;
            }
        }
    }
    resolve.LOAD_AS_FILE = LOAD_AS_FILE;
    function LOAD_INDEX(x) {
        const exts = ['.js', '.json'];
        for (const ext of exts) {
            const p = path.join(x, `index${ext}`);
            const stat = safeStatSync(p);
            if (stat && stat.isFile()) {
                return p;
            }
        }
    }
    resolve.LOAD_INDEX = LOAD_INDEX;
    function LOAD_AS_DIRECTORY(x) {
        try {
            const packageJson = JSON.parse(fs.readFileSync(path.join(x, 'package.json'), { encoding: 'utf8' }));
            if (packageJson.main) {
                const m = path.join(x, packageJson.main);
                const foundPathAsFile = resolve.LOAD_AS_FILE(m);
                if (foundPathAsFile) {
                    return foundPathAsFile;
                }
                const foundPathAsIndex = resolve.LOAD_INDEX(m);
                if (foundPathAsIndex) {
                    return foundPathAsIndex;
                }
            }
        }
        catch (e) {
            // ignore fs and json errors
        }
        const foundPath = resolve.LOAD_INDEX(x);
        if (foundPath) {
            return foundPath;
        }
    }
    resolve.LOAD_AS_DIRECTORY = LOAD_AS_DIRECTORY;
})(resolve = exports.resolve || (exports.resolve = {}));
function resolveBin(m, bin, options) {
    const packageJsonPath = resolve(`${m}/package`, options);
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, { encoding: 'utf8' }));
    if (!guards_1.isPackageJson(packageJson) || !packageJson.bin) {
        throw exports.ERROR_INVALID_PACKAGE_JSON;
    }
    const desiredBin = packageJson.bin[bin];
    if (!desiredBin) {
        throw exports.ERROR_BIN_NOT_FOUND;
    }
    return path.resolve(path.dirname(packageJsonPath), desiredBin);
}
exports.resolveBin = resolveBin;
function safeStatSync(filePath) {
    try {
        return fs.statSync(filePath);
    }
    catch (e) {
        // ignore
    }
}
