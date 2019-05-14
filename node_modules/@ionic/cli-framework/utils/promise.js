"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
exports.promisify = (func) => {
    return (...args) => {
        return new Promise((resolve, reject) => {
            func(...args, (err, response) => {
                if (err) {
                    return reject(err);
                }
                resolve(response);
            });
        });
    };
};
exports.promisifyEvent = (emitter, event) => {
    return new Promise((resolve, reject) => {
        emitter.once(event, (value) => {
            resolve(value);
        });
        emitter.once('error', (err) => {
            reject(err);
        });
    });
};
var PromiseUtil;
(function (PromiseUtil) {
    function some(promises, expected = 1) {
        if (promises.length === expected) {
            return Promise.all(promises);
        }
        return new Promise((resolve, reject) => {
            const values = [];
            const resolveOne = (value) => {
                if (expected-- > 0) {
                    values.push(value);
                }
                else {
                    resolve(values);
                }
            };
            const rejectOne = (err) => {
                reject(err);
            };
            for (const promise of promises) {
                promise.then(resolveOne, rejectOne);
            }
        });
    }
    PromiseUtil.some = some;
    function any(promises) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const [first] = yield some(promises, 1);
            return first;
        });
    }
    PromiseUtil.any = any;
})(PromiseUtil = exports.PromiseUtil || (exports.PromiseUtil = {}));
