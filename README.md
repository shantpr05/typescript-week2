# TypeScript Homework

Practice based on class code.

## How to Complete

* Complete each task in a `.ts` file.
* Create a GitHub repository.
* Create a `week2` branch.
* Create a `typescript` branch from `week2`.
* Choose at least one assignment per skill.
* Submit the GitHub repository link with the correct branch.

## Resources

* [Video Tutorial](https://youtu.be/fD62mYdGQOY)
* [Sample Code](https://gist.github.com/mvdgragt/b43af564938855cab873b11ad7a52adc)
* [Node.js TypeScript Introduction](https://nodejs.org/learn/typescript/introduction)
* [W3Schools TypeScript](https://www.w3schools.com/typescript/index.php)
* [TypeScript Exercises](https://typescript-exercises.github.io/)

---

# Skill 1: Typed Variables & Functions

## Student Profile

Declare three variables to represent a student profile:

* `name: string`
* `age: number`
* `isEnrolled: boolean`

Then write an arrow function called `describeStudent` that takes a name and age and returns a string like:

```text
"Michiel is 47 years old."
```

Log the result to the console.

## Greeting with Options

Write an arrow function called `formatGreeting` that:

* Takes a `name: string` parameter.
* Takes an optional `formal?: boolean` parameter.
* Returns `"Good day, <name>."` if `formal` is `true`.
* Otherwise returns `"Hi <name>!"`.

Call the function twice:

1. Once with `formal` set to `true`.
2. Once without providing `formal`.

---

# Skill 2: Arrays & Array Methods

## Doubling Ages

Create a typed array:

```ts
ages: number[]
```

with at least 5 values.

Use `.map()` to create a new array called:

```ts
agesInFiveYears
```

where every value is increased by 5.

Log both arrays.

## Filtering Names

Create a typed array:

```ts
names: string[]
```

with at least 6 names.

Use `.filter()` to create a new array called:

```ts
shortNames
```

containing only names with 4 or fewer letters.

Log the result.

## Optional Challenge: Combined Transformation

Create a typed array:

```ts
scores: number[]
```

with at least 8 values between 0 and 100.

Using `.filter()` and `.map()` together:

1. Keep only scores that are 50 or above.
2. Convert each passing score into a letter grade string (`A`, `B`, `C`, etc.). Choose your own cutoffs.
3. Log the final array of letter grades.

### Bonus

Log how many students failed using `.filter()` and `.length`.

---

# Skill 3: Interfaces

## Book Interface

Define an interface called `Book` with:

```ts
title: string
author: string
pages: number
```

Create one `Book` object and log its title.

## Nested & Optional Properties

Define an interface `Address` with:

```ts
city: string
postalCode?: string
```

Define an interface `Person` with:

```ts
name: string
age: number
address: Address
```

Create two `Person` objects:

* One with a postal code.
* One without a postal code.

Log the city of each person.

## Optional Challenge: Interface with a Typed Function

Define an interface `Movie` with:

```ts
id: number
title: string
rating: number
genres: string[]
```

Create an array:

```ts
movies: Movie[]
```

with at least 4 movies.

Write a typed function:

```ts
getMoviesByGenre(movies: Movie[], genre: string): Movie[]
```

The function should return only movies containing that genre in their `genres` array.

Call the function and log the titles of the matching movies.

---

# Skill 4: Chaining Array Methods on Interface Data

## Filter Only

Using the `Product` interface style from class:

```ts
id
name
price
tags
```

Create an array containing at least 5 products.

Use `.filter()` to find all products priced under 1000.

Log the result.

## Filter + Map

Using the same `Product` array, chain `.filter()` and `.map()` to produce a list containing only the names of products tagged `"work"`.

Log the result.

## Optional Challenge: Filter + Map + Join

Using the same `Product` array, write a single chained expression that:

1. Filters products with more than one tag.
2. Maps them to a string in the format:

```text
"<name> ($<price>)"
```

3. Joins the results into one comma-separated string.

Log the final string with a descriptive label, for example:

```text
Multi-tag products:
```

---

# Project Structure

```text
typescript-week2/
│
├── README.md
├── .gitignore
├── studentProfile.ts
├── skill2.ts
├── skill3.ts
└── skill4.ts
```

Generated JavaScript files are ignored using `.gitignore`.

```text
*.js
```

# Git Branches

The project uses the following branch structure:

```text
main
  ↓
week2
  ↓
typescript
```

The completed assignment is submitted from the `typescript` branch.

# How to Run

Compile a TypeScript file:

```bash
tsc studentProfile.ts
```

Run the generated JavaScript:

```bash
node studentProfile.js
```

For the other files:

```bash
tsc skill2.ts
node skill2.js

tsc skill3.ts
node skill3.js

tsc skill4.ts
node skill4.js
```

# Submission

Submit the link to the GitHub repository with the correct branch.

Example:

```text
https://github.com/YOUR-USERNAME/YOUR-REPOSITORY/tree/typescript
```
