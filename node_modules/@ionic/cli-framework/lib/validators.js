"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const errors_1 = require("../errors");
const string_1 = require("../utils/string");
function validate(input, key, validatorsToUse) {
    const errors = [];
    for (const validator of validatorsToUse) {
        const message = validator(input, key);
        if (message !== true) {
            errors.push({ key, message, validator });
        }
    }
    if (errors.length > 0) {
        throw new errors_1.InputValidationError('Invalid inputs.', errors);
    }
}
exports.validate = validate;
exports.validators = {
    required(input, key) {
        if (!input) {
            if (key) {
                return `${chalk_1.default.green(key)} must not be empty.`;
            }
            else {
                return 'Must not be empty.';
            }
        }
        return true;
    },
    email(input, key) {
        if (!string_1.isValidEmail(input)) {
            if (key) {
                return `${chalk_1.default.green(key)} is an invalid email address.`;
            }
            else {
                return 'Invalid email address.';
            }
        }
        return true;
    },
    url(input, key) {
        if (!string_1.isValidURL(input)) {
            if (key) {
                return `${chalk_1.default.green(key)} is an invalid URL.`;
            }
            else {
                return 'Invalid URL.';
            }
        }
        return true;
    },
    numeric(input, key) {
        if (isNaN(Number(input))) {
            if (key) {
                return `${chalk_1.default.green(key)} must be numeric.`;
            }
            else {
                return 'Must be numeric.';
            }
        }
        return true;
    },
    slug(input, key) {
        if (!input || string_1.slugify(input) !== input) {
            if (key) {
                return `${chalk_1.default.green(key)} is an invalid slug (machine name).`;
            }
            else {
                return 'Invalid slug (machine name).';
            }
        }
        return true;
    },
};
function contains(values, { caseSensitive = true }) {
    if (!caseSensitive) {
        values = values.map(v => typeof v === 'string' ? v.toLowerCase() : v);
    }
    return (input, key) => {
        if (!caseSensitive && typeof input === 'string') {
            input = input.toLowerCase();
        }
        if (values.indexOf(input) === -1) {
            const strValues = values.filter(v => typeof v === 'string'); // TODO: typescript bug?
            const mustBe = (strValues.length !== values.length ? 'unset or one of' : 'one of') + ': ' + strValues.map(v => chalk_1.default.green(v)).join(', ');
            const fmtPretty = (v) => typeof v === 'undefined' ? 'unset' : (v === '' ? 'empty' : chalk_1.default.green(v));
            if (key) {
                return `${chalk_1.default.green(key)} must be ${mustBe} (not ${fmtPretty(input)})`;
            }
            else {
                return `Must be ${mustBe} (not ${fmtPretty(input)})`;
            }
        }
        return true;
    };
}
exports.contains = contains;
