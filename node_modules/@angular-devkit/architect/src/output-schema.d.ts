export interface Schema {
    builderName?: string;
    error?: string;
    success: boolean;
    target?: Target;
}
export interface Target {
    configuration?: string;
    project: string;
    target: string;
}
