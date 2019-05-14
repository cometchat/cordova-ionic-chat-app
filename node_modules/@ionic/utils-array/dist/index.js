"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function conform(t) {
    if (typeof t === 'undefined') {
        return [];
    }
    if (!Array.isArray(t)) {
        return [t];
    }
    return t;
}
exports.conform = conform;
function concurrentFilter(array, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const mapper = (v) => tslib_1.__awaiter(this, void 0, void 0, function* () { return [v, yield callback(v)]; });
        const mapped = yield Promise.all(array.map(mapper));
        return mapped
            .filter(([, f]) => f)
            .map(([v]) => v);
    });
}
exports.concurrentFilter = concurrentFilter;
function filter(array, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const initial = [];
        return reduce(array, (acc, v, i, arr) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (yield callback(v, i, arr)) {
                acc.push(v);
            }
            return acc;
        }), initial);
    });
}
exports.filter = filter;
function map(array, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const initial = [];
        return reduce(array, (acc, v, i, arr) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            acc.push(yield callback(v, i, arr));
            return acc;
        }), initial);
    });
}
exports.map = map;
function reduce(array, callback, initialValue) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const hadInitialValue = typeof initialValue === 'undefined';
        const startingIndex = hadInitialValue ? 1 : 0;
        if (typeof initialValue === 'undefined') {
            if (array.length === 0) {
                throw new TypeError('Reduce of empty array with no initial value');
            }
            initialValue = array[0];
        }
        let value = initialValue;
        for (let i = startingIndex; i < array.length; i++) {
            const v = yield callback(value, array[i], i, array);
            value = v;
        }
        return value;
    });
}
exports.reduce = reduce;
