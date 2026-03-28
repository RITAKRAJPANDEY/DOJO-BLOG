// import {Pool} from 'pg';
// export const pool = new Pool({
//     user:process.env.DB_USER,
//     host:process.env.DB_HOST,
//     database:process.env.DB_DATABASE,
//     password:process.env.DB_PASSWORD,
// });

import { Pool } from '@neondatabase/serverless';

// Notice we added 'export' right here
export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL 
});