const bcrypt = require('bcryptjs')
const db = require('../db')

const register = async (email, password, name) => {
    const query = "INSERT INTO usuario values (DEFAULT, $1,$2,$3)"
    const passwordEncriptada = bcrypt.hashSync(password)
    password = passwordEncriptada
    const values = [email, passwordEncriptada, name]
    await db.query(query, values)
}

const login = async (email, password) => {
    const values = [email]
    const consulta = "SELECT * FROM usuario WHERE email = $1"
    const { rows: [usuario], rowCount } = await db.query(consulta, values)
    const passwordEsCorrecta = bcrypt.compareSync(password, usuario.password)
    if (!passwordEsCorrecta || !rowCount)
        throw { code: 401, message: "Email o contraseña incorrecta" }
}

module.exports = { register, login }