//! Problem-1 ------------------------------

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

//! Problem-2 ------------------------------

const getLength = (value: string | any[]) => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value.length;
  }
};

//! Problem-3 ------------------------------

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

//! Problem-4 ------------------------------

type productitem = {
  title: string;
  rating: number;
};
const filterByRating = (items: productitem[]): productitem[] => {
  return items.filter((i) => i.rating >= 4);
};

//! Problem-5 ------------------------------

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
) => {
  return users.filter((user) => user.isActive);
};
const users = [
  { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
  { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
  { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

console.log(filterActiveUsers(users));
