"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const events_1 = require("events");
const lodash = require("lodash");
const errors_1 = require("../errors");
const guards_1 = require("../guards");
const colors_1 = require("./colors");
const help_1 = require("./help");
const options_1 = require("./options");
exports.EXECUTOR_OPS = Object.freeze({
    RPC: '📡',
});
class AbstractExecutor extends events_1.EventEmitter {
}
exports.AbstractExecutor = AbstractExecutor;
class BaseExecutor extends AbstractExecutor {
    constructor({ namespace, stdout, stderr, colors }) {
        super();
        this.namespace = namespace;
        this.colors = colors ? colors : colors_1.DEFAULT_COLORS;
        this.stdout = stdout ? stdout : process.stdout;
        this.stderr = stderr ? stderr : process.stderr;
    }
    /**
     * Locate and execute a command given an array of positional command
     * arguments (argv) and a set of environment variables.
     *
     * If a command is not found, formatted help is automatically output for the
     * right-most namespace found.
     *
     * @param argv Command arguments sliced to the root for the namespace of this
     *             executor. Usually, this means `process.argv.slice(2)`.
     * @param env Environment variables for this execution.
     */
    execute(argv, env) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (argv[0] === exports.EXECUTOR_OPS.RPC) {
                return this.rpc();
            }
            const parsedArgs = options_1.stripOptions(argv, { includeSeparated: false });
            const location = yield this.namespace.locate(parsedArgs);
            if (argv.find(arg => arg === '--help' || arg === '-?') || guards_1.isNamespace(location.obj)) {
                const cmdoptions = options_1.parseArgs([...argv]);
                this.stdout.write(yield this.formatHelp(location, { format: cmdoptions['json'] ? 'json' : 'terminal' }));
            }
            else {
                const cmd = location.obj;
                const cmdargs = lodash.drop(argv, location.path.length - 1);
                try {
                    yield this.run(cmd, cmdargs, { location, env, executor: this });
                }
                catch (e) {
                    if (e instanceof errors_1.BaseError) {
                        this.stderr.write(`Error: ${e.message}`);
                        process.exitCode = typeof e.exitCode === 'undefined' ? 1 : e.exitCode;
                        return;
                    }
                    throw e;
                }
            }
        });
    }
    run(command, cmdargs, runinfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { input } = this.colors;
            const metadata = yield command.getMetadata();
            const cmdoptions = options_1.parseArgs([...cmdargs], options_1.metadataOptionsToParseArgsOptions(metadata.options ? metadata.options : []));
            const cmdinputs = cmdoptions._;
            try {
                yield command.validate(cmdinputs);
            }
            catch (e) {
                if (e instanceof errors_1.InputValidationError) {
                    for (const err of e.errors) {
                        this.stderr.write(`${err.message}\n`);
                    }
                    this.stderr.write(`Use the ${input('--help')} flag for more details.\n`);
                }
                throw e;
            }
            yield command.run(cmdinputs, cmdoptions, runinfo);
        });
    }
    formatHelp(location, { format = 'terminal' } = {}) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let formatter;
            if (guards_1.isCommand(location.obj)) {
                const options = { location, command: location.obj };
                formatter = format === 'json' ? new help_1.CommandSchemaHelpFormatter(options) : new help_1.CommandStringHelpFormatter(options);
            }
            else {
                const options = { location, namespace: location.obj };
                formatter = format === 'json' ? new help_1.NamespaceSchemaHelpFormatter(options) : new help_1.NamespaceStringHelpFormatter(options);
            }
            return formatter.format();
        });
    }
    /**
     * Initiate RPC operation.
     *
     * This means the CLI has been executed by a parent Node process with an IPC
     * channel, allowing request/response communication via RPC.
     */
    rpc() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { RPCProcess } = yield Promise.resolve().then(() => require('../utils/ipc'));
            const metadata = yield this.namespace.getMetadata();
            const rpc = new RPCProcess({ name: metadata.name });
            rpc.register('help', ([cmdpath]) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const location = yield this.namespace.locate(cmdpath);
                const formatter = guards_1.isCommand(location.obj)
                    ? new help_1.CommandSchemaHelpFormatter({ location, command: location.obj })
                    : new help_1.NamespaceSchemaHelpFormatter({ location, namespace: location.obj });
                return formatter.serialize();
            }));
            this.emit('operation-rpc', rpc);
            rpc.start(process);
        });
    }
}
exports.BaseExecutor = BaseExecutor;
class Executor extends BaseExecutor {
}
exports.Executor = Executor;
function execute(_a) {
    var { namespace, argv, env } = _a, rest = tslib_1.__rest(_a, ["namespace", "argv", "env"]);
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const executor = new BaseExecutor(Object.assign({ namespace }, rest));
        yield executor.execute(argv, env);
    });
}
exports.execute = execute;
