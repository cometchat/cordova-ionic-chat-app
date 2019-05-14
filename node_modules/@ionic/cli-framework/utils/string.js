"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
exports.EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
exports.URL_REGEX = /^[\S]+:[\S]+$/;
function isValidEmail(email) {
    if (typeof email !== 'string') {
        return false;
    }
    return exports.EMAIL_REGEX.test(email);
}
exports.isValidEmail = isValidEmail;
function isValidURL(url) {
    if (typeof url !== 'string') {
        return false;
    }
    return exports.URL_REGEX.test(url);
}
exports.isValidURL = isValidURL;
function enforceLF(str) {
    return str.match(/[\r\n]$/) ? str : str + '\n';
}
exports.enforceLF = enforceLF;
function strcmp(a, b) {
    if (!a) {
        a = '';
    }
    if (!b) {
        b = '';
    }
    return +(a > b) || +(a === b) - 1;
}
exports.strcmp = strcmp;
function str2num(value, defaultValue = -1) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value !== 'string') {
        return defaultValue;
    }
    const result = parseInt(value, 10);
    if (Number.isNaN(result)) {
        return defaultValue;
    }
    return result;
}
exports.str2num = str2num;
/**
 * Create a slug out of an input string.
 *
 * Whitespace is trimmed, everything is lowercased, some international
 * characters are converted, then dasherized.
 */
function slugify(input, { separator = '-' } = {}) {
    return lodash.words(lodash.deburr(input.trim())).map(w => w.toLowerCase().replace(/[^A-z0-9]/g, '')).join(separator);
}
exports.slugify = slugify;
