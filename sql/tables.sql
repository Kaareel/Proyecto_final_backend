CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(255),
  email  VARCHAR(200) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(50) NOT NULL,
  img VARCHAR(200),
  descripcion TEXT,  
  price INTEGER NOT NULL,
  autor INTEGER NOT NULL,
  FOREIGN KEY (autor) REFERENCES usuarios(id)
);

CREATE TABLE favoritos (
  id SERIAL PRIMARY KEY,
  productos_id INTEGER NOT NULL,
  usuarios_id INTEGER NOT NULL,
  FOREIGN KEY (productos_id) REFERENCES Productos(id),
  FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
);