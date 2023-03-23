const request = require("supertest");
const server = require("../index");

describe("test de productos", () =>{
    it("agregar productos", async() => {
        const newProduct ={
            "id": "1",
            "titulo": "audifonos",
            "descripcion": "inalambrico",
            "img": "htttp:...",
            "precio": "5000",
            "autor": "2"
        }
        const response = await request(server)
            .post("/producto")
            .send(newProduct)

        expect(response.statusCode).toBe(201)
    }) 
} )