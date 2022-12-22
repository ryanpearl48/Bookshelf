import { bookData } from "./book-data.js"
// Creating Bookshelf class to set properties of bookshelf.
// Needs to have ability to add books.
class Bookshelf {
    constructor(author, language, subject, title){
        this.author = author;
        this.language = language;
        this.subject = subject;
        this.title = title;
    };
};

// I struggled pretty hard with getting the book info out insilde the bookshelf class

// For loop to display all books.
    for(let i = 0; i < bookData.length; i++){
// Creating book DIV's and paragaph elements inside them.
    const book = document.createElement("div");
    const innerBook = document.createElement("p");
    book.appendChild(innerBook);
// Setting the inner html to the stringified book data.
    innerBook.innerHTML = JSON.stringify(bookData[i])     
// Appending the filled out book data
    document.body.append(book);
};


// Same with adding books to the bookshelf, big struggle bus.

// Book class to extend book and be able to add books
class Book extends Bookshelf {
    constructor(author, language, subject, title){
    super(author, language, subject, title);
    bookData;
    }
// Attempted setting books
    setBook(){
        let newBook = new Book("Ryan", "en", "SciFi", "Freakin Lazers")
        bookData.push(newBook[i]);
    }

};






/* EVERYTHING BELOW HERE WAS ME NOT UNDERSTANDING THE ASSIGNMENT AND TRYING TO MAKE A SEARCH FUNCTION 
I SPENT YESTERDAY ON WORKING ON THIS */


// const bookSearchReturn = document.querySelector(".results")
// const bookSearchInput = document.querySelector("#search")
// const bookSearchButton = document.querySelector(".searchButton")


// get searchBook() {
//     bookSearchButton.addEventListener("click", () => {
//     for(let i = 0; i < bookData.length; i++){
//         for (const [key, val] of Object.entries(bookData)) {
//             if(`${author.value}` || `${this.language}` || `${this.title}` `${this.subject}` in bookSearchInput.value){
//                 return bookString[i].author, bookData[i].language, bookData[i].subject, bookData[i].title = bookSearchReturn.innerHTML 
//             }
//             };
//         };
//     });
// };
// };
// I figured out how to access the data, just tryinmg to get it into display form is irritating
// console.log(bookData[0].author)
// console.log(bookData[0].language)
// console.log(bookData[0].subject)
// console.log(bookData[0].title)
// console.log(bookData.length)


// For loop to access book data
// function retBook(){
// bookSearchButton.addEventListener("click", () => {
// for (const [key, val] of Object.entries(bookData)) {
//     if(bookSearchInput.value == key || val in bookData){
//         return bookData[key, val] = bookSearchReturn.innerHTML; 
//     }
    // console.log(key, val.author)
    // console.log(key, val.language)
    // console.log(key, val.subject)
    // console.log(key, val.title)
// };
// });
// };
// retBook();
