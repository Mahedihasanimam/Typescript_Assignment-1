TypeScript: Interface,Type and keyof Keyword এর পার্থক্য

TypeScript হলো JavaScript এর জন্য তৈরি একটি language . TypeScript আমাদের কোডকে error free রাখতে সাহায্য করে।

আজ আমরা দেখবো: Interface এবং Type এর পার্থক্য এবং keyof keyword এর ব্যবহার।

১. Interface vs Type

TypeScript এ আমরা object বা variable এর type define করার জন্য interface এবং type দুইটি ব্যবহার করি।

Interface:

Object বা class এর structure এর ভেতরের item গুলোর type define করতে ব্যবহার হয়।

একই নামের interface একাধিকবার declare করলে merge হয়ে যায়।

Type:

Primitive type, union, intersection, object সব ধরনের type define করতে পারি।

একই নামের type declare করলে error হয়।

উদাহরণ-:

// Interface----------
interface User {
id: number;
name: string;
}

// Type----------------
type Product = {
id: number;
price: number;
};

Summary-:

Interface মূলত object/class এর জন্য

Type বেশি flexible, সব ধরনের type define করা যায়

২. keyof Keyword

keyof keyword ব্যবহার করা হয় object type এর key গুলো union type হিসেবে বের করার জন্য।

উদাহরণ-:

type User = {
id: number;
name: string;
email: string;
};

type UserKeys = keyof User;

keyof এর সুবিধা:

Object এর key গুলো type safe access করা যায়

Generic function লিখতে সাহায্য করে

শেষ কথা

Interface object structure define করার জন্য

Type versatile, সব ধরনের type define করা যায়

keyof object এর key union type বের করতে সাহায্য করে
