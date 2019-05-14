"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isNamespace(obj) {
    return obj &&
        typeof obj.getMetadata === 'function' &&
        typeof obj.getNamespaces === 'function' &&
        typeof obj.getCommands === 'function';
}
exports.isNamespace = isNamespace;
function isCommand(obj) {
    return obj && isNamespace(obj.namespace) &&
        typeof obj.getMetadata === 'function' &&
        typeof obj.run === 'function' &&
        typeof obj.validate === 'function';
}
exports.isCommand = isCommand;
function isHydratedCommandMetadata(obj) {
    return obj &&
        typeof obj.name === 'string' &&
        isCommand(obj.command) &&
        isNamespace(obj.namespace) &&
        Array.isArray(obj.path) &&
        Array.isArray(obj.aliases);
}
exports.isHydratedCommandMetadata = isHydratedCommandMetadata;
function isPackageJson(obj) {
    return obj && typeof obj.name === 'string';
}
exports.isPackageJson = isPackageJson;
function isLinkFootnote(obj) {
    return obj &&
        (typeof obj.id === 'number' || typeof obj.id === 'string') &&
        typeof obj.url === 'string';
}
exports.isLinkFootnote = isLinkFootnote;
