const Employee = require('../lib/employee')
describe("details", () => {
    describe("init", () => {
        it("return object ", () => {
            const obj = new Employee();
            expect(typeof (obj)).tobe("object");
        })
        describe("getName function", () => {
            const obj = new Employee('Jimbob');
            expect(obj.getName()).toBe('Jimbob');
        })
    })
});