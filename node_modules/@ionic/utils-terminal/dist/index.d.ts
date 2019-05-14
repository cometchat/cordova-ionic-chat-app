/**
 * These environment variables work for: Travis CI, CircleCI, Gitlab CI,
 * AppVeyor, CodeShip, Jenkins, TeamCity, Bitbucket Pipelines, AWS CodeBuild
 */
export declare const CI_ENVIRONMENT_VARIABLES: ReadonlyArray<string>;
export declare const CI_ENVIRONMENT_VARIABLES_DETECTED: string[];
export interface TerminalInfo {
    /**
     * Whether the terminal is an interactive TTY or not.
     */
    readonly tty: boolean;
    /**
     * Whether this is in CI or not.
     */
    readonly ci: boolean;
    /**
     * Whether this is a Windows shell or not.
     */
    readonly windows: boolean;
}
export declare const TERMINAL_INFO: TerminalInfo;
