const Engineer = require('../lib/engineer')
describe("details", () => {
    describe("init", () => {
        it("return object ", () => {
            const obj = new Engineer();
            expect(typeof (obj)).tobe("object");
        })
        describe("getGithub function", () => {
            it("return Github name",()=>{
            const obj = new Engineer('Antonio Freewater', '2', 'testemail@gmail.com', 'Antoniofree');
            expect(obj.getGithub()).tobe('Antoniofree');
        })
    })
})});