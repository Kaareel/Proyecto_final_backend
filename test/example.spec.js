function count(a){
    return a + 1
}

describe("sample", ()=> {
    it("succesion de un numero", async() =>{
        expect(count(1)).toBe(2);
    } )
})

