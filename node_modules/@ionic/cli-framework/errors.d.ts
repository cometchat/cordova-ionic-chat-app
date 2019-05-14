import { ValidationError } from './definitions';
export declare const ERROR_INPUT_VALIDATION = "ERR_ICF_INPUT_VALIDATION";
export declare const ERROR_COMMAND_NOT_FOUND = "ERR_ICF_COMMAND_NOT_FOUND";
export declare const ERROR_IPC_MODULE_INACCESSIBLE = "ERR_ICF_IPC_MODULE_INACCESSIBLE";
export declare const ERROR_IPC_UNKNOWN_PROCEDURE = "ERR_ICF_IPC_UNKNOWN_PROCEDURE";
export declare abstract class BaseError extends Error {
    abstract readonly name: string;
    message: string;
    stack: string;
    code?: string;
    error?: Error;
    exitCode?: number;
    constructor(message: string);
    toString(): string;
    inspect(): string;
}
export declare class InputValidationError extends BaseError {
    errors: ValidationError[];
    readonly name = "InputValidationError";
    code: string;
    constructor(message: string, errors: ValidationError[]);
}
export declare class CommandNotFoundError extends BaseError {
    args: string[];
    readonly name = "CommandNotFoundError";
    code: string;
    constructor(message: string, args: string[]);
}
export declare class IPCError extends BaseError {
    readonly name = "IPCError";
}
