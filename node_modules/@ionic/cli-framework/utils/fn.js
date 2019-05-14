"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function resolveValue(...fns) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        for (const fn of fns) {
            const result = yield fn();
            if (typeof result !== 'undefined') {
                return result;
            }
        }
    });
}
exports.resolveValue = resolveValue;
function resolveValueSync(...fns) {
    for (const fn of fns) {
        const result = fn();
        if (typeof result !== 'undefined') {
            return result;
        }
    }
}
exports.resolveValueSync = resolveValueSync;
