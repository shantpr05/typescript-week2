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