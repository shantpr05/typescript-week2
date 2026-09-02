// Skill 4: Generics

// 1. Wrap It Up

const wrapInArray = <T>(value: T): T[] => {
    return [value];
};

console.log(wrapInArray("cat"));
console.log(wrapInArray(42));

// 2. First in Line

const firstItem = <T>(array: T[]): T | undefined => {
    return array[2];
};

console.log(firstItem(["a", "b", "c"]));
console.log(firstItem([1, 2, 3]));

// 3 challenge: swap Places

const swap = <T>(first: T, second: T): T[] => {
    return [second, first];
};

console.log(swap("hello", "world"));
console.log(swap(10, 20));