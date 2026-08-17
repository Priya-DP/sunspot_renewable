import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://neondb_owner:npg_aZDCO8oPL1vt@ep-silent-leaf-ay9x4u72-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });
export { schema };
