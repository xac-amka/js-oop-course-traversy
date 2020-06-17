// ES5 Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year =year;
    console.log('Book initialized..');
}

// PROTOTYPE
// getSummary
Book.prototype.getSummary = function() {
    return this.title + ' was written by ' + this.author + ' in ' + this.year;
}
Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return this.title + 'is ' + years + ' years old';
}
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2020');
const book2 = new Book('Book Two', 'Jane Doe', '2010');

console.log(book2.getSummary());
console.log(book1.getAge());

console.log(book1);
console.log(book1.revise('2018'));
console.log(book1);