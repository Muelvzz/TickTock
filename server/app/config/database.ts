import { Pool } from "pg"

let pool: InstanceType<typeof Pool> | undefined

export function getDatabase() {
  if (!pool) {
    const connectionString =
      process.env.SUPABASE_DB_TEST ?? process.env.DATABASE_URL

    if (!connectionString) {
      throw new Error("Missing database connection string")
    }

    pool = new Pool({ connectionString })
  }

  return pool
}

export async function closeDatabase() {
  if (pool) {
    await pool.end()
    pool = undefined
  }
}