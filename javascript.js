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
    

}


document.addEventListener("DOMContentLoaded", () => {
    
    addBookToLibrary()
    display();

    let button = document.querySelector('#newbook');
    button.addEventListener('click', () => {
        let form = document.querySelector('#form').style.display = 'block';

        let closeButton = document.querySelector('#closebutton');
        closeButton.addEventListener('click', () => {
            let form = document.querySelector('#form').style.display = 'none';
        })
    });
})

function display() {

    let container = document.querySelector("#container");
    for(let book of myLibrary){
        let bookDiv = document.createElement("div");
        bookDiv.innerHTML = `Name: ${book.name}<br>
        Author: ${book.author}<br> Genre: ${book.genre}`;
        container.appendChild(bookDiv);
    }


}
