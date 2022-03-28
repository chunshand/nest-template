import * as Path from 'path';
import * as Log4js from 'log4js';
import * as Util from 'util';
import { format } from 'src/utils/moment';
import * as StackTrace from 'stacktrace-js';
import Chalk from 'chalk';
import log4jsConfig from './logger';

export enum LoggerLevel {
    ALL = 'ALL',
    MARK = 'MARK',
    TRACE = 'TRACE',
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR',
    FATAL = 'FATAL',
    OFF = 'OFF',
}

export class ContextTrace {
    constructor(
        public readonly context: string,
        public readonly path?: string,
        public readonly lineNumber?: number,
        public readonly columnNumber?: number,
    ) { }
}

Log4js.addLayout('Awesome-nest', (logConfig: any) => {
    return (logEvent: Log4js.LoggingEvent): string => {
        let moduleName = '';
        let position = '';

        // 日志组装
        const messageList: string[] = [];
        logEvent.data.forEach((value: any) => {
            if (value instanceof ContextTrace) {
                moduleName = value.context;
                // 显示触发日志的坐标（行，列）
                if (value.lineNumber && value.columnNumber) {
                    position = `${value.lineNumber}, ${value.columnNumber}`;
                }
                return;
            }

            if (typeof value !== 'string') {
                value = Util.inspect(value, false, 3, true);
            }

            messageList.push(value);
        });

        // 日志组成部分
        const messageOutput: string = messageList.join(' ');
        const positionOutput: string = position ? ` [${position}]` : '';
        const typeOutput = `[${logConfig.type}] ${logEvent.pid.toString()}   - `;
        const dateOutput = `${format(
            logEvent.startTime,
            'YYYY-MM-D:HH:mm:ss',
            false,
        )}`;
        const moduleOutput: string = moduleName
            ? `[${moduleName}] `
            : '[LoggerService] ';
        let levelOutput = `[${logEvent.level}] ${messageOutput}`;

        // 根据日志级别，用不同颜色区分
        switch (logEvent.level.toString()) {
            case LoggerLevel.DEBUG:
                levelOutput = Chalk.green(levelOutput);
                break;
            case LoggerLevel.INFO:
                levelOutput = Chalk.cyan(levelOutput);
                break;
            case LoggerLevel.WARN:
                levelOutput = Chalk.yellow(levelOutput);
                break;
            case LoggerLevel.ERROR:
                levelOutput = Chalk.red(levelOutput);
                break;
            case LoggerLevel.FATAL:
                levelOutput = Chalk.hex('#DD4C35')(levelOutput);
                break;
            default:
                levelOutput = Chalk.grey(levelOutput);
                break;
        }

        return `${Chalk.green(typeOutput)}${dateOutput}  ${Chalk.yellow(
            moduleOutput,
        )}${levelOutput}${positionOutput}`;
    };
});

// 注入配置
Log4js.configure(log4jsConfig);

// 实例化
const logger = Log4js.getLogger();
// logger.level = LoggerLevel.TRACE;
import { LoggerService } from '@nestjs/common';
export class Logger implements LoggerService {
    /**
   * Write a 'log' level log.
   */
    log(message: any, ...optionalParams: any[]) {
        logger.info(message, optionalParams);
    }
    /**
     * Write an 'error' level log.
     */
    error(message: any, ...optionalParams: any[]) {
        logger.error(message, ...optionalParams);

    }
    /**
     * Write a 'warn' level log.
     */
    warn(message: any, ...optionalParams: any[]) {
        logger.warn(message, ...optionalParams);
    }

    /**
     * Write a 'debug' level log.
     */
    debug?(message: any, ...optionalParams: any[]) {
        logger.debug(message, ...optionalParams);
    }
    /**
     * Write a 'verbose' level log.
     */
    verbose?(message: any, ...optionalParams: any[]) {
        logger.info(message, ...optionalParams);
    }
}

export function useLogger(app: any) {
    app.use(Logger);
}