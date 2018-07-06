let Console = require('../05. C# Console');
let expect = require("chai").expect;

describe("Console tests", function () {
    it("Must return string", function () {
        expect(Console.writeLine('test')).to.be.equal('test');
    });
    it("Must return object", function () {
        let obj = { name: 'Pesho' };
        expect(Console.writeLine(obj)).to.be.equal(JSON.stringify(obj));
    });
    it("Must throw RangeError", function() {
        expect(Console.writeLine('{0}, {1}, {2}', 1, 2, 3)).to.be.equal('1, 2, 3');
    });
    it("Must throw RangeError", function() {
        expect(() => {Console.writeLine('{0}', 1, 2)}).to.throw(RangeError);
    });
    it("Must throw TypeError", function() {
        expect(() => {Console.writeLine([], 1, 2)}).to.throw(TypeError);
    });
    it("Must throw RangeError", function() {
        expect(() => {Console.writeLine('{10}', 1, 2, 4)}).to.throw(RangeError);
    });
});