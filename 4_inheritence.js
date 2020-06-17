// ES5 Constructor
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year =year;
    console.log('Book initialized..');
}

// getSummary prototype
Book.prototype.getSummary = function() {
    return this.title + ' was written by ' + this.author + ' in ' + this.year;
}

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}
// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// To use Magazine Constructor
Magazine.prototype.constructor = Magazine;

// Instanceof Magazine Object
const mag1 = new Magazine('Magazine One','John Dude','2011','Jun');



console.log(mag1);