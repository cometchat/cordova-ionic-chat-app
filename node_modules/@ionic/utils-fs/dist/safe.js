"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs = require("fs-extra");
function stat(p) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            return yield fs.stat(p);
        }
        catch (e) {
            // ignore
        }
    });
}
exports.stat = stat;
function readdir(dir) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            return yield fs.readdir(dir);
        }
        catch (e) {
            return [];
        }
    });
}
exports.readdir = readdir;
