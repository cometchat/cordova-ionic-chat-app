export interface Schema {
    currentDirectory: string;
    info: {
        [key: string]: any;
    };
    options?: {
        [key: string]: any;
    };
    reason: string;
    target?: Target;
    workspaceRoot: string;
}
export interface Target {
    configuration?: string;
    project: string;
    target: string;
}
