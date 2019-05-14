/// <reference types="node" />
import { ChildProcess } from 'child_process';
export interface RPCRequest<P extends string, A extends any[]> {
    type: 'rpc-request';
    id: string;
    procedure: P;
    args: A;
}
export interface RPCResponse<R extends RPCRequest<any, any>, D extends object> {
    type: 'rpc-response';
    id: string;
    procedure: R['procedure'];
    request: R;
    err?: any;
    data: D;
}
export declare type RPC<P extends string, A extends any[], D extends object> = RPCResponse<RPCRequest<P, A>, D>;
export interface RPCProcessOptions {
    readonly name?: string;
    readonly timeout?: number;
}
export declare class RPCProcess {
    readonly name: string;
    readonly timeout: number;
    protected responseProcedures: Map<string, (args: any[]) => Promise<any>>;
    protected proc?: ChildProcess;
    constructor({ name, timeout }?: RPCProcessOptions);
    start(proc: ChildProcess | NodeJS.Process): void;
    register<R extends RPCResponse<any, object>>(procedure: R['procedure'], fn: (args: R['request']['args']) => Promise<R['data']>): void;
    call<R extends RPCResponse<any, object>>(procedure: R['procedure'], args: R['request']['args']): Promise<R['data']>;
    end(): void;
}
export declare class RPCHost {
    readonly modulePath: string;
    readonly args: ReadonlyArray<string>;
    protected rpc: RPCProcess;
    constructor(modulePath: string, args: ReadonlyArray<string>);
    start(): void;
    register<R extends RPCResponse<any, object>>(procedure: R['procedure'], fn: (args: R['request']['args']) => Promise<R['data']>): void;
    call<R extends RPCResponse<any, object>>(procedure: R['procedure'], args: R['request']['args']): Promise<R['data']>;
    end(): void;
}
