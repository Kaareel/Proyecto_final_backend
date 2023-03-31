const bcrypt = require("bcryptjs");
const db = require("../db");

const register = async (email, password, name) => {
  const query =
    "INSERT INTO usuarios values (DEFAULT, $1,$2,$3) RETURNING id, nombre, email";
  const passwordEncriptada = bcrypt.hashSync(password);
  const values = [name, email, passwordEncriptada];
  const { rows } = await db.query(query, values);
  const [user] = rows;

  return user;
};

const authentication = async (email, password) => {
  const values = [email];
  const consulta = "SELECT * FROM usuarios WHERE email = $1";
  const {
    rows: [usuario],
    rowCount,
  } = await db.query(consulta, values);

  console.log(usuario)

  const passwordEsCorrecta = bcrypt.compareSync(password, usuario.password);

  if (!passwordEsCorrecta || !rowCount) {
    throw { code: 401, message: "Email o contraseña incorrecta" };
  }
  
  return usuario;
};

module.exports = { register, authentication };