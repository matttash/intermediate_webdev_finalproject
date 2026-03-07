// spec/scriptSpec.js

// Import functions from src/script.js
const { calculateSimpleInterest, calculateTotalPayableAmount } = require('../src/script');

describe("Interest Rate Calculator Tests", function() {

    it("Calculate Simple Interest", function() {
        expect(calculateSimpleInterest(1000, 5, 2)).toBe(100); // SI = 1000*5*2/100
    });

    it("Calculate Total Amount", function() {
        expect(calculateTotalPayableAmount(1000, 50)).toBe(1050); // Total = principal + interest
    });

});