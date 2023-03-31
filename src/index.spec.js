const server = require("./index");
const request = require("supertest");

describe("Test marketplace", () => {
  it("Register: Deberia dar error si no se envian datos", async () => {
    const { statusCode } = await request(server).post("/signup").send();
    expect(statusCode).toBe(400);
  });

  it("Register: deberia registrarse", async () => {
    const payload = {
      email: "hola@hola.com",
      password: "1234",
      name: "hola",
    };

    const { statusCode } = await request(server).post("/signup").send(payload);

    expect(statusCode).toBe(201);
  });

  it("Login: Deberia logearse retornando un token", async () => {
    const payload = {
      email: "hola@hola.com",
      password: "1234",
    };
    const { body, statusCode } = await request(server)
      .post("/login")
      .send(payload);

    expect(statusCode).toBe(200);
  });

  it('Login: Deberia dar error si no se envian datos', async()=>{
    const { statusCode } = await request(server).post("/login").send();
    expect(statusCode).toBe(400);
  })
});

describe.only("test de productos", () =>{
  it("agregar productos", async() => {
      const newProduct ={
          "titulo": "audifonos",
          "img": "htttp:...",
          "descripcion": "inalambrico",
          "autor": 22,
          "precio": 5000
      }
      const response = await request(server)
          .post("/producto")
          .send(newProduct)

      expect(response.statusCode).toBe(201)
  }) 

  /*it("eliminar productos", async() => {
    const response = await request(server)
            .delete("/producto/")
            .set('Authorization', 'hola')
            .send()

        expect(response.statusCode).toBe(404)
  })*/
} )

