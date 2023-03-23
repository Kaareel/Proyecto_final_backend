const { Pool } = require('pg')

const credenciales = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    allowExitOnIdle: true,
};

const pool = new Pool(credenciales);

module.exports = pool