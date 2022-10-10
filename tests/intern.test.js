const Intern = require('../lib/intern')
describe("details", () => {
    describe("init", () => {
        it("return object ", () => {
            const obj = new Intern();
            expect(typeof (obj)).toBe("object");
        })
        describe("getSchool", () => {
            it("return name of school", ()=>{
            const obj = new Intern('Peaberry Fudgewhistle', '1', 'testemail@gmail.com', 'USYD');
            expect(obj.getSchool()).toBe('USYD');
        })
    })
})});