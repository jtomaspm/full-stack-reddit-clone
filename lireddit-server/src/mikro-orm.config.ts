import { Post } from "./entities/Post";
import { User } from "./entities/User";
import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d\.[tj]s$/,
    },
    entities: [User, Post],
    dbName: 'lireddit',
    type: 'postgresql',
    user: 'postgres',
    password: 'postgres',
    debug: !__prod__,
    allowGlobalContext: true,
} as Parameters<typeof MikroORM.init>[0];
