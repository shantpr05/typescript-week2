"use strict";
// Skill 4: Chaining Array Methods on Interface Data
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1200,
        tags: ["work", "electronics"],
    },
    {
        id: 2,
        name: "Office Chair",
        price: 450,
        tags: ["work", "furniture"],
    },
    {
        id: 3,
        name: "Headphones",
        price: 150,
        tags: ["electronics", "music"],
    },
    {
        id: 4,
        name: "Notebook",
        price: 20,
        tags: ["work", "school"],
    },
    {
        id: 5,
        name: "Desk",
        price: 800,
        tags: ["work", "furniture", "office"],
    },
];
// Task 1: Filter Only
const affordableProducts = products.filter((product) => product.price < 1000);
console.log("Products under $1000:", affordableProducts);
// Task 2: Filter + Map
const workProducts = products
    .filter((product) => product.tags.includes("work"))
    .map((product) => product.name);
console.log("Products tagged as work:", workProducts);
// Optional Challenge: Filter + Map + Join
const multiTagProducts = products
    .filter((product) => product.tags.length > 1)
    .map((product) => `${product.name} ($${product.price})`)
    .join(", ");
console.log("Multi-tag products:", multiTagProducts);
