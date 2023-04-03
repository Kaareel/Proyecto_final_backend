const { Pool } = require('pg')

const credenciales = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  };

const pool = new Pool(credenciales);

module.exports = pool