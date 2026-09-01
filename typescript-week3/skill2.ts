interface Book {
  title: string;    
  pages: number;    

}

const myBook: Book = {
  title: "The Great Gatsby",    
    pages: 180,
};

const desiredBook = (book:Book): string => {
  return `The book "${book.title}" has ${book.pages} pages.`;
};

console.log(desiredBook(myBook));

// 2. Combining Interfaces

interface Teacher {
    name: string;       
    subject: string;    
}

interface Employee {
    id: number;
    email: string;
}

type schoolTeacher = Teacher & Employee;

const myTeacher: schoolTeacher = {
    name: "Anna smith",
    subject: "Mathematics",
    id: 123,
    email: "anna.smith@school.edu"
};

const printTeacherInfo = (teacher: schoolTeacher): void => {
    console.log(` ${teacher.name} teaches ${teacher.subject}. ` +
        `Employee ID: ${teacher.id}, Email: ${teacher.email}`);
};

printTeacherInfo(myTeacher);

// 3. Challenge (Optional): Favorite Car

interface Car {
    brand: string;
    year: number;
}

const printCar = (car: Car): string => {
    return `Brand: ${car.brand}, Year: ${car.year}`;
};

const myCar: Car = {
    brand: "Toyota",
    year: 2022
};

console.log(printCar(myCar));