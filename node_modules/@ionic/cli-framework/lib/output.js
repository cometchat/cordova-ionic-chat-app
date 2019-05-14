"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Debug = require("debug");
const colors_1 = require("./colors");
const tasks_1 = require("./tasks");
const debug = Debug('ionic:cli-framework:lib:output');
class StreamOutputStrategy {
    constructor({ stream = process.stdout, colors = colors_1.DEFAULT_COLORS }) {
        this.stream = stream;
        this.colors = colors;
    }
    createTaskChain() {
        const { failure, success } = this.colors;
        const chain = new tasks_1.TaskChain();
        chain.on('next', task => {
            task.on('success', () => {
                this.stream.write(`${success(tasks_1.ICON_SUCCESS)} ${task.msg} - done!`);
            });
            task.on('failure', () => {
                this.stream.write(`${failure(tasks_1.ICON_FAILURE)} ${task.msg} - failed!`);
            });
        });
        return chain;
    }
}
exports.StreamOutputStrategy = StreamOutputStrategy;
class LogUpdateOutputStrategy {
    constructor({ LogUpdate, stream = process.stdout, colors = colors_1.DEFAULT_COLORS }) {
        this.stream = stream;
        this.colors = colors;
        this.logUpdate = LogUpdate.create(stream);
    }
    redrawLine(msg = '') {
        this.logUpdate(msg);
    }
    createTaskChain() {
        const { failure, strong, success } = this.colors;
        const chain = new tasks_1.TaskChain({ taskOptions: { tickInterval: 50 } });
        chain.on('next', task => {
            task.on('success', () => {
                this.stream.write(`${success(tasks_1.ICON_SUCCESS)} ${task.msg} - done!\n`);
            });
            task.on('failure', () => {
                this.stream.write(`${failure(tasks_1.ICON_FAILURE)} ${task.msg} - failed!\n`);
            });
            const spinner = new tasks_1.Spinner();
            task.on('tick', () => {
                const progress = task.progressRatio ? (task.progressRatio * 100).toFixed(2) : '';
                const frame = spinner.frame();
                this.redrawLine(`${strong(frame)} ${task.msg}${progress ? ' (' + strong(String(progress) + '%') + ')' : ''} `);
            });
            task.on('clear', () => {
                this.logUpdate.clear();
            });
        });
        chain.on('end', () => {
            this.logUpdate.done();
        });
        return chain;
    }
}
exports.LogUpdateOutputStrategy = LogUpdateOutputStrategy;
class BottomBarOutputStrategy {
    constructor({ BottomBar, input = process.stdin, output = process.stdout, colors = colors_1.DEFAULT_COLORS }) {
        this.BottomBar = BottomBar;
        this.rawinput = input;
        this.rawoutput = output;
        this.colors = colors;
    }
    get stream() {
        const bottomBar = this.get();
        return bottomBar.log;
    }
    redrawLine(msg = '') {
        const bottomBar = this.get();
        bottomBar.updateBottomBar(msg);
    }
    get() {
        if (!this.bottomBar) {
            this.bottomBar = new this.BottomBar({ input: this.rawinput, output: this.rawoutput });
            try {
                // the mute() call appears to be necessary, otherwise when answering
                // inquirer prompts upon pressing enter, a copy of the prompt is
                // printed to the screen and looks gross
                this.bottomBar.rl.output.mute();
            }
            catch (e) {
                debug('Error while muting bottomBar output: %o', e);
            }
        }
        return this.bottomBar;
    }
    open() {
        this.get();
    }
    close() {
        if (this.bottomBar) {
            // instantiating inquirer.ui.BottomBar hangs, so when close() is called,
            // close BottomBar streams
            this.bottomBar.close();
            this.bottomBar = undefined;
        }
    }
    createTaskChain() {
        const { failure, strong, success } = this.colors;
        const chain = new tasks_1.TaskChain({ taskOptions: { tickInterval: 50 } });
        this.open();
        chain.on('next', task => {
            this.open();
            task.on('success', () => {
                this.stream.write(`${success(tasks_1.ICON_SUCCESS)} ${task.msg} - done!`);
            });
            task.on('failure', () => {
                this.stream.write(`${failure(tasks_1.ICON_FAILURE)} ${task.msg} - failed!`);
            });
            const spinner = new tasks_1.Spinner();
            task.on('tick', () => {
                const progress = task.progressRatio ? (task.progressRatio * 100).toFixed(2) : '';
                const frame = spinner.frame();
                this.redrawLine(`${strong(frame)} ${task.msg}${progress ? ' (' + strong(String(progress) + '%') + ')' : ''} `);
            });
            task.on('clear', () => {
                this.redrawLine('');
            });
        });
        chain.on('end', () => {
            this.close();
        });
        return chain;
    }
}
exports.BottomBarOutputStrategy = BottomBarOutputStrategy;
