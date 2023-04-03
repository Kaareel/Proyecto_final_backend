require('dotenv').config({ path: './.env' });

const express = require(`express`);
const { signup, login } = require('./controllers/user');
const cors = require('cors');
const {
  obtenerProducto,
  obtenerTodosProductos,
  nuevoProducto,
  eliminarProducto,
} = require('./controllers/product');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.post('/signup', signup);
app.post('/login', login);
app.get('/producto', obtenerTodosProductos);
app.get('/producto/:id', obtenerProducto);
app.post('/producto', nuevoProducto);
app.delete('/producto/:id', eliminarProducto);

app.listen(4000, console.log(`Server ON`));

module.exports = app;
