export interface Schema {
    currentDirectory: string;
    target?: Target;
    workspaceRoot: string;
}
export interface Target {
    configuration?: string;
    project: string;
    target: string;
}
