// Skill 3: Interfaces

// Task 1: Book Interface

interface Book {
  title: string;
  author: string;
  pages: number;
}

const book: Book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
};

console.log("Book title:", book.title);

// Task 2: Nested & Optional Properties

interface Address {
  city: string;
  postalCode?: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

const person1: Person = {
  name: "Anna",
  age: 30,
  address: {
    city: "Stockholm",
    postalCode: "111 22",
  },
};

const person2: Person = {
  name: "John",
  age: 35,
  address: {
    city: "Gothenburg",
  },
};

console.log("Person 1 city:", person1.address.city);
console.log("Person 2 city:", person2.address.city);

// Optional Challenge: Movie Interface

interface Movie {
  id: number;
  title: string;
  rating: number;
  genres: string[];
}

const movies: Movie[] = [
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

const getMoviesByGenre = (
  movies: Movie[],
  genre: string
): Movie[] => {
  return movies.filter((movie: Movie) =>
    movie.genres.includes(genre)
  );
};

const actionMovies: Movie[] = getMoviesByGenre(movies, "Action");

console.log(
  "Action movies:",
  actionMovies.map((movie: Movie) => movie.title)
);