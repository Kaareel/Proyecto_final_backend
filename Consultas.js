const { Pool } = require('pg')
const pool = new Pool({
 host: 'localhost',
 user: 'postgres',
 password: 'postgres',
 database: 'proyecto_final',
 allowExitOnIdle: true
})