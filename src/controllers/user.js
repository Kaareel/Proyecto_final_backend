const jwt = require("jsonwebtoken");
const { register, authentication } = require("../services/user");

const secret = process.env.JWT_SECRET;

async function signup(req, res) {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({ message: "Datos no completados" });
    }

    const user = await register(email, password, name);

    res.status(201).json({ user });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "No se pudo registrar al usuario" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Datos incompletos" });
    }

   const usuario = await authentication(email, password );
    const token = jwt.sign({ id: usuario.id }, secret, { expiresIn: "1h" });

    res.status(200).json({ token, usuario });
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "No se pudo iniciar sesion." });
  }
}

module.exports = { signup, login };