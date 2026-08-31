"use strict";
// Skill 2: Arrays & Array Methods
// Task 1: Doubling Ages
const ages = [18, 21, 25, 30, 35];
const agesInFiveYears = ages.map((age) => age + 5);
console.log("Original ages:", ages);
console.log("Ages in five years:", agesInFiveYears);
// Task 2: Filtering Names
const names = [
    "John",
    "Anna",
    "Mike",
    "Sarah",
    "Tom",
    "Emma",
];
const shortNames = names.filter((name) => name.length <= 4);
console.log("Short names:", shortNames);
// Optional Challenge: Combined Transformation
const scores = [95, 82, 74, 68, 55, 49, 35, 90];
const passingGrades = scores
    .filter((score) => score >= 50)
    .map((score) => {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "E";
    }
});
console.log("Passing grades:", passingGrades);
const failedStudents = scores.filter((score) => score < 50).length;
console.log("Number of failed students:", failedStudents);
