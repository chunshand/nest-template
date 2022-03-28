import { registerAs } from "@nestjs/config"
export default registerAs('db', () => ({
    type: 'mysql',
    host: process.env.DATABASE_HOST || "127.0.0.1",
    port: process.env.DATABASE_PORT || 3306,
    username: process.env.DATABASE_USER || 'dbname',
    password: process.env.DATABASE_PASS || 'dbname',
    database: process.env.DATABASE_BASE || 'dbname',
    // 重试连接数据库的次数（默认：10）
    retryAttempts: 10,
    // 两次重试连接的间隔(ms)（默认：3000）
    retryDelay: 3000,
    // 如果为true,将自动加载实体(默认：false)
    autoLoadEntities: true,
    // 如果为true，在应用程序关闭后连接不会关闭（默认：false)
    keepConnectionAlive: false,
    entities: [
        "dist/entities/*.entity{.ts,.js}",
        "module/**/entities/*.entity{.ts,.js}",
    ],
    // %%% 危险的一个操作 线上库禁止使用
    synchronize: true, 
    logging: true
}));