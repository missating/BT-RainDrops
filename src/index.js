"use strict";

const primeFactors = (value) => {

    //initialize an empty variable to hold the desried output
    let output = "";

    //check if the argument being passed into the function is a number
    if (typeof (value) === "number") {
        //if the argument is a number do the following:
        if (value === 0) {
            return 0;
        }

        if (value % 3 === 0) {
            output += "Pling";
        }

        if (value % 5 === 0) {
            output += "Plang";
        }

        if (value % 7 === 0) {
            output += "Plong";
        }
        //if the argument is not a number return this:
    } else {
        return 'Please enter a number';
    }
    //if the argument was a number, check if the output variable has a value
    //then return the output
    if (output) {
        return output;
        //if the argumnet was a number, but the output variable does not have a value
        //return the argument
    } else {
        return value;
    }

};

export {
    primeFactors
};