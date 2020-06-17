// ES5 Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year =year;
    console.log('Book initialized..');
    this.getSummary = function() {
        return this.title + ' was written by ' + this.author + ' in ' + this.year;
    }
}

// Instatiate an Object
const book1 = new Book('Book One', 'John Doe', '2020');
const book2 = new Book('Book Two', 'Jane Doe', '2010');

console.log(book1.title);