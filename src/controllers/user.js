const { register } = require('../services/user')

async function signup(req, res) {
    try {
        const { email, password, name } = req.body
        await register(email, password, name)

        res.send("Usuario creado con éxito")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { signup }
