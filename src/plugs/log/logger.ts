import * as path from "path";
const baseLogPath = path.resolve(__dirname, "../../../logs"); // 日志根目录，视情况而定，这里将于项目同级

const log4jsConfig = {
    appenders: {
        console: {
            type: "console", // 控制台打印
        },
        access: {
            type: "dateFile", // 写入按日期分类文件
            filename: `${baseLogPath}/access/access.log`, // 日志名称，会加上pattern格式的日期
            alwaysIncludePattern: true,
            pattern: "yyyy-MM-dd",
            daysToKeep: 7, //保存天数
            numBackups: 3, // 日志文件
            category: "http", //category 类型
            keepFileExt: true, // 文件后缀
            compress: true, // 压缩
        },
        app: {
            type: "dateFile",
            filename: `${baseLogPath}/apps/app.log`,
            alwaysIncludePattern: true,
            layout: {
                type: "pattern",
                pattern:
                    '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
            },
            maxLogSize: 10485760,
            pattern: "yyyy-MM-dd",
            daysToKeep: 7,
            numBackups: 3,
            keepFileExt: true,
        },
        errorFile: {
            type: "dateFile",
            filename: `${baseLogPath}/errors/error.log`,
            alwaysIncludePattern: true,
            layout: {
                type: "pattern",
                pattern:
                    '{"date":"%d","level":"%p","category":"%c","host":"%h","pid":"%z","data":\'%m\'}',
            },
            pattern: "yyyy-MM-dd",
            daysToKeep: 7,
            numBackups: 3,
            keepFileExt: true,
        },
        errors: {
            type: "logLevelFilter",
            level: "ERROR",
            appender: "errorFile",
        },
    },
    categories: {
        default: {
            appenders: ["console", "app", "errors"],
            level: "DEBUG",
        },
        info: { appenders: ["console", "app", "errors"], level: "info" },
        access: { appenders: ["console", "app", "errors"], level: "info" },
        http: { appenders: ["access"], level: "DEBUG" },
    },
    pm2: true, // pm2时,此演示项目将通过云服务器Linux pm2部署
    pm2InstanceVar: "INSTANCE_ID", // 根据pm2 id分配
};

export default log4jsConfig;
