/// <reference types="node" />
import * as ζinquirer from 'inquirer';
import * as ζlogUpdate from 'log-update';
import { Colors } from './colors';
import { TaskChain } from './tasks';
export interface OutputStrategy {
    readonly stream: NodeJS.WritableStream;
    createTaskChain(): TaskChain;
}
export interface RedrawLine {
    redrawLine(msg?: string): void;
}
export interface StreamOutputStrategyOptions {
    readonly stream: NodeJS.WritableStream;
    readonly colors?: Colors;
}
export declare class StreamOutputStrategy implements OutputStrategy {
    readonly stream: NodeJS.WritableStream;
    protected readonly colors: Colors;
    constructor({ stream, colors }: StreamOutputStrategyOptions);
    createTaskChain(): TaskChain;
}
export interface LogUpdateOutputStrategyOptions {
    readonly LogUpdate: typeof ζlogUpdate;
    readonly stream?: NodeJS.WritableStream;
    readonly colors?: Colors;
}
export declare class LogUpdateOutputStrategy implements OutputStrategy, RedrawLine {
    readonly stream: NodeJS.WritableStream;
    protected readonly colors: Colors;
    protected readonly logUpdate: typeof ζlogUpdate;
    constructor({ LogUpdate, stream, colors }: LogUpdateOutputStrategyOptions);
    redrawLine(msg?: string): void;
    createTaskChain(): TaskChain;
}
export interface BottomBarOutputStrategyOptions {
    readonly BottomBar: typeof ζinquirer.ui.BottomBar;
    readonly input?: NodeJS.ReadableStream;
    readonly output?: NodeJS.WritableStream;
    readonly colors?: Colors;
}
export declare class BottomBarOutputStrategy implements OutputStrategy, RedrawLine {
    protected bottomBar?: ζinquirer.ui.BottomBar;
    protected readonly BottomBar: typeof ζinquirer.ui.BottomBar;
    protected readonly rawinput: NodeJS.ReadableStream;
    protected readonly rawoutput: NodeJS.WritableStream;
    protected readonly colors: Colors;
    constructor({ BottomBar, input, output, colors }: BottomBarOutputStrategyOptions);
    readonly stream: NodeJS.WritableStream;
    redrawLine(msg?: string): void;
    get(): typeof ζinquirer.ui.BottomBar;
    open(): void;
    close(): void;
    createTaskChain(): TaskChain;
}
