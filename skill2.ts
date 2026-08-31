// Skill 2: Arrays & Array Methods

// Task 1: Doubling Ages

const ages: number[] = [18, 21, 25, 30, 35];

const agesInFiveYears: number[] = ages.map((age: number) => age + 5);

console.log("Original ages:", ages);
console.log("Ages in five years:", agesInFiveYears);


// Task 2: Filtering Names

const names: string[] = [
  "John",
  "Anna",
  "Mike",
  "Sarah",
  "Tom",
  "Emma",
];

const shortNames: string[] = names.filter(
  (name: string) => name.length <= 4
);

console.log("Short names:", shortNames);

// Optional Challenge: Combined Transformation

const scores: number[] = [95, 82, 74, 68, 55, 49, 35, 90];

const passingGrades: string[] = scores
  .filter((score: number) => score >= 50)
  .map((score: number) => {
    if (score >= 90) {
      return "A";
    } else if (score >= 80) {
      return "B";
    } else if (score >= 70) {
      return "C";
    } else if (score >= 60) {
      return "D";
    } else {
      return "E";
    }
  });

console.log("Passing grades:", passingGrades);

const failedStudents: number = scores.filter(
  (score: number) => score < 50
).length;

console.log("Number of failed students:", failedStudents);