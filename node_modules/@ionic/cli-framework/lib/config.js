"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_fs_1 = require("@ionic/utils-fs");
const fs = require("fs");
const lodash = require("lodash");
const path = require("path");
const writeFileAtomic = require("write-file-atomic");
class BaseConfig {
    constructor(p, { pathPrefix = [] } = {}) {
        this.p = p;
        this.pathPrefix = pathPrefix;
    }
    get file() {
        try {
            return this._getFile();
        }
        catch (e) {
            return {};
        }
    }
    get c() {
        try {
            const file = this._getFile();
            const navigated = this.pathPrefix.length === 0 ? file : lodash.get(file, [...this.pathPrefix]);
            const config = typeof navigated === 'object' ? navigated : {};
            return lodash.assign({}, this.provideDefaults(config), config);
        }
        catch (e) {
            if (e.code === 'ENOENT' || e.name === 'SyntaxError') {
                const value = this.provideDefaults({});
                const v = this.pathPrefix.length === 0 ? value : lodash.set({}, [...this.pathPrefix], value);
                this._setFile(v);
                return value;
            }
            throw e;
        }
    }
    set c(value) {
        const v = this.pathPrefix.length === 0 ? value : lodash.set(this.file, [...this.pathPrefix], value);
        this._setFile(v);
    }
    get(property, defaultValue) {
        const value = this.c[property];
        if (defaultValue && typeof value === 'undefined') {
            return defaultValue;
        }
        return value;
    }
    set(property, value) {
        const config = this.c;
        config[property] = value;
        this.c = config;
    }
    unset(property) {
        const config = this.c;
        delete config[property];
        this.c = config;
    }
    _getFile() {
        const contents = fs.readFileSync(this.p, 'utf8');
        return JSON.parse(contents);
    }
    _setFile(value) {
        utils_fs_1.mkdirpSync(path.dirname(this.p));
        writeFileAtomic.sync(this.p, JSON.stringify(value, undefined, 2) + '\n');
    }
}
exports.BaseConfig = BaseConfig;
