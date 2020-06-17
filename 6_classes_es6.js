// ES6 Constructor
class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return this.title + ' was written by ' + this.author + ' in ' + this.year;
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
        return this.title + ' is ' + years + ' years old.';
    }
    revise(newYear){
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore(){
        return 'Noble Medal'
    }
}

// Instanceof Book
const book1 = new Book('Book One', 'Juggernaut', '2015');

console.log(book1);
console.log(topBookStore());