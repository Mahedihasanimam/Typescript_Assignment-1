//! AssignmentAns-1 ------------------------------
var formatValue = function (value) {
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
var getLength = function (value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value.length;
    }
};
//! AssignmentAns-3 ------------------------------
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "'Name:".concat(this.name, ", Age:").concat(this.age, "'");
    };
    return Person;
}());
var filterByRating = function (items) {
    return items.filter(function (i) { return i.rating >= 4; });
};
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
var filteredBooks = filterByRating(books);
console.log(filteredBooks);
