// Skill 4: Chaining Array Methods on Interface Data

interface Product {
  id: number;
  name: string;
  price: number;
  tags: string[];
}

const products: Product[] = [
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

const affordableProducts: Product[] = products.filter(
  (product: Product) => product.price < 1000
);

console.log("Products under $1000:", affordableProducts);

// Task 2: Filter + Map

const workProducts: string[] = products
  .filter((product: Product) => product.tags.includes("work"))
  .map((product: Product) => product.name);

console.log("Products tagged as work:", workProducts);

// Optional Challenge: Filter + Map + Join

const multiTagProducts: string = products
  .filter((product: Product) => product.tags.length > 1)
  .map((product: Product) => `${product.name} ($${product.price})`)
  .join(", ");

console.log("Multi-tag products:", multiTagProducts);