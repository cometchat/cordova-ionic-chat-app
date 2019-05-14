import * as minimist from 'minimist';
import { CommandLineOptions, CommandMetadataOption, HydratedCommandMetadataOption, HydratedParseArgsOptions, ParsedArg } from '../definitions';
import { Colors } from './colors';
export declare const parseArgs: typeof minimist;
export { ParsedArgs } from 'minimist';
/**
 * Remove options, which are any arguments that starts with a hyphen (-), from
 * a list of process args and return the result.
 *
 * If a double-hyphen separator (--) is encountered, it and the remaining
 * arguments are included in the result, as they are not interpreted. This
 * behavior can be disabled by setting the `includeSeparated` option to
 * `false`.
 */
export declare function stripOptions(pargv: ReadonlyArray<string>, { includeSeparated }: {
    includeSeparated?: boolean;
}): string[];
/**
 * Split a list of process args into own-arguments and other-arguments, which
 * are separated by the double-hyphen (--) separator.
 *
 * For example, `['cmd', 'arg1', '--', 'arg2']` will be split into
 * `['cmd', 'arg1']` and `['arg2']`.
 */
export declare function separateArgv(pargv: ReadonlyArray<string>): [string[], string[]];
/**
 * Takes a Minimist command option and normalizes its values.
 */
export declare function hydrateCommandMetadataOption<O extends CommandMetadataOption>(option: O): HydratedCommandMetadataOption<O>;
export interface HydratedOptionSpec {
    readonly value: string;
}
export declare function hydrateOptionSpec<O extends CommandMetadataOption>(opt: O): HydratedOptionSpec;
export interface FormatOptionNameOptions {
    readonly showAliases?: boolean;
    readonly showValueSpec?: boolean;
    readonly colors?: Colors;
}
export declare function formatOptionName<O extends CommandMetadataOption>(opt: O, { showAliases, showValueSpec, colors }?: FormatOptionNameOptions): string;
export declare function metadataOptionsToParseArgsOptions(commandOptions: ReadonlyArray<CommandMetadataOption>): HydratedParseArgsOptions;
export declare type OptionPredicate<O extends CommandMetadataOption> = (option: O, value?: ParsedArg) => boolean;
export declare namespace OptionFilters {
    function includesGroups<O extends CommandMetadataOption>(groups: string | string[]): OptionPredicate<O>;
    function excludesGroups<O extends CommandMetadataOption>(groups: string | string[]): OptionPredicate<O>;
}
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
export declare function filterCommandLineOptions<O extends CommandMetadataOption>(options: ReadonlyArray<O>, parsedArgs: CommandLineOptions, predicate?: OptionPredicate<O>): CommandLineOptions;
/**
 * Given an array of command metadata options and an object of parsed options,
 * return a subset of the parsed options whose command metadata option
 * definition contains the supplied group(s).
 *
 * Options which are unknown to the command metadata are always excluded.
 *
 * @param groups One or more option groups.
 */
export declare function filterCommandLineOptionsByGroup<O extends CommandMetadataOption>(options: ReadonlyArray<O>, parsedArgs: CommandLineOptions, groups: string | string[]): CommandLineOptions;
export interface UnparseArgsOptions {
    useDoubleQuotes?: boolean;
    useEquals?: boolean;
    ignoreFalse?: boolean;
    allowCamelCase?: boolean;
}
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
export declare function unparseArgs(parsedArgs: minimist.ParsedArgs, { useDoubleQuotes, useEquals, ignoreFalse, allowCamelCase }?: UnparseArgsOptions, parseArgsOptions?: minimist.Opts): string[];
