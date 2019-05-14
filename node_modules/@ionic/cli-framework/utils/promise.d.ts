/// <reference types="node" />
import { EventEmitter } from 'events';
export interface Promisify {
    <T>(func: (callback: (err: any, result?: T) => void) => void): () => Promise<T>;
    <T, A1>(func: (arg1: A1, callback: (err: any, result?: T) => void) => void): (arg1: A1) => Promise<T>;
    <T, A1, A2>(func: (arg1: A1, arg2: A2, callback: (err: any, result?: T) => void) => void): (arg1: A1, arg2: A2) => Promise<T>;
    <T, A1, A2, A3>(func: (arg1: A1, arg2: A2, arg3: A3, callback: (err: any, result?: T) => void) => void): (arg1: A1, arg2: A2, arg3: A3) => Promise<T>;
    <T, A1, A2, A3, A4>(func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, callback: (err: any, result?: T) => void) => void): (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => Promise<T>;
    <T, A1, A2, A3, A4, A5>(func: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5, callback: (err: any, result?: T) => void) => void): (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => Promise<T>;
}
export declare const promisify: Promisify;
export declare const promisifyEvent: (emitter: EventEmitter, event: string | symbol) => Promise<any>;
export declare namespace PromiseUtil {
    function some(promises: Promise<any>[], expected?: number): Promise<any[]>;
    function any(promises: Promise<any>[]): Promise<any>;
}
