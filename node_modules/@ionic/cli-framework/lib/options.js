"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash = require("lodash");
const minimist = require("minimist");
const colors_1 = require("./colors");
exports.parseArgs = minimist;
/**
 * Remove options, which are any arguments that starts with a hyphen (-), from
 * a list of process args and return the result.
 *
 * If a double-hyphen separator (--) is encountered, it and the remaining
 * arguments are included in the result, as they are not interpreted. This
 * behavior can be disabled by setting the `includeSeparated` option to
 * `false`.
 */
function stripOptions(pargv, { includeSeparated = true }) {
    const r = /^\-/;
    const [ownArgs, otherArgs] = separateArgv(pargv);
    const filteredArgs = ownArgs.filter(arg => !r.test(arg));
    if (!includeSeparated) {
        return filteredArgs;
    }
    if (otherArgs.length > 0) {
        otherArgs.unshift('--');
    }
    return [...filteredArgs, ...otherArgs];
}
exports.stripOptions = stripOptions;
/**
 * Split a list of process args into own-arguments and other-arguments, which
 * are separated by the double-hyphen (--) separator.
 *
 * For example, `['cmd', 'arg1', '--', 'arg2']` will be split into
 * `['cmd', 'arg1']` and `['arg2']`.
 */
function separateArgv(pargv) {
    const ownArgs = [...pargv];
    const otherArgs = [];
    const sepIndex = pargv.indexOf('--');
    if (sepIndex >= 0) {
        otherArgs.push(...ownArgs.splice(sepIndex));
        otherArgs.shift(); // strip separator
    }
    return [ownArgs, otherArgs];
}
exports.separateArgv = separateArgv;
/**
 * Takes a Minimist command option and normalizes its values.
 */
function hydrateCommandMetadataOption(option) {
    const type = option.type ? option.type : String;
    return lodash.assign({}, option, {
        type,
        default: typeof option.default !== 'undefined' ? option.default : null,
        aliases: Array.isArray(option.aliases) ? option.aliases : [],
    });
}
exports.hydrateCommandMetadataOption = hydrateCommandMetadataOption;
function hydrateOptionSpec(opt) {
    return Object.assign({ value: opt.type === Boolean ? 'true/false' : opt.name }, opt.spec || {});
}
exports.hydrateOptionSpec = hydrateOptionSpec;
function formatOptionName(opt, { showAliases = true, showValueSpec = true, colors = colors_1.DEFAULT_COLORS } = {}) {
    const { input, weak } = colors;
    const spec = hydrateOptionSpec(opt);
    const showInverse = opt.type === Boolean && opt.default === true && opt.name.length > 1;
    const valueSpec = opt.type === Boolean ? '' : `=<${spec.value}>`;
    const aliasValueSpec = opt.type === Boolean ? '' : '=?';
    return ((showInverse ? input(`--no-${opt.name}`) : input(`-${opt.name.length > 1 ? '-' : ''}${opt.name}`)) +
        (showValueSpec ? weak(valueSpec) : '') +
        (showAliases ?
            (!showInverse && opt.aliases && opt.aliases.length > 0 ? ', ' + opt.aliases
                .map(alias => input(`-${alias}`) + (showValueSpec ? weak(aliasValueSpec) : ''))
                .join(', ') : '') : ''));
}
exports.formatOptionName = formatOptionName;
function metadataOptionsToParseArgsOptions(commandOptions) {
    const options = {
        string: ['_'],
        boolean: [],
        alias: {},
        default: {},
        '--': true,
    };
    for (const o of commandOptions) {
        const opt = hydrateCommandMetadataOption(o);
        if (opt.type === String) {
            options.string.push(opt.name);
        }
        else if (opt.type === Boolean) {
            options.boolean.push(opt.name);
        }
        options.default[opt.name] = opt.default;
        options.alias[opt.name] = opt.aliases;
    }
    return options;
}
exports.metadataOptionsToParseArgsOptions = metadataOptionsToParseArgsOptions;
var OptionFilters;
(function (OptionFilters) {
    function includesGroups(groups) {
        const g = Array.isArray(groups) ? groups : [groups];
        return (option) => typeof option.groups !== 'undefined' && lodash.intersection(option.groups, g).length > 0;
    }
    OptionFilters.includesGroups = includesGroups;
    function excludesGroups(groups) {
        const g = Array.isArray(groups) ? groups : [groups];
        return (option) => typeof option.groups === 'undefined' || lodash.difference(option.groups, g).length > 0;
    }
    OptionFilters.excludesGroups = excludesGroups;
})(OptionFilters = exports.OptionFilters || (exports.OptionFilters = {}));
/**
 * Given an array of command metadata options and an object of parsed options,
 * match each supplied option with its command metadata option definition and
 * pass it, along with its value, to a predicate function, which is used to
 * return a subset of the parsed options.
 *
 * Options which are unknown to the command metadata are always excluded.
 *
 * @param predicate If excluded, `() => true` is used.
 */
function filterCommandLineOptions(options, parsedArgs, predicate = () => true) {
    const initial = { _: parsedArgs._ };
    if (parsedArgs['--']) {
        initial['--'] = parsedArgs['--'];
    }
    const mapped = new Map([
        ...options.map((o) => [o.name, o]),
        ...lodash.flatten(options.map(opt => opt.aliases ? opt.aliases.map((a) => [a, opt]) : [])),
    ]);
    const pairs = Object.keys(parsedArgs)
        .map((k) => [k, mapped.get(k), parsedArgs[k]])
        .filter(([k, opt, value]) => opt && predicate(opt, value))
        .map(([k, opt, value]) => [opt ? opt.name : k, value]);
    return Object.assign({}, initial, lodash.fromPairs(pairs));
}
exports.filterCommandLineOptions = filterCommandLineOptions;
/**
 * Given an array of command metadata options and an object of parsed options,
 * return a subset of the parsed options whose command metadata option
 * definition contains the supplied group(s).
 *
 * Options which are unknown to the command metadata are always excluded.
 *
 * @param groups One or more option groups.
 */
function filterCommandLineOptionsByGroup(options, parsedArgs, groups) {
    return filterCommandLineOptions(options, parsedArgs, OptionFilters.includesGroups(groups));
}
exports.filterCommandLineOptionsByGroup = filterCommandLineOptionsByGroup;
/**
 * The opposite of `parseArgs()`. This function takes parsed args and converts
 * them back into an argv array of arguments and options.
 *
 * Based on dargs, by sindresorhus
 * @see https://github.com/sindresorhus/dargs/blob/master/license
 *
 * @param parsedArgs Inputs and options parsed by minimist.
 * @param options.useDoubleQuotes For options with values, wrap the value in
 *                                double quotes if it contains a space.
 * @param options.useEquals Instead of separating an option and its value with
 *                          a space, use an equals sign.
 * @param options.ignoreFalse Optionally ignore flags that equate to false.
 * @param options.allowCamelCase Optionally allow camel cased options instead
 *                               of converting to kebab case.
 * @param parseArgsOptions To provide more accuracy, specify the options that
 *                         were used to parse the args in the first place.
 */
function unparseArgs(parsedArgs, { useDoubleQuotes, useEquals = true, ignoreFalse = true, allowCamelCase } = {}, parseArgsOptions) {
    const args = [...parsedArgs['_'] || []];
    const separatedArgs = parsedArgs['--'];
    if (useDoubleQuotes) {
        useEquals = true;
    }
    const dashKey = (k) => (k.length === 1 ? '-' : '--') + k;
    const pushPairs = (...pairs) => {
        for (const [k, val] of pairs) {
            const key = dashKey(allowCamelCase ? k : k.replace(/[A-Z]/g, '-$&').toLowerCase());
            if (useEquals) {
                args.push(key + (val ? `=${useDoubleQuotes && val.includes(' ') ? `"${val}"` : val}` : ''));
            }
            else {
                args.push(key);
                if (val) {
                    args.push(val);
                }
            }
        }
    };
    // Normalize the alias definitions from the options for `parseArgs`.
    const aliasDef = parseArgsOptions && parseArgsOptions.alias
        ? lodash.mapValues(parseArgsOptions.alias, v => Array.isArray(v) ? v : [v])
        : {};
    // Construct a mapping of alias to original key name.
    const aliases = new Map(lodash.flatten(Object.keys(aliasDef).map(k => aliasDef[k].map((a) => [a, k]))));
    const isKnown = (key) => {
        if (!parseArgsOptions || !parseArgsOptions.unknown) {
            return true;
        }
        if ((typeof parseArgsOptions.string !== 'undefined' && (Array.isArray(parseArgsOptions.string) && parseArgsOptions.string.includes(key))) ||
            (typeof parseArgsOptions.boolean !== 'undefined' && (Array.isArray(parseArgsOptions.boolean) && parseArgsOptions.boolean.includes(key))) ||
            aliases.has(key)) {
            return true;
        }
        return parseArgsOptions.unknown(key);
    };
    // Convert the parsed args to an array of 2-tuples of shape [key, value].
    // Then, filter out pairs which match any of the following criteria:
    //  - `_` (positional argument list)
    //  - `--` (separated args)
    //  - Aliases whose original key is defined
    //  - Options not known to the schema, according to
    //    `parseArgsOptions.unknown` option.
    const pairedOptions = lodash.toPairs(parsedArgs).filter(([k]) => k !== '_' &&
        k !== '--' &&
        !(aliases.get(k) && typeof parsedArgs[k] !== 'undefined') &&
        isKnown(k));
    for (const [key, val] of pairedOptions) {
        if (val === true) {
            pushPairs([key, undefined]);
        }
        else if (val === false && !ignoreFalse) {
            pushPairs([`no-${key}`, undefined]);
        }
        else if (typeof val === 'string') {
            pushPairs([key, val]);
        }
        else if (typeof val === 'number' && !Number.isNaN(val)) {
            pushPairs([key, val.toString()]);
        }
        else if (Array.isArray(val)) {
            pushPairs(...val.map((v) => [key, v]));
        }
    }
    if (separatedArgs && separatedArgs.length > 0) {
        args.push('--', ...separatedArgs);
    }
    return args;
}
exports.unparseArgs = unparseArgs;
