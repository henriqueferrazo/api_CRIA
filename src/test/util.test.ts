import Util from "../Util/Util";

test("Passar o cep '12345123' e retornar os 3 ultimos '123'", () => {
    const util = new Util()
    const zipCode:string = '12345123'
    expect(util.finalNumber(zipCode).toBe('123'));
})
