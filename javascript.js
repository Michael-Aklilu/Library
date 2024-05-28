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
      let book = document.querySelector('#form');

}

let card1, card2;

document.addEventListener("DOMContentLoaded", () => {
    card1 = document.querySelector('#book1');
    card2 = document.querySelector('#book2');
    addBookToLibrary()
    display();
    
    let button = document.querySelector('#newbook');
    button.addEventListener('click', () => {
        let form = document.querySelector('#form').style.display = 'block';
    
    let closeButton = document.querySelector('#closebutton');
    closeButton.addEventListener('click', ()=>{
        let form = document.querySelector('#form').style.display = 'none';
    })
    });
})

function display() {

    card1.innerHTML = `Book: ${myLibrary[0].name}<br>
    Author: ${myLibrary[0].author}<br>
    Genre: ${myLibrary[0].genre}<br><br>`;

    card2.innerHTML = `Book: ${myLibrary[1].name}<br>
    Author: ${myLibrary[1].author}<br>
    Genre: ${myLibrary[1].genre}<br><br>`;

}



