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
    
        let bookInput = document.querySelector('#book');
        let authorInput = document.querySelector('#author');
        let genreInput = document.querySelector('#genre');

        let input = new Book(`${bookInput.value}`, `${authorInput.value}`, `${genreInput.value}`);
        myLibrary.push(input);

        bookInput.value = "";
        authorInput.value = "";
        genreInput.value = "";

        
        display();

    }
function display() {

    for (let book of myLibrary) {
        let bookDiv = document.createElement("div");
        let removeBtn = document.createElement("button");
        bookDiv.innerHTML = `Name: ${book.name}<br>
        Author: ${book.author}<br> Genre: ${book.genre}`;
        removeBtn.textContent = "Remove";
        container.appendChild(bookDiv);
        container.appendChild(removeBtn);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    let button = document.querySelector('#newbook');
    button.addEventListener('click', () => {
        let form = document.querySelector('#form').style.display = 'block';
        let clear = document.querySelector('#container');
        clear.innerHTML = "";
    })

    let closeButton = document.querySelector('#closebutton');
    closeButton.addEventListener('click', () => {
             form = document.querySelector('#form').style.display = 'none';
        })

    let submitButton = document.querySelector('#submitbutton');
    submitButton.addEventListener('click', (event)=>{
        event.preventDefault(); 
        addBookToLibrary();
        form.style.display = 'none';
    })
        display();
})

