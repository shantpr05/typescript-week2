"use strict";
// Skill 3: Interfaces
const book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
};
console.log("Book title:", book.title);
const person1 = {
    name: "Anna",
    age: 30,
    address: {
        city: "Stockholm",
        postalCode: "111 22",
    },
};
const person2 = {
    name: "John",
    age: 35,
    address: {
        city: "Gothenburg",
    },
};
console.log("Person 1 city:", person1.address.city);
console.log("Person 2 city:", person2.address.city);
const movies = [
    {
        id: 1,
        title: "Inception",
        rating: 8.8,
        genres: ["Action", "Sci-Fi", "Thriller"],
    },
    {
        id: 2,
        title: "Toy Story",
        rating: 8.3,
        genres: ["Animation", "Comedy", "Family"],
    },
    {
        id: 3,
        title: "The Dark Knight",
        rating: 9.0,
        genres: ["Action", "Crime", "Drama"],
    },
    {
        id: 4,
        title: "Finding Nemo",
        rating: 8.2,
        genres: ["Animation", "Family", "Adventure"],
    },
];
const getMoviesByGenre = (movies, genre) => {
    return movies.filter((movie) => movie.genres.includes(genre));
};
const actionMovies = getMoviesByGenre(movies, "Action");
console.log("Action movies:", actionMovies.map((movie) => movie.title));
