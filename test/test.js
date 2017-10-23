import chai from "chai";

import {
    primeFactors
} from "../src/index.js";

let assert = chai.assert;

describe("primeFactors", () => {
    describe("Handles valid input", () => {
        it("Should return Plong for primeFactors of 28", () => {
            assert.equal(primeFactors(28), "Plong");
        });
        it("Should return Plang for primeFactors of 10", () => {
            assert.equal(primeFactors(10), "Plang");
        });
        it("Should return PlingPlang for primeFactors of 1755", () => {
            assert.equal(primeFactors(1755), "PlingPlang");
        });
        it("Should return Pling for primeFactors of 3", () => {
            assert.equal(primeFactors(3), "Pling");
        });
        it("Should return PlingPlangPlong for primeFactors of 105", () => {
            assert.equal(primeFactors(105), "PlingPlangPlong");
        });
        it("Should return 34 for primeFactors of 34", () => {
            assert.equal(primeFactors(34), 34);
        });
        it("Should return 17 for primeFactors of 17", () => {
            assert.equal(primeFactors(17), 17);
        });
        it("Should return 0 for primeFactors of 0", () => {
            assert.equal(primeFactors(0), 0);
        });
        it("Should return Plong for primeFactors of -28", () => {
            assert.equal(primeFactors(-28), "Plong");
        });
    });

    describe("Handles invalid input", () => {
        it("Should return Please enter a number for primeFactors of 'word'", () => {
            assert.equal(primeFactors("word"), 'Please enter a number');
        });
        it("Should return Please enter a number for primeFactors of [2,4]", () => {
            assert.equal(primeFactors([2, 4]), 'Please enter a number');
        });
        it("Should return Please enter a number for primeFactors of {name: 'John'}", () => {
            assert.equal(primeFactors({
                name: 'John'
            }), 'Please enter a number');
        });
        it("Should return Please enter a number for primeFactors of ''", () => {
            assert.equal(primeFactors(), 'Please enter a number');
        });
        it("Should return Please enter a number for primeFactors of null", () => {
            assert.equal(primeFactors(null), 'Please enter a number');
        });

    });
});