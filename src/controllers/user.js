const jwt = require("jsonwebtoken")
const { register, login } = require('../services/user')

const secret = process.env.JWT_SECRET

async function signup(req, res) {
    try {
        const { email, password, name } = req.body
        if (!email || !password || !name) {
            return res.status(400).json({ message: "Datos no completados" })
        }

        await register(email, password, name)
        res.status(201).json({ message: 'Usuario registrado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Hubo un error inesperado' })
    }
}

async function userLogin(req, res) {
    try {
        const { email, password } = req.body
        if(!email || !password){
            return res.status(400).json({ message: "Datos no completados" })
        }
        await login(email, password)
        const token = jwt.sign({ email }, secret, { expiresIn: 60 })
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = { signup, userLogin }
