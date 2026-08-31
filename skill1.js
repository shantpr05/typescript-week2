"use strict";
const studentName = "Shanthi";
const age = 36;
const isStudent = true;
const describeStudent = (name, age) => {
    return `${name} is ${age} years old.`;
};
console.log(describeStudent(studentName, age));
const formalGreeting = (name, formal) => {
    if (formal) {
        return `Good day, ${name}.`;
    }
    return `Hi ${name}!`;
};
console.log(formalGreeting(studentName, true));
console.log(formalGreeting(studentName, false));
