import { Pool } from "pg";
import { 
    DATABASE_HOST, 
    DATABASE_NAME, 
    DATABASE_PASSWORD, 
    DATABASE_PORT, 
    DATABASE_USER 
} from ".";

let DATABASE_URL = `postgres://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

export const pool = new Pool({
    // connectionString: DATABASE_URL,
    host: DATABASE_HOST,
    port: 5432,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME
})

pool.on("error", (error) => {
    console.error(error);
    process.exit(1);
})

module.exports = {
    query:  (text: any, params: any) => pool.query(text, params)
}

// export function query(text: string) {
//     return new Promise((resolve, reject) => {
//         pool
//             .query(text)
//             .then((res) => {
//                 resolve(res);
//             })
//             .catch((err) => {
//                 reject(err);
//             })
//     })
// }