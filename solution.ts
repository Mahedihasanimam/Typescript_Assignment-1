//! AssignmentAns-1 ------------------------------

const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }

  return value;
};

//! AssignmentAns-2 ------------------------------

const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

//! AssignmentAns-3 ------------------------------

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `'Name:${this.name}, Age:${this.age}'`;
  }
}

//! AssignmentAns-4 ------------------------------

type productitem = {
  title: string;
  rating: number;
};
const filterByRating = (items: productitem[]): productitem[] => {
  return items.filter((i) => i.rating >= 4);
};

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
