import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as path from 'path';
import * as dotenv from 'dotenv';


const glob = require("glob")
const env = process.env.NODE_ENV || 'dev'; 
const dotenv_path = path.resolve(process.cwd(),`env\\.${env}.env`);

const result = dotenv.config({ path: dotenv_path });
if (result.error) { throw Error("File not found "); }

let entities_pattern;

switch(process.env.NODE_ENV){
    case 'dev':
        entities_pattern = glob.sync(path.normalize(path.resolve('./dist/**/') + '/*.entity.js'));
        break;
    case 'test':
        entities_pattern = ["src/**/*.entity{.ts,.js}"];
        break;
    default:
        throw Error("Specify the environment please");
        break;
}

export const DatabaseConfig: TypeOrmModuleOptions = {
    name: 'default',
    type: 'mysql' as any,
    database: process.env.TYPEORM_DATABASE || 'mouhsine_test',
    port: parseInt(process.env.TYPEORM_PORT) || 3306,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    host: process.env.TYPEORM_HOST,
    synchronize: (process.env.TYPEORM_SYNCHRONIZE === 'true'),
    entities: entities_pattern,
    cli: { "migrationsDir": "src/migrationsw" },
    //logging: 'all',
    keepConnectionAlive: true,
    autoLoadEntities: true,
}