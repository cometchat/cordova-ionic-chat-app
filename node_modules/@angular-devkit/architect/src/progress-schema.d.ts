export interface Schema {
    builder: {
        [key: string]: any;
    };
    current?: number;
    error?: any;
    state: State;
    status?: string;
    total?: number;
}
export declare enum State {
    Error = "error",
    Running = "running",
    Stopped = "stopped",
    Waiting = "waiting"
}
