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

const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

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

type productitem = {
  title: string;
  rating: number;
};
const filterByRating = (items: productitem[]): productitem[] => {
  return items.filter((i) => i.rating >= 4);
};

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
) => {
  return users.filter((user) => user.isActive);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = <T>(arr1: T[], arr2: T[]): T[] => {
  return Array.from(new Set([...arr1, ...arr2]));
};

const calculateTotalPrice = (
  products: {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }[]
): number => {
  return products.reduce((total, product) => {
    const discountedPrice = product.discount ? product.discount : 0;
    const finalprice =
      product.price * product.quantity * (1 - discountedPrice / 100);
    return total + finalprice;
  }, 0);
};
