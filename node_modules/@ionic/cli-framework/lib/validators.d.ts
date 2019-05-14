import { Validator, Validators } from '../definitions';
export declare function validate(input: string, key: string, validatorsToUse: Validator[]): void;
export declare const validators: Validators;
export declare function contains(values: (string | undefined)[], { caseSensitive }: {
    caseSensitive?: boolean;
}): Validator;
