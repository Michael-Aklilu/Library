const myLibrary = [];

function Book(name, author, genre) {
    this.name = name;
    this.author = author;
    this.genre = genre;
}

const book1 = new Book('Harry Potter', 'JK Rowling', 'Fantasy');
const book2 = new Book('November 9', 'Coleen Hoover', 'Romance');

myLibrary.push(book1);
myLibrary.push(book2);

function addBookToLibrary() {
    const book3 = new Book(prompt('Book name?'), prompt('Book author'), prompt('Book genre'));
    myLibrary.push(book3);
}

let card1, card2, card3;

document.addEventListener("DOMContentLoaded", function () {
     card1 = document.querySelector('#book1');
     card2 = document.querySelector('#book2');
     card3 = document.querySelector('#book3');
     addBookToLibrary()
     display();
})

function display() {

    card1.innerHTML = `Book: ${myLibrary[0].name}<br>
    Author: ${myLibrary[0].author}<br>
    Genre: ${myLibrary[0].genre}<br><br>`;

    card2.innerHTML = `Book: ${myLibrary[1].name}<br>
    Author: ${myLibrary[1].author}<br>
    Genre: ${myLibrary[1].genre}<br><br>`;

    card3.innerHTML = `Book: ${myLibrary[2].name}<br>
    Author: ${myLibrary[2].author}<br>
    Genre: ${myLibrary[2].genre}`;


}

