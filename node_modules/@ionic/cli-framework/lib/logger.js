"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const lodash = require("lodash");
const stream_1 = require("stream");
const util = require("util");
const format_1 = require("../utils/format");
const string_1 = require("../utils/string");
const colors_1 = require("./colors");
exports.LOGGER_LEVELS = Object.freeze({
    DEBUG: 10,
    INFO: 20,
    WARN: 30,
    ERROR: 40,
});
exports.LOGGER_LEVEL_NAMES = new Map([
    [exports.LOGGER_LEVELS.DEBUG, 'DEBUG'],
    [exports.LOGGER_LEVELS.INFO, 'INFO'],
    [exports.LOGGER_LEVELS.WARN, 'WARN'],
    [exports.LOGGER_LEVELS.ERROR, 'ERROR'],
]);
function getLoggerLevelName(level) {
    if (level) {
        const levelName = exports.LOGGER_LEVEL_NAMES.get(level);
        if (levelName) {
            return levelName;
        }
    }
}
exports.getLoggerLevelName = getLoggerLevelName;
function getLoggerLevelColor(colors, level) {
    const levelName = getLoggerLevelName(level);
    if (levelName) {
        return colors.log[levelName];
    }
}
exports.getLoggerLevelColor = getLoggerLevelColor;
class StreamHandler {
    constructor({ stream, filter, formatter }) {
        this.stream = stream;
        this.filter = filter;
        this.formatter = formatter;
    }
    clone(opts) {
        const { stream, filter, formatter } = this;
        return new StreamHandler(Object.assign({ stream, filter, formatter }, opts));
    }
    handle(record) {
        if (this.filter && !this.filter(record)) {
            return;
        }
        const msg = this.formatter && record.format !== false ? this.formatter(record) : record.msg;
        this.stream.write(string_1.enforceLF(msg));
    }
}
exports.StreamHandler = StreamHandler;
const stdoutLogRecordFilter = (record) => !record.level || record.level === exports.LOGGER_LEVELS.INFO;
const stderrLogRecordFilter = (record) => !!record.level && record.level !== exports.LOGGER_LEVELS.INFO;
exports.DEFAULT_LOGGER_HANDLERS = new Set([
    new StreamHandler({ stream: process.stdout, filter: stdoutLogRecordFilter }),
    new StreamHandler({ stream: process.stderr, filter: stderrLogRecordFilter }),
]);
class Logger {
    constructor({ level = exports.LOGGER_LEVELS.INFO, handlers } = {}) {
        this.level = level;
        this.handlers = handlers ? handlers : Logger.cloneHandlers(exports.DEFAULT_LOGGER_HANDLERS);
    }
    static cloneHandlers(handlers) {
        return new Set([...handlers].map(handler => handler.clone()));
    }
    /**
     * Clone this logger, optionally overriding logger options.
     *
     * @param opts Logger options to override from this logger.
     */
    clone(opts = {}) {
        const { level, handlers } = this;
        return new Logger(Object.assign({ level, handlers: Logger.cloneHandlers(handlers) }, opts));
    }
    /**
     * Log a message as-is.
     *
     * @param msg The string to log.
     */
    msg(msg) {
        this.log(this.createRecord(msg));
    }
    /**
     * Log a message using the `debug` logger level.
     *
     * @param msg The string to log.
     */
    debug(msg) {
        this.log(this.createRecord(msg, exports.LOGGER_LEVELS.DEBUG));
    }
    /**
     * Log a message using the `info` logger level.
     *
     * @param msg The string to log.
     */
    info(msg) {
        this.log(this.createRecord(msg, exports.LOGGER_LEVELS.INFO));
    }
    /**
     * Log a message using the `warn` logger level.
     *
     * @param msg The string to log.
     */
    warn(msg) {
        this.log(this.createRecord(msg, exports.LOGGER_LEVELS.WARN));
    }
    /**
     * Log a message using the `error` logger level.
     *
     * @param msg The string to log.
     */
    error(msg) {
        this.log(this.createRecord(msg, exports.LOGGER_LEVELS.ERROR));
    }
    createRecord(msg, level, format) {
        return {
            // If the logger is used to quickly print something, let's pretty-print
            // it into a string.
            msg: util.format(msg),
            level,
            logger: this,
            format,
        };
    }
    /**
     * Log newlines using a logger output found via `level`.
     *
     * @param num The number of newlines to log.
     * @param level The logger level. If omitted, the default output is used.
     */
    nl(num = 1, level) {
        this.log(Object.assign({}, this.createRecord('\n'.repeat(num), level), { format: false }));
    }
    /**
     * Log a record using a logger output found via `level`.
     */
    log(record) {
        if (typeof record.level === 'number' && this.level > record.level) {
            return;
        }
        for (const handler of this.handlers) {
            handler.handle(record);
        }
    }
    createWriteStream(level, format) {
        const self = this;
        return new class extends stream_1.Writable {
            _write(chunk, encoding, callback) {
                self.log(self.createRecord(chunk.toString(), level, format));
                callback();
            }
        }();
    }
}
exports.Logger = Logger;
function createTaggedFormatter({ colors = colors_1.DEFAULT_COLORS, prefix = '', titleize, wrap } = {}) {
    return ({ msg, level, format }) => {
        if (format === false) {
            return msg;
        }
        const { strong, weak } = colors;
        const [firstLine, ...lines] = msg.split('\n');
        const levelName = getLoggerLevelName(level);
        const levelColor = getLoggerLevelColor(colors, level);
        const tag = ((typeof prefix === 'function' ? prefix() : prefix) +
            (levelName ? `${weak('[')}${chalk_1.default.bgBlack(strong(levelColor ? levelColor(levelName) : levelName))}${weak(']')}` : ''));
        const title = titleize && lines.length > 0 ? `${strong(levelColor ? levelColor(firstLine) : firstLine)}\n` : firstLine;
        const indentation = tag ? format_1.stringWidth(tag) + 1 : 0;
        const pulledLines = lodash.dropWhile(lines, l => l === '');
        return ((tag ? `${tag} ` : '') +
            (wrap
                ? format_1.wordWrap([title, ...pulledLines].join('\n'), Object.assign({ indentation }, (typeof wrap === 'object' ? wrap : {})))
                : [title, ...pulledLines.map(l => l ? ' '.repeat(indentation) + l : '')].join('\n')));
    };
}
exports.createTaggedFormatter = createTaggedFormatter;
function createPrefixedFormatter(prefix) {
    return ({ msg, format }) => {
        if (format === false) {
            return msg;
        }
        return `${typeof prefix === 'function' ? prefix() : prefix} ${msg}`;
    };
}
exports.createPrefixedFormatter = createPrefixedFormatter;
