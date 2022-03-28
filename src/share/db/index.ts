import { TypeOrmModule } from '@nestjs/typeorm';
import ConfigModule from "src/config"
import { ConfigService } from "@nestjs/config"
export default TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (config: ConfigService) => {
        return config.get('db');
    },
    inject: [ConfigService],
});