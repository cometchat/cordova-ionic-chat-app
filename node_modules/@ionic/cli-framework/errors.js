"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
const util = require("util");
exports.ERROR_INPUT_VALIDATION = 'ERR_ICF_INPUT_VALIDATION';
exports.ERROR_COMMAND_NOT_FOUND = 'ERR_ICF_COMMAND_NOT_FOUND';
exports.ERROR_IPC_MODULE_INACCESSIBLE = 'ERR_ICF_IPC_MODULE_INACCESSIBLE';
exports.ERROR_IPC_UNKNOWN_PROCEDURE = 'ERR_ICF_IPC_UNKNOWN_PROCEDURE';
class BaseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.stack = (new Error()).stack || '';
    }
    toString() {
        const repr = lodash.pick(this, lodash.pull(lodash.keys(this), 'error'));
        return (`${this.name}: ${this.message} ${util.inspect(repr, { breakLength: Infinity })} ${this.stack} ` +
            `${this.error ? `\nWrapped: ${this.error.stack ? this.error.stack : this.error}` : ''}`);
    }
    inspect() {
        return this.toString();
    }
}
exports.BaseError = BaseError;
class InputValidationError extends BaseError {
    constructor(message, errors) {
        super(message);
        this.errors = errors;
        this.name = 'InputValidationError';
        this.code = exports.ERROR_INPUT_VALIDATION;
    }
}
exports.InputValidationError = InputValidationError;
class CommandNotFoundError extends BaseError {
    constructor(message, args) {
        super(message);
        this.args = args;
        this.name = 'CommandNotFoundError';
        this.code = exports.ERROR_COMMAND_NOT_FOUND;
    }
}
exports.CommandNotFoundError = CommandNotFoundError;
class IPCError extends BaseError {
    constructor() {
        super(...arguments);
        this.name = 'IPCError';
    }
}
exports.IPCError = IPCError;
