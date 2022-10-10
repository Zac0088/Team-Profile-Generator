const Manager = require('../lib/manager')
describe("details", () => {
    describe("init", () => {
        it("return object ", () => {
            const obj = new Manager();
            expect(typeof (obj)).toBe("object");
        })
        describe("getOfficeNumber", () => {
            it("return office number ",()=>{
            const obj = new Manager('Bob', '3', 'testemail@gmail.com', '22');
            expect(obj.getOfficeNumber()).toBe('22');
        })
    })
})});