const studentName: string = "Shanthi";
const age: number = 36;
const isStudent: boolean = true;

const describeStudent = (name: string, age: number): string => {
    return `${name} is ${age} years old.`;
};

console.log(describeStudent(studentName, age));

const formalGreeting = (name: string, formal: boolean): string => {
    if (formal) {
        return `Good day, ${name}.`;
    }
    return `Hi ${name}!`;
};

console.log(formalGreeting(studentName, true));
console.log(formalGreeting(studentName, false));
