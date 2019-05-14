import * as ζinquirer from 'inquirer';
export interface PromptQuestionBase extends ζinquirer.Question {
    /**
     * The prompt type for this question.
     *    - 'confirm': Y/n
     *    - 'checkbox': Multi-value selection.
     *    - 'input': Text input.
     *    - 'password': Masked text input.
     *    - 'list': Single-value selection.
     */
    type: PromptType;
    /**
     * The question to print.
     */
    message: string;
    /**
     * The fallback value to use in non-TTY mode.
     */
    fallback?: PromptValue;
    /**
     * Default value to use if nothing is entered.
     */
    default?: PromptValue;
}
export declare type PromptTypeConfirm = 'confirm';
export declare type PromptTypeCheckbox = 'checkbox';
export declare type PromptTypeOther = 'input' | 'password' | 'list';
export declare type PromptType = PromptTypeConfirm | PromptTypeCheckbox | PromptTypeOther;
export declare type PromptValueConfirm = boolean;
export declare type PromptValueCheckbox = string[];
export declare type PromptValueOther = string;
export declare type PromptValue = PromptValueConfirm | PromptValueCheckbox | PromptValueOther;
export interface PromptQuestionConfirm extends PromptQuestionBase {
    type: PromptTypeConfirm;
    fallback?: PromptValueConfirm;
    default?: PromptValueConfirm;
}
export interface PromptQuestionCheckbox extends PromptQuestionBase {
    type: PromptTypeCheckbox;
    fallback?: PromptValueCheckbox;
    default?: PromptValueCheckbox;
}
export interface PromptQuestionOther extends PromptQuestionBase {
    type: PromptTypeOther;
    fallback?: PromptValueOther;
    default?: PromptValueOther;
}
export declare type PromptQuestion = PromptQuestionConfirm | PromptQuestionCheckbox | PromptQuestionOther;
export interface PromptModule {
    readonly _inquirer: ζinquirer.Inquirer;
    (question: PromptQuestionConfirm): Promise<PromptValueConfirm>;
    (question: PromptQuestionCheckbox): Promise<PromptValueCheckbox>;
    (question: PromptQuestionOther): Promise<PromptValueOther>;
}
export interface CreatePromptModuleOptions {
    readonly interactive?: boolean;
    readonly onFallback?: (question: PromptQuestion) => PromptValue | void;
}
/**
 * Create a reusable CLI prompt module.
 *
 * A prompt module is a function that generates prompts. A prompt opens an
 * interactive session with the user to gather input. When a prompt is
 * resolved, the user has finished providing input.
 *
 * If non-TTY mode is detected, a system of fallbacks goes into effect:
 *      1. If the question provided 'fallback', the fallback value is resolved.
 *      2. If the prompt module has 'onFallback', it is used to generate a
 *         fallback for the question.
 *      3. If the question provided 'default', the default value is resolved.
 *      4. Finally, a falsy value suitable for the question type is resolved.
 *
 * @param options.interactive Force non-TTY mode by providing 'false'. TTY mode
 *                            cannot be forced if non-TTY mode is detected.
 * @param options.onFallback Generate a non-TTY fallback for a question without
 *                           a 'fallback'.
 */
export declare function createPromptModule({ interactive, onFallback }?: CreatePromptModuleOptions): Promise<PromptModule>;
export declare function createPromptChoiceSeparator(): ζinquirer.objects.Separator;
