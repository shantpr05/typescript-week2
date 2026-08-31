"use strict";
// Skill 1: Union Types
const showID = (id) => {
    return `Your ID is: ${id}`;
};
console.log(showID(12345));
console.log(showID("AB123"));
const eatFruit = (fruit) => {
    return `You ate an ${fruit}.`;
};
console.log(eatFruit("apple"));
console.log(eatFruit("orange"));
const printResult = (result) => {
    return result ? "Pass" : "Fail";
};
console.log(printResult(true));
console.log(printResult(false));
