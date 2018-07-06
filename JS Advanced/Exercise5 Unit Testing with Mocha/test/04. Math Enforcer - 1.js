let expect = require('chai').expect;
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe ('Math Enforcer Unit Tests', function () {
    describe('addFive test', function () {
        it('with non-number value (should return undefined)', function () {
            expect(mathEnforcer.addFive('aaa')).to.be.undefined;
        });
        it('with positive integer number (should return correct result)', function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it('with negative integer number (should return correct result)', function () {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });
        it('with floating-point value (should return correct result)', function () {
            expect(mathEnforcer.addFive(5.53)).to.be.closeTo(10.53, 0.01);
        })
    });
    describe('substractTen tests', function () {
        it('with non-number value (should return undefined)', function () {
            expect(mathEnforcer.subtractTen('aaa')).to.be.undefined;
        });
        it('with positive integer number (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });
        it('with negative integer number (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });
        it('with floating-point value (should return correct result)', function () {
            expect(mathEnforcer.subtractTen(15.53)).to.be.closeTo(5.53, 0.01);
        })
    });
    describe('sum tests', function () {
        it('with a non-number value (should return undefined)', function () {
            expect(mathEnforcer.sum('asd', 5)).to.be.undefined;
        });
        it('with a non-number value (should return undefined)', function () {
            expect(mathEnforcer.sum(5, 'asd')).to.be.undefined;
        });
        it('with a positive integer value (should return correct result)', function () {
            expect(mathEnforcer.sum(5, 10)).to.be.equal(15);
        });
        it('with a negative number value (should return correct result)', function () {
            expect(mathEnforcer.sum(-5, -10)).to.be.equal(-15);
        });
        it('with a floating-point value (should return correct result)', function () {
            expect(mathEnforcer.sum(5.12, 10.77)).to.be.closeTo(15.89, 0.01);
        });
    })
});