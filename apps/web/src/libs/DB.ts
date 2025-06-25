import type { NodePgDatabase } from 'drizzle-orm/node-postgres';
import path from 'node:path';
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import * as schema from '@/models/Schema';
import { Env } from './Env';

// Stores the db connection in the global scope to prevent multiple instances due to hot reloading with Next.js
const globalForDb = globalThis as unknown as {
  drizzle: NodePgDatabase<typeof schema>;
};

// Need a database for production? Check out https://www.prisma.io/?via=nextjsboilerplate
// Tested and compatible with Next.js Boilerplate
const createDbConnection = () => {
  const databaseUrl = Env.DATABASE_URL || 'postgresql://localhost:5432/web';
  
  return drizzle({
    connection: {
      connectionString: databaseUrl,
      ssl: !databaseUrl.includes('localhost') && !databaseUrl.includes('127.0.0.1'),
    },
    schema,
  });
};

const db = globalForDb.drizzle || createDbConnection();

// Only store in global during development to prevent hot reload issues
if (Env.NODE_ENV !== 'production') {
  globalForDb.drizzle = db;
}

// Only run migrations if DATABASE_URL is provided
if (Env.DATABASE_URL) {
  await migrate(db, {
    migrationsFolder: path.join(process.cwd(), 'migrations'),
  });
}

export { db };
