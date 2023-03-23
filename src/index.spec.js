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
    console.log({ body });

    expect(statusCode).toBe(200);
  });

  it('Login: Deberia dar error si no se envian datos', async()=>{
    const { statusCode } = await request(server).post("/login").send();
    expect(statusCode).toBe(400);
  })
});
