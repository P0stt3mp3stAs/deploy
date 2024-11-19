import { Pool } from 'pg';

const pool = new Pool({
  user: 'elghali',
  host: 'localhost', // Update if the DB is hosted remotely
  database: 'wine_dine',
  password: 'Ment0s@Work',
  port: 5432, // Default PostgreSQL port
});

export async function query(text: string, params?: any[]) {
  const res = await pool.query(text, params);
  return res.rows;
}