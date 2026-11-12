const { Pool } = require('pg');
require('dotenv').config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing. Copy backend/.env.example to .env and edit it.');
}

// A Pool reuses a limited number of database connections across HTTP requests.
const pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });
module.exports = { pool };
