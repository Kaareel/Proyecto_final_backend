const bcrypt = require('bcryptjs')
const db = require('../db')

const register = async (email, password, name) => {
    const query = "INSERT INTO usuario values (DEFAULT, $1,$2,$3)"
    const passwordEncriptada = bcrypt.hashSync(password)
    password = passwordEncriptada
    const values = [email, passwordEncriptada, name]
    await db.query(query, values)
}

module.exports = { register }